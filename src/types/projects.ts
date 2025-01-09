export type TechIconProps = {
    Icon: React.ComponentType<{ className?: string }>;
    name: string;
    href: string;
};

export type ProjectCardProps = {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    projectUrl: string;
    githubUrl: string;
    technologies: TechIconProps[];
    status?: "in-progress";
};
