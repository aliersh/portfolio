import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
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
};

const ProjectCard = ({
    title,
    description,
    imageSrc,
    imageAlt,
    projectUrl,
    githubUrl,
    technologies,
}: ProjectCardProps) => {
    return (
        <Card className="w-full max-w-sm bg-background rounded-lg shadow-md overflow-hidden flex flex-col h-full border-border">
            <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-48 object-cover"
                />
            </a>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold font-khula text-foreground">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-sm text-muted-foreground font-khula">
                <p>{description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center mt-auto">
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
                <div className="flex gap-2 items-center">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-muted-foreground hover:text-foreground text-2xl transition-colors" />
                    </a>
                    <Separator orientation="vertical" className="h-8" />
                    <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center"
                    >
                        <GoArrowUpRight className="text-2xl text-muted-foreground transition-all hover:rotate-45 hover:text-foreground" />
                    </a>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
