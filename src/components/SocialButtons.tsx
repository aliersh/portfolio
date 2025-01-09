import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

import { Button } from "./ui/button";
import type { SocialLink } from "@/types/social";

const SocialButtons = () => {
    const socialLinks: SocialLink[] = [
        {
            href: "mailto:ariel.diaz.borquez@icloud.com",
            icon: <FaEnvelope />,
            label: "Get in touch",
            ariaLabel: "Send me an email",
        },
        {
            href: "https://github.com/aliersh",
            icon: <FaGithub />,
            label: "Check my code",
            ariaLabel: "Visit my GitHub profile",
        },
        {
            href: "https://www.linkedin.com/in/arielidiaz",
            icon: <FaLinkedinIn />,
            label: "Let's network",
            ariaLabel: "Visit my LinkedIn profile",
        },
    ];

    return (
        <section aria-labelledby="connect-heading">
            <h2
                id="connect-heading"
                className="mb-3 font-bold text-gray-800 sm:mb-4 text-md font-khula"
            >
                Connect
            </h2>
            <ul
                className="flex flex-wrap gap-2 mb-6 sm:mb-8"
                aria-label="Social media links"
            >
                {socialLinks.map((link, index) => (
                    <li key={index}>
                        <Button
                            key={index}
                            variant="outline"
                        className="flex items-center gap-1 text-gray-500 transition-all rounded-lg shadow-sm sm:gap-2 group bg-background border-border hover:bg-accent hover:text-accent-foreground dark:border-gray-700 dark:text-gray-400 hover:shadow-md"
                        asChild
                    >
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 sm:gap-2"
                            aria-label={link.ariaLabel}
                        >
                            {link.icon}
                            <span className="text-xs sm:text-sm">
                                {link.label}
                            </span>
                            <GoArrowUpRight
                                className="transition-transform group-hover:rotate-45"
                                aria-hidden="true"
                            />
                            </a>
                        </Button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SocialButtons;
