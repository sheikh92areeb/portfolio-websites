export interface NavItems {
    label: string,
    link: string,
    className: string
}

export interface AboutItems {
    label: string,
    number: number
}

export interface SkillItems {
    imgSrc: string,
    label: string,
    desc: string
}

export interface SkillProps {
    imgSrc: string,
    label: string,
    desc: string,
    classes?: string
}

export interface Reviews {
    content: string,
    name: string,
    imgSrc: string,
    company: string
}

export interface ReviewCardProps {
    content: string,
    name: string,
    imgSrc: string,
    company: string
}

export interface SocialLinks {
    href: string,
    icon: string,
    alt: string
}

export interface Sitemap {
    label: string,
    href: string
}

export interface ButtonProps {
    label: string,
    href?: string,
    target?: string,
    icon?: string,
    classes?: string,
}