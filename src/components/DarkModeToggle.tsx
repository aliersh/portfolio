import { FaRegSun, FaRegMoon } from "react-icons/fa";
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
            className="fixed top-4 right-4"
        >
            {isDark ? <FaRegSun /> : <FaRegMoon />}
        </Toggle>
    );
}

export default DarkModeToggle;