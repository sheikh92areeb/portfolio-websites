import { projectImages } from "../assets/assets";

interface ProjectItems {
    imgSrc:string,
    title: string,
    tags: string[],
    projectLink: string
}

export interface ProjectCardProps {
    imgSrc: string,
    title: string,
    tags: string[],
    projectLink?: string,
    classes?: string
}

const projectItems: Readonly<ProjectItems[]> = [
  {
    imgSrc: projectImages.coffeeShop,
    title: 'Coffee Shop Website',
    tags: ['Frontend', 'Parallax', 'Development'],
    projectLink: 'https://cuffee-shop.netlify.app/'
  },
  {
    imgSrc: projectImages.loftcity,
    title: 'LoftCity Vacataional Renatal Company',
    tags: ['Frontend', 'React', 'Development'],
    projectLink: 'https://loftcity.netlify.app/'
  },
  {
    imgSrc: projectImages.xClone,
    title: 'X (Twitter) Clone',
    tags: ['Frontend', 'Clone', 'Development', 'x.com'],
    projectLink: 'https://twitter-clone-118.netlify.app/'
  },
  {
    imgSrc: projectImages.myPortfolio,
    title: 'My Portfolio',
    tags: ['Portfolio', 'Development', 'Multi Theme'],
    projectLink: 'https://areeb-sheikh.netlify.app/'
  },
  {
    imgSrc: projectImages.netflixClone,
    title: 'Netflix Clone',
    tags: ['Netflix', 'Clone', 'Development'],
    projectLink: 'https://netlfix-replica-188.netlify.app/'
  },
  {
    imgSrc: projectImages.aTask,
    title: 'React ToDO App',
    tags: ['ToDo App', 'React', 'Development'],
    projectLink: 'https://atask-18.netlify.app/'
  },
];

export default projectItems