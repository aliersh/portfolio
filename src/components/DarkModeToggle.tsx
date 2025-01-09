import { useEffect, useState } from "react";
import { Toggle } from "./ui/toggle";

const DarkModeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark");
        setIsDark(isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDark;
        setIsDark(newMode);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newMode ? "dark" : "light");
    };

    return (
        <Toggle
            pressed={isDark}
            onPressedChange={toggleDarkMode}
            className="absolute right-0 z-10 text-xs font-bold top-16 sm:top-24 sm:text-sm font-khula hover:no-underline"
            variant="link"
            aria-label={isDark ? "Lights on" : "Lights off"}
        >
            {isDark ? "lights on" : "lights off"}
        </Toggle>
    );
}

export default DarkModeToggle;