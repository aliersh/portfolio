import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import TechIcon from "./TechIcon";

// Define a type for technology icons
type TechIcon = {
    Icon: React.ComponentType<{ className?: string }>;
    name: string;
    href: string;
};

// Define the project card props
type ProjectCardProps = {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    projectUrl: string;
    githubUrl: string;
    technologies: TechIcon[];
    status?: "in-progress";
};

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
        <Card className="flex flex-col w-full h-full max-w-sm overflow-hidden rounded-lg shadow-md bg-background border-border">
            <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
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
            <CardContent className="flex-grow text-sm text-muted-foreground font-khula">
                <p>{description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between mt-auto">
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
                <div className="flex items-center gap-2">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-2xl transition-colors text-muted-foreground hover:text-foreground" />
                    </a>
                    <Separator orientation="vertical" className="h-8" />
                    {status === "in-progress" ? (
                        <span className="cursor-not-allowed">
                            <GoArrowUpRight className="text-2xl text-muted-foreground/50" />
                        </span>
                    ) : (
                        <a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
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
