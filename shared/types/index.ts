/** Nav link shape used by header and footer */
export interface NavLink {
  label: string;
  href: string;
}

/** Generic metadata shape for page routes */
export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
}
