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

// Define a type for technology icons
type TechIcon = {
    Icon: React.ComponentType<{ className?: string }>;
    href: string;
    hoverColor: string;
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
        <Card className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
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
                <CardTitle className="text-sm font-bold font-khula text-gray-800">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-sm text-muted-foreground font-khula">
                <p>{description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center mt-auto">
                <div className="flex gap-2">
                    {technologies.map(({ Icon, href, hoverColor }, index) => {
                        const hoverColorClass =
                            {
                                "#7e22ce": "hover:text-purple-600",
                                "#db2777": "hover:text-pink-600",
                                "#eab308": "hover:text-yellow-500",
                                "#000000": "hover:text-black",
                                "#27272a": "hover:text-gray-800",
                            }[hoverColor] || "hover:text-gray-800";

                        return (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon
                                    className={`text-gray-400 ${hoverColorClass} text-2xl`}
                                />
                            </a>
                        );
                    })}
                </div>
                <div className="flex gap-2 items-center">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-gray-400 hover:text-gray-800 text-2xl" />
                    </a>
                    <Separator orientation="vertical" className="h-8" />
                    <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center"
                    >
                        <GoArrowUpRight className="text-2xl text-gray-400 transition-transform hover:rotate-45 hover:text-gray-800" />
                    </a>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
