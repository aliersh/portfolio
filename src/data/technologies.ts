import { FaBootstrap, FaSass, FaReact } from "react-icons/fa";
import { SiMedusa, SiNextdotjs, SiTailwindcss, SiTypescript, SiAstro } from "react-icons/si";

export const technologies = {
    bootstrap: {
        Icon: FaBootstrap,
        name: "Bootstrap",
        href: "https://getbootstrap.com",
    },
    sass: {
        Icon: FaSass,
        name: "Sass",
        href: "https://sass-lang.com",
    },
    nextjs: {
        Icon: SiNextdotjs,
        name: "Next.js",
        href: "https://nextjs.org",
    },
    medusa: {
        Icon: SiMedusa,
        name: "Medusa",
        href: "https://medusajs.com",
    },
    react: {
        Icon: FaReact,
        name: "React",
        href: "https://reactjs.org",
    },
    tailwind: {
        Icon: SiTailwindcss,
        name: "Tailwind CSS",
        href: "https://tailwindcss.com",
    },
    typescript: {
        Icon: SiTypescript,
        name: "TypeScript",
        href: "https://www.typescriptlang.org",
    },
    astro: {
        Icon: SiAstro,
        name: "Astro",
        href: "https://astro.build",
    },
}; 