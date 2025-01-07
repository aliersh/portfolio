import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

import { Button } from "./ui/button";

interface SocialLink {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const SocialButtons = () => {
    const socialLinks: SocialLink[] = [
        {
            href: "mailto:ariel.diaz.borquez@icloud.com",
            icon: <FaEnvelope />,
            label: "Get in touch",
        },
        {
            href: "https://github.com/aliersh",
            icon: <FaGithub />,
            label: "Check my code",
        },
        {
            href: "https://www.linkedin.com/in/arielidiaz",
            icon: <FaLinkedinIn />,
            label: "Let's network",
        },
    ];

    return (
        <section>
            <h2 className="mb-3 sm:mb-4 font-bold text-gray-800 text-md font-khula">
                Connect
            </h2>
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {socialLinks.map((link, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        className="flex items-center gap-1 sm:gap-2 text-gray-500 transition-all rounded-lg shadow-sm group bg-background border-border hover:bg-accent hover:text-accent-foreground dark:border-gray-700 dark:text-gray-400 hover:shadow-md"
                        asChild
                    >
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 sm:gap-2"
                        >
                            {link.icon}
                            <span className="text-xs sm:text-sm">{link.label}</span>
                            <GoArrowUpRight className="transition-transform group-hover:rotate-45" />
                        </a>
                    </Button>
                ))}
            </div>
        </section>
    );
};

export default SocialButtons;
