"use client";
import { useTheme } from "../context/ThemeContext";
import { IoSunny } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";


export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`bg-white dark:bg-gray-700 w-18 py-1.5 px-2 flex dark:border-white border-gray-800 border rounded-full transition-all justify-center duration-300 shadow-md`}
        >
            <div className={`transition-all justify-center duration-300 ${theme === "light" ? 'translate-x-4' : "-translate-x-4"} `}>
                {theme === "light" ? <IoSunny /> : <IoMoonSharp />}
            </div>
        </button>
    );
}
