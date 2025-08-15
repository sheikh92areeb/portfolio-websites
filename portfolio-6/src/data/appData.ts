import { skillImages, socialIcon } from "../assets/assets";
import { yearsFrom } from "../utils/utils";
import type { AboutItems, NavItems, Reviews, Sitemap, SkillItems, SocialLinks } from "./dataInterfaces";
import projectItems from "./ProjectsData";

// ---------- APP DATA CONTENT ----------

// NAVBAR
export const navItems: Readonly<NavItems[]> = [
  { label: 'Home', link: '#home', className: 'nav-link active' },
  { label: 'About', link: '#about', className: 'nav-link' },
  { label: 'Work', link: '#work', className: 'nav-link' },
  { label: 'Reviews', link: '#reviews', className: 'nav-link' },
  { label: 'Contact', link: '#contact', className: 'nav-link' }
];

// HERO
export const heroTagline: string = "Available for work";
export const heroHeadline: string = "Building Scalable Modern Websites for the Future";

// ABOUT
export const aboutItems: Readonly<AboutItems[]> = [
  { label: 'Project done', number: projectItems.length },
  { label: 'Satisfied Clients', number: 3 },
  { label: 'Years of experience', number: yearsFrom(2022) },
];

export const aboutBio: string = "Hi, I'm Areeb — a professional web developer specializing in creating visually stunning, user-friendly, and high-performance websites. With expertise in modern web technologies, I bring your ideas to life through creative design and efficient coding. My goal is to deliver websites that not only look exceptional but also drive results, boost user engagement, and rank higher in search engines.";

// SKILLS
export const skillHeadline: string = "Essential Tools I use";
export const skillText: string = "Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.";

export const skillItem: Readonly<SkillItems[]> = [
  { imgSrc: skillImages.html5, label: 'HTML', desc: 'Web Structure' },
  { imgSrc: skillImages.css3, label: 'CSS', desc: 'User Interface' },
  { imgSrc: skillImages.tailwindcss, label: 'TailwindCSS', desc: 'User Interface' },
  { imgSrc: skillImages.bootstrap, label: 'Bootstrap', desc: 'User Interface' },
  { imgSrc: skillImages.MaterialUI, label: 'Material UI', desc: 'User Interface' },
  { imgSrc: skillImages.javascript, label: 'JavaScript', desc: 'Interaction' },
  { imgSrc: skillImages.typescript, label: 'TypeScript', desc: 'Interaction' },
  { imgSrc: skillImages.jQuery, label: 'Jquery', desc: 'Interaction' },
  { imgSrc: skillImages.react, label: 'React', desc: 'Framework' },
  { imgSrc: skillImages.nodejs, label: 'NodeJS', desc: 'Web Server' },
  { imgSrc: skillImages.Socketio, label: 'Socket.io', desc: 'Web Socket' },
  { imgSrc: skillImages.expressjs, label: 'ExpressJS', desc: 'Node Framework' },
  { imgSrc: skillImages.Nextjs, label: 'NextJS', desc: 'JS Framework' },
  { imgSrc: skillImages.PHP, label: 'PHP', desc: 'Backend' },
  { imgSrc: skillImages.python, label: 'Python', desc: 'Backend' },
  { imgSrc: skillImages.Streamlit, label: 'Streamlit', desc: 'Python Framework' },
  { imgSrc: skillImages.mongodb, label: 'MongoDB', desc: 'Database' },
  { imgSrc: skillImages.mysql, label: 'MySQL', desc: 'Database' },
  { imgSrc: skillImages.postgresql, label: 'PostgreSQL', desc: 'Database' },  
  { imgSrc: skillImages.Git, label: 'Git', desc: 'Project Manager' },
  { imgSrc: skillImages.GitHub, label: 'GitHub', desc: 'Project Manager' },  
  { imgSrc: skillImages.Jupyter, label: 'Jupyter', desc: 'Development' },    
  { imgSrc: skillImages.Postman, label: 'Postman', desc: 'API Testing' },
  { imgSrc: skillImages.Vitejs, label: 'Vite', desc: 'Building Tool' },
  { imgSrc: skillImages.netlify, label: 'Netlify', desc: 'Deployment' },
  { imgSrc: skillImages.Vercel, label: 'Vercel', desc: 'Deployment' },  
];

// WORK
export const workHeadline: string = "My portfolio highlights";

// REVIEWS
export const reviewHeadline: string = "What our customers say";

export const reviews: Readonly<Reviews[]> = [
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Sophia Ramirez',
    imgSrc: '/src/assets/people-1.jpg',
    company: 'PixelForge'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Ethan Caldwell',
    imgSrc: '/src/assets/people-2.jpg',
    company: 'NexaWave'
  },
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Liam Bennett',
    imgSrc: '/src/assets/people-3.jpg',
    company: 'CodeCraft'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Noah Williams',
    imgSrc: '/src/assets/people-4.jpg',
    company: 'BrightWeb'
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Ava Thompson',
    imgSrc: '/src/assets/people-5.jpg',
    company: 'TechMosaic'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Jonathan',
    imgSrc: '/src/assets/people-6.jpg',
    company: 'Skyline Digital'
  }
];

// CONTACT
export const contactHeadline: string = "Contact me for collaboration";
export const contactText: string = "Reach out today to discuss your project needs and start collaborating on something amazing!";

export const socialLinks: Readonly<SocialLinks[]> = [
  {
    href: 'https://github.com/sheikh92areeb',
    icon: socialIcon.github,
    alt: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/areeb-sheikh18/',
    icon: socialIcon.linkedin,
    alt: 'LinkedIn'
  },
  {
    href: 'https://x.com/areeb_sheikh1',
    icon: socialIcon.x,
    alt: 'Twitter X'
  },  
];

// FOOTER
export const footerHeadline: string = "Let&apos;s work together today!";

export const sitemap: Readonly<Sitemap[]> = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact me', href: '#contact' }
];
