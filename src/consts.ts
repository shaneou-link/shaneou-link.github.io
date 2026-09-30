/**
 * Site-wide constants.
 * Edit here for global navigation, hero copy, and site metadata.
 */

export const SITE_TITLE = 'Shane Ou';
export const SITE_DESCRIPTION =
  '记录互联网架构、编程语言、AI 落地的学习与实践。';

export type NavItem = {
  href: string;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: '/home', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
];
