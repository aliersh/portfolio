import { Button } from "./ui/button";
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

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
        <div className="flex gap-2 mb-8">
            {socialLinks.map((link) => (
                <Button
                    variant="outline"
                    className="flex items-center gap-2 border-muted text-muted-foreground group"
                    asChild
                >
                    <a href={link.href}>
                        {link.icon}
                        <span className="text-sm">{link.label}</span>
                        <GoArrowUpRight className="transition-transform group-hover:rotate-45" />
                    </a>
                </Button>
            ))}
        </div>
    );
};

export default SocialButtons;
