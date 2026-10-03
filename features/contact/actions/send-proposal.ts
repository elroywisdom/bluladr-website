"use server";

import { Resend } from "resend";
import fs from "fs/promises";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key");

export interface ProposalPayload {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  service: "BluStrategy" | "BluExecutive" | "BluAcademy" | "General Inquiry";
  budget?: string;
  timeline?: string;
  message: string;
  honeypot?: string;
}

export interface ProposalResult {
  success?: boolean;
  message?: string;
  error?: string;
}

export async function submitProposal(data: ProposalPayload): Promise<ProposalResult> {
  // 1. Anti-Spam Honeypot check: If the hidden honeypot field is filled, silently ignore
  if (data.honeypot) {
    return { success: true, message: "Thank you for your proposal request." };
  }

  // 2. Field validation
  if (!data.name || !data.name.trim()) {
    return { error: "Please provide your name." };
  }
  if (!data.email || !data.email.trim() || !data.email.includes("@")) {
    return { error: "Please provide a valid email address." };
  }
  if (!data.message || !data.message.trim()) {
    return { error: "Please share a brief note about your project or inquiry." };
  }

  const payload = {
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone?.trim() || "",
    organization: data.organization?.trim() || "",
    service: data.service,
    budget: data.budget || "Not specified",
    timeline: data.timeline || "Not specified",
    message: data.message.trim(),
  };

  // 3. Zero-loss local preservation layer
  try {
    const backupDir = path.join(process.cwd(), "data/contact-submissions");
    await fs.mkdir(backupDir, { recursive: true });
    await fs.appendFile(
      path.join(backupDir, "submissions.log"),
      JSON.stringify({ timestamp: new Date().toISOString(), ...payload }) + "\n",
      "utf8"
    );
  } catch (backupErr) {
    console.warn("[BluLadr] Local backup notice:", backupErr);
  }

  // 4. Send via Resend if API key is provided
  if (process.env.RESEND_API_KEY) {
    try {
      const fromAddress = process.env.RESEND_FROM_EMAIL || "BluLadr <hello@bluladr.com>";
      const teamInbox = process.env.CONTACT_RECIPIENT_EMAIL || "hello@bluladr.com";

      // 4a. Internal Notification
      await resend.emails.send({
        from: fromAddress,
        to: teamInbox,
        replyTo: payload.email,
        subject: `[Proposal Inquiry] ${payload.service} — ${payload.name} (${payload.organization || "Independent"})`,
        text: `New Inquiry from ${payload.name} (${payload.email})\nOrganisation: ${payload.organization || "N/A"}\nPhone: ${payload.phone || "N/A"}\nService: ${payload.service}\nBudget: ${payload.budget}\nTimeline: ${payload.timeline}\n\nProject Details:\n${payload.message}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 620px; margin: 0 auto; padding: 28px; border: 1px solid #E2E8F0; border-radius: 12px; background-color: #ffffff;">
            <div style="margin-bottom: 24px; border-bottom: 2px solid #1F4591; padding-bottom: 16px;">
              <h2 style="color: #1F4591; margin: 0; font-size: 22px;">New Client Proposal Request</h2>
              <p style="color: #64748B; margin: 6px 0 0 0; font-size: 14px;">Submitted via bluladr.com</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #64748B; width: 140px;">Client Name:</td><td style="font-weight: bold; color: #0A0D14;">${payload.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B;">Email:</td><td><a href="mailto:${payload.email}" style="color: #049DD9; font-weight: 600; text-decoration: none;">${payload.email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748B;">Phone:</td><td style="color: #0A0D14;">${payload.phone || "Not specified"}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B;">Organisation:</td><td style="font-weight: bold; color: #0A0D14;">${payload.organization || "Not specified"}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B;">Service Area:</td><td style="color: #1F4591; font-weight: bold;">${payload.service}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B;">Budget Range:</td><td style="color: #0A0D14;">${payload.budget}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B;">Target Timeline:</td><td style="color: #0A0D14;">${payload.timeline}</td></tr>
            </table>

            <div style="background-color: #F8FAFC; border-left: 4px solid #049DD9; padding: 18px; border-radius: 6px; margin-bottom: 24px;">
              <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; color: #64748B; letter-spacing: 0.05em;">Project Description</h4>
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #0A0D14; white-space: pre-wrap;">${payload.message}</p>
            </div>

            <div style="font-size: 12px; color: #94A3B8; text-align: center; border-top: 1px solid #E2E8F0; padding-top: 18px;">
              BluLadr Ltd · Abuja, Nigeria · Click &ldquo;Reply&rdquo; to respond directly to ${payload.name}.
            </div>
          </div>
        `,
      });

      // 4b. Confirmation email to client
      await resend.emails.send({
        from: fromAddress,
        to: payload.email,
        subject: "We've received your inquiry — BluLadr",
        text: `Hello ${payload.name},\n\nThank you for reaching out to BluLadr. We have received your inquiry regarding ${payload.service}.\n\nOur team will review your project requirements and be in touch within 24 to 48 business hours.\n\nWarm regards,\nThe BluLadr Team\nbluladr.com`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background-color: #ffffff; border: 1px solid #E2E8F0; border-radius: 12px;">
            <div style="margin-bottom: 24px;">
              <h1 style="color: #1F4591; font-size: 24px; margin: 0 0 8px 0;">Hello ${payload.name},</h1>
              <p style="color: #0A0D14; font-size: 16px; line-height: 1.6; margin: 0;">
                Thank you for reaching out to BluLadr. We have received your inquiry regarding <strong>${payload.service}</strong>.
              </p>
            </div>

            <p style="color: #475569; font-size: 15px; line-height: 1.6;">
              Good work begins with clear thinking. Our strategy team is reviewing your project details and will be in touch within <strong>24 to 48 business hours</strong> with next steps or discovery call availability.
            </p>

            <div style="margin: 28px 0; padding: 20px; background-color: #F8FAFC; border-radius: 8px; border: 1px solid #E2E8F0;">
              <h4 style="margin: 0 0 8px 0; color: #1F4591; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Inquiry Overview</h4>
              <p style="margin: 0; font-size: 14px; color: #475569;"><strong>Service Area:</strong> ${payload.service}</p>
              ${payload.organization ? `<p style="margin: 4px 0 0 0; font-size: 14px; color: #475569;"><strong>Organisation:</strong> ${payload.organization}</p>` : ""}
            </div>

            <p style="color: #475569; font-size: 14px; line-height: 1.6; margin-bottom: 28px;">
              If you have any urgent questions in the meantime, simply reply to this email or reach us at <strong>0902 081 1734</strong>.
            </p>

            <div style="border-top: 1px solid #E2E8F0; padding-top: 20px; font-size: 13px; color: #94A3B8;">
              <p style="margin: 0; font-weight: bold; color: #1F4591;">BluLadr Ltd</p>
              <p style="margin: 4px 0 0 0;">Creativity is a skill. · Abuja, Nigeria · bluladr.com</p>
            </div>
          </div>
        `,
      });

      // 4c. Optional Audience CRM Sync
      if (process.env.RESEND_AUDIENCE_ID) {
        try {
          await resend.contacts.create({
            email: payload.email,
            firstName: payload.name.split(" ")[0],
            lastName: payload.name.split(" ").slice(1).join(" ") || "",
            audienceId: process.env.RESEND_AUDIENCE_ID,
          });
        } catch (crmErr) {
          console.warn("[BluLadr] Contact sync notice:", crmErr);
        }
      }
    } catch (sendErr) {
      console.error("[BluLadr] Resend send error:", sendErr);
      return {
        success: true,
        message: "Your proposal request was received and saved. Our team will contact you shortly.",
      };
    }
  }

  return {
    success: true,
    message: "Thank you! Your proposal request has been received. We will be in touch shortly.",
  };
}
