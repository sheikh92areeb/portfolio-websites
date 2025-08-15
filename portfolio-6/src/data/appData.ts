import type { NavItems } from "./dataInterfaces";

export const navItems: Readonly<NavItems[]> = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',      
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden!'
    }
  ];