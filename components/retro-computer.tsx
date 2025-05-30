"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function RetroComputer() {
    const [text, setText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const fullText =
        "HELLO WORLD\n> LOADING PROFILE...\n> NAME: PHAM_THANH_HANG\n> OCCUPATION: SOFTWARE_ENGINEER\n> SKILLS: REACT, TS, NEXT.JS\n> STATUS: READY FOR NEW PROJECTS\n\n> _";

    useEffect(() => {
        let currentIndex = 0;
        let timer: NodeJS.Timeout;

        const typeText = () => {
            if (currentIndex < fullText.length) {
                setText(fullText.substring(0, currentIndex + 1));
                currentIndex++;

                // Random typing speed for realistic effect
                const delay = Math.random() * 50 + 30;
                timer = setTimeout(typeText, delay);
            }
        };

        // Start typing effect
        timer = setTimeout(typeText, 500);

        // Blinking cursor effect
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => {
            clearTimeout(timer);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Computer case */}
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden terminal-border">
                {/* Monitor frame */}
                <div className="absolute inset-4 bg-gray-100 dark:bg-gray-900 rounded border-4 border-gray-300 dark:border-gray-700">
                    {/* Screen with scanlines */}
                    <div className="absolute inset-0 bg-white dark:bg-black overflow-hidden">
                        {/* Scanlines effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30 animate-scanline"></div>

                        {/* Screen glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>

                        {/* Terminal text */}
                        <pre
                            className={`p-3 font-mono text-xs ${
                                isDark ? "text-green-400" : "text-emerald-700"
                            } whitespace-pre-wrap`}
                        >
                            {text}
                            {showCursor && (
                                <span
                                    className={`inline-block w-2 h-4 ${
                                        isDark
                                            ? "bg-green-400"
                                            : "bg-emerald-700"
                                    } ml-1`}
                                ></span>
                            )}
                        </pre>
                    </div>
                </div>

                {/* Computer brand logo */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-primary font-bold">
                    RETRO-TRON 2000
                </div>
            </div>

            {/* Computer stand */}
            <div className="absolute -bottom-4 left-1/2 w-32 h-8 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2 rounded-b-lg"></div>

            {/* Control buttons */}
            <div className="absolute top-2 right-6 flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            </div>

            {/* Floppy disk drive */}
            <div className="absolute -right-4 top-1/3 w-4 h-10 bg-gray-300 dark:bg-gray-700 rounded-r"></div>

            {/* Label */}
            <div className="absolute -bottom-10 -right-4 bg-card text-secondary px-4 py-2 terminal-border rotate-6">
                <span className="font-bold">&lt;Software Engineer/&gt;</span>
            </div>
        </div>
    );
}
