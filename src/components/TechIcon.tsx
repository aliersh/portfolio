import React from 'react';

type TechIconProps = {
    Icon: React.ComponentType<{ className?: string }>;
    name: string;
    href: string;
};

const TechIcon: React.FC<TechIconProps> = ({ Icon, name, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
        >
            <Icon className="text-gray-400 hover:text-gray-800 text-2xl" />
        </a>
    );
};

export default TechIcon; 