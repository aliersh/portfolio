import { useEffect, useState } from "react";
import { Toggle } from "./ui/toggle";

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

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
            className="absolute top-24 right-0 z-10 text-sm font-bold font-khula hover:no-underline"
            variant="link"
        >
            {isDark ? "lights on" : "lights off"}
        </Toggle>
    );
}

export default DarkModeToggle;