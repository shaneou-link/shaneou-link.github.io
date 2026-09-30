/** A link shown in the hero and footer.
 *  `icon` is any name from src/components/Icon.astro */
export interface SocialLink {
  url: string;
  label: string;
  icon?:
    | 'github'
    | 'linkedin'
    | 'instagram'
    | 'email'
    | 'rss'
    | 'download'
    | 'arrow-right'
    | 'arrow-left'
    | 'sun'
    | 'moon';
}

/**
 * ─────────────────────────────────────────────────────────────
 *  Site identity — edit this file first.
 *  Everything on the site (titles, meta tags, footer, hero
 *  social links) reads from here.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  /** Full name — used for <title> and meta tags */
  title: 'Shane Ou',
  /** Short handle used in page titles and the brand mark */
  shortTitle: 'shaneou',
  /** Default meta description for pages that don't set their own */
  description:
    '记录互联网架构、编程语言、AI 落地的学习与实践。',
  /** Production URL — no trailing slash. Used for canonical URLs, OG tags, RSS and sitemap */
  url: 'https://shaneou-link.github.io',
  author: {
    name: 'Shane Ou',
    email: 'hello@example.com',         // TODO: replace with real email
    location: 'China',
    /** Optional: link to a PDF résumé served from /public */
    resume: '/resume/Resume.pdf',
  },
  /** Shown in the hero and footer. Set a slot to null to skip rendering it. */
  socials: {
    github:    { url: 'https://github.com/shaneou-link', label: 'GitHub', icon: 'github' },     // TODO: replace handle
    linkedin:  { url: 'https://www.linkedin.com/in/shaneou', label: 'LinkedIn', icon: 'linkedin' }, // TODO: replace or set to null
    instagram: { url: 'https://www.instagram.com/shaneou', label: 'Instagram', icon: 'instagram' }, // TODO: replace or set to null
    email:     { url: 'mailto:hello@example.com', label: 'Email', icon: 'email' },            // TODO: replace
    rss:       { url: '/rss.xml', label: 'RSS', icon: 'rss' },
  } satisfies Record<string, SocialLink | null>,
};

export type SocialKey = keyof typeof site.socials;

/**
 * Prefix a root-relative path ("/img/x.jpg") with the configured base
 * path. Pass-through for external URLs and already-prefixed paths.
 */
export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  if (!path.startsWith('/')) return path;
  if (path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
};
