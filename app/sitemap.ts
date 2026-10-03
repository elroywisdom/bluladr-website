import type { MetadataRoute } from "next";

const BASE = "https://bluladr.com";

const COURSES = [
  "brand-strategy",
  "strategic-communications",
  "creative-thinking",
  "brand-stewardship",
  "creative-project-management",
  "campaign-content-development",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                     changeFrequency: "weekly",  priority: 1.0  },
    { url: `${BASE}/about`,          changeFrequency: "monthly", priority: 0.9  },
    { url: `${BASE}/what-we-do`,     changeFrequency: "monthly", priority: 0.9  },
    { url: `${BASE}/blustrategy`,    changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/bluexecutive`,   changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/bluacademy`,     changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/our-approach`,   changeFrequency: "monthly", priority: 0.8  },
    { url: `${BASE}/work-with-us`,   changeFrequency: "monthly", priority: 0.8  },
    { url: `${BASE}/faq`,            changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/helloblu`,       changeFrequency: "weekly",  priority: 0.8  },
    { url: `${BASE}/contact`,        changeFrequency: "monthly", priority: 0.9  },
    { url: `${BASE}/privacy-policy`, changeFrequency: "yearly",  priority: 0.3  },
    { url: `${BASE}/terms-of-use`,   changeFrequency: "yearly",  priority: 0.3  },
  ];

  const courseRoutes: MetadataRoute.Sitemap = COURSES.map((slug) => ({
    url: `${BASE}/bluacademy/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...courseRoutes];
}
