import React from "react";

type TechIconProps = {
    Icon: React.ComponentType<{ className?: string }>;
    name: string;
    href: string;
};

const TechIcon: React.FC<TechIconProps> = ({ Icon, name, href }) => {
    // Map of technology names to their specific hover colors
    const hoverColorMap: { [key: string]: string } = {
        Bootstrap: "text-gray-400 hover:text-purple-600",
        Sass: "text-gray-400 hover:text-pink-600",
        "Next.js": "text-gray-400 hover:text-black dark:hover:text-white",
        Medusa: "text-gray-400 hover:text-black",
        React: "text-gray-400 hover:text-blue-400",
        "Tailwind CSS": "text-gray-400 hover:text-teal-500",
        TypeScript: "text-gray-400 hover:text-blue-600",
        Astro: "text-gray-400 hover:text-indigo-600",
    };

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" title={name}>
            <Icon
                className={`${hoverColorMap[name]} text-2xl transition-colors`}
            />
        </a>
    );
};

export default TechIcon;
