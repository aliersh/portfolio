import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import fernando from "@/assets/fernando.png";
import { FaBootstrap, FaSass, FaBoxOpen, FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const ProjectCard = () => {
    return (
        <Card className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
            <a href="https://fernandoratkoczy.com" target="_blank" rel="noopener noreferrer" className="block mt-4">
                <img src={fernando.src} alt="Fernando" className="w-full h-48 object-cover" />
            </a>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold font-khula text-gray-800">Fernando Ratkoczy Webpage</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground font-khula">
                <p>One-page website for Fernando Ratkoczy, a career coach, designed to showcase his services and facilitate client engagement. Built with Bootstrap for responsive design and SCSS for styling, bundled with Parcel.</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <div className="flex gap-2">
                    <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
                        <FaBootstrap className="text-gray-400 hover:text-violet-700 text-3xl" />
                    </a>
                    <a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">
                        <FaSass className="text-gray-400 hover:text-pink-500 text-3xl" />
                    </a>
                    <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">
                        <FaBoxOpen className="text-gray-400 hover:text-yellow-500 text-3xl" />
                    </a>
                </div>
                <div className="flex gap-2 items-center">
                    <a href="https://github.com/aliersh/fernando-ratkoczy" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-gray-400 hover:text-gray-800 text-3xl" />
                    </a>
                    <Separator orientation="vertical" className="h-8" />
                    <a href="https://fernandoratkoczy.com" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
                        <GoArrowUpRight className="text-2xl text-gray-400 transition-transform hover:rotate-45 hover:text-gray-800" />
                    </a>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard;
