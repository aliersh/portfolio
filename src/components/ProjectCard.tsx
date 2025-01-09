import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import TechIcon from "./TechIcon";
import type { ProjectCardProps } from "@/types/projects";


const ProjectCard = ({
    title,
    description,
    imageSrc,
    imageAlt,
    projectUrl,
    githubUrl,
    technologies,
    status,
}: ProjectCardProps) => {
    return (
        <Card
            className="flex flex-col w-full h-full max-w-full overflow-hidden rounded-lg shadow-md sm:max-w-sm bg-background border-border"
            role="article"
        >
            <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
                aria-label={`View ${title} project`}
            >
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="object-cover w-full h-48"
                />
                {status === "in-progress" && (
                    <Badge
                        className="absolute text-black top-2 right-2 bg-yellow-500/90 hover:bg-yellow-500/90"
                        variant="secondary"
                        aria-label="Project is in progress"
                    >
                        In Progress
                    </Badge>
                )}
            </a>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold font-khula text-foreground">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <ul 
                    className="text-xs sm:text-sm text-muted-foreground font-khula"
                    aria-label="Project description"
                >
                    <li>{description}</li>
                </ul>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4 mt-auto sm:p-6">
                <div className="flex gap-2">
                    {technologies.map(({ Icon, name, href }, index) => (
                        <TechIcon
                            key={index}
                            Icon={Icon}
                            name={name}
                            href={href}
                        />
                    ))}
                </div>
                <div
                    className="flex items-center gap-2"
                    role="group"
                    aria-label="Project links"
                >
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View project on GitHub"
                    >
                        <FaGithub className="text-2xl transition-colors text-muted-foreground hover:text-foreground" />
                    </a>
                    <Separator
                        orientation="vertical"
                        className="h-8"
                        aria-hidden="true"
                    />
                    {status === "in-progress" ? (
                        <span className="cursor-not-allowed" aria-hidden="true">
                            <GoArrowUpRight className="text-2xl text-muted-foreground/50" />
                        </span>
                    ) : (
                        <a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                            aria-label="View project"
                        >
                            <GoArrowUpRight className="text-2xl transition-all text-muted-foreground hover:rotate-45 hover:text-foreground" />
                        </a>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
