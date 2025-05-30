"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { timelineItems } from "@/lib/data";

export default function GameTimeline() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    const [characterPosition, setCharacterPosition] = useState(0);
    const [mounted, setMounted] = useState(false);

    // Wait until mounted to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Animate character movement
    useEffect(() => {
        const interval = setInterval(() => {
            setCharacterPosition((prev) => {
                if (prev >= timelineItems.length - 1) return 0;
                return prev + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [timelineItems.length]);

    if (!mounted) {
        return (
            <section
                id="timeline"
                className="terminal-section"
            >
                <h2 className="terminal-heading">CAREER QUEST</h2>
                <div className="terminal-container p-4">
                    <p>Loading game level...</p>
                </div>
            </section>
        );
    }

    return (
        <section
            id="timeline"
            className="terminal-section"
        >
            <h2 className="terminal-heading">CAREER QUEST</h2>

            <div className="terminal-container p-0 overflow-hidden">
                <div className="terminal-header m-4 mb-0">
                    <div className="terminal-title">WORLD 1-1: CAREER PATH</div>
                    <div className="terminal-controls">
                        <div className="terminal-control bg-primary"></div>
                        <div className="terminal-control bg-secondary"></div>
                        <div className="terminal-control bg-emerald-500"></div>
                    </div>
                </div>

                {/* Game UI Header */}
                <div className="flex justify-between items-center px-4 py-2 bg-card border-y-2 border-primary/50 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-yellow-400 dark:bg-yellow-500 rounded-full animate-pulse"></div>
                        <span>COINS: 128</span>
                    </div>
                    <div>LEVEL: CAREER</div>
                    <div className="flex items-center gap-2">
                        <span>SKILLS: 42</span>
                        <div className="w-5 h-5 bg-red-500 dark:bg-red-600 animate-pulse">
                            ❤️
                        </div>
                        <div className="w-5 h-5 bg-red-500 dark:bg-red-600 animate-pulse">
                            ❤️
                        </div>
                        <div className="w-5 h-5 bg-red-500 dark:bg-red-600 animate-pulse">
                            ❤️
                        </div>
                    </div>
                </div>

                {/* Game Level - Day/Night cycle based on theme */}
                <div
                    className={`relative p-4 min-h-[400px] ${
                        isDark
                            ? "bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-950"
                            : "bg-gradient-to-b from-blue-100 to-blue-300"
                    }`}
                >
                    {/* Sky decoration - Stars in dark mode, clouds in light mode */}
                    {isDark ? (
                        // Stars for night sky
                        <>
                            <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute top-8 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute top-6 left-14 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute top-12 right-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute top-16 right-32 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute top-14 right-26 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute top-24 left-40 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute top-32 right-40 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute top-10 left-60 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute top-20 right-60 w-1 h-1 bg-white rounded-full animate-pulse"></div>

                            {/* Moon */}
                            <div className="absolute top-8 right-8 w-16 h-16 bg-gray-200 rounded-full"></div>
                            <div className="absolute top-6 right-6 w-16 h-16 bg-indigo-900 rounded-full"></div>
                        </>
                    ) : (
                        // Clouds for day sky
                        <>
                            <div className="absolute top-4 left-8 w-12 h-8 bg-white rounded-full"></div>
                            <div className="absolute top-8 left-20 w-16 h-10 bg-white rounded-full"></div>
                            <div className="absolute top-6 left-14 w-14 h-9 bg-white rounded-full"></div>
                            <div className="absolute top-12 right-20 w-12 h-8 bg-white rounded-full"></div>
                            <div className="absolute top-16 right-32 w-16 h-10 bg-white rounded-full"></div>
                            <div className="absolute top-14 right-26 w-14 h-9 bg-white rounded-full"></div>

                            {/* Sun */}
                            <div className="absolute top-8 right-8 w-16 h-16 bg-yellow-300 rounded-full"></div>
                        </>
                    )}

                    {/* Game platforms */}
                    <div className="relative mt-50">
                        {timelineItems.map((item, index) => {
                            // Number of blocks in each platform
                            const numBlocks = 12;

                            return (
                                <div
                                    key={index}
                                    className={`relative mb-48`}
                                >
                                    {/* Platform container with proper positioning */}
                                    <div
                                        className={`relative ${
                                            index % 2 === 0 ? "ml-0" : "ml-auto"
                                        }`}
                                        style={{ width: `480px` }}
                                    >
                                        {/* Platform blocks */}
                                        <div className="flex">
                                            {Array.from({
                                                length: numBlocks,
                                            }).map((_, blockIndex) => (
                                                <div
                                                    key={blockIndex}
                                                    className="w-12 h-12 relative"
                                                >
                                                    <div
                                                        className={`absolute inset-0.5 ${
                                                            isDark
                                                                ? "bg-emerald-800"
                                                                : "bg-emerald-600"
                                                        } border-2 ${
                                                            isDark
                                                                ? "border-emerald-600"
                                                                : "border-emerald-800"
                                                        }`}
                                                    ></div>
                                                    <div
                                                        className={`absolute inset-0 ${
                                                            isDark
                                                                ? "bg-emerald-700"
                                                                : "bg-emerald-500"
                                                        } border-2 ${
                                                            isDark
                                                                ? "border-emerald-500"
                                                                : "border-emerald-700"
                                                        } transform translate-y-[-4px]`}
                                                    ></div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Character - Different color in dark mode */}
                                        {characterPosition === index && (
                                            <div className="absolute top-[-48px] left-24 w-8 h-8 animate-bounce">
                                                <div
                                                    className={`w-8 h-8 ${
                                                        isDark
                                                            ? "bg-pink-500"
                                                            : "bg-red-500"
                                                    } relative`}
                                                >
                                                    {/* Character face */}
                                                    <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                                                    <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                                                    <div className="absolute bottom-2 left-2 right-2 h-1 bg-white"></div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Coins/items - Glowing in dark mode */}
                                        {characterPosition !== index && (
                                            <div className="absolute top-[-24px] left-24 flex gap-4">
                                                <div
                                                    className={`w-6 h-6 ${
                                                        isDark
                                                            ? "bg-yellow-500 shadow-lg shadow-yellow-500/50"
                                                            : "bg-yellow-400"
                                                    } rounded-full animate-pulse`}
                                                ></div>
                                                <div
                                                    className={`w-6 h-6 ${
                                                        isDark
                                                            ? "bg-yellow-500 shadow-lg shadow-yellow-500/50"
                                                            : "bg-yellow-400"
                                                    } rounded-full animate-pulse`}
                                                ></div>
                                                <div
                                                    className={`w-6 h-6 ${
                                                        isDark
                                                            ? "bg-yellow-500 shadow-lg shadow-yellow-500/50"
                                                            : "bg-yellow-400"
                                                    } rounded-full animate-pulse`}
                                                ></div>
                                            </div>
                                        )}

                                        {/* Level flag - Positioned on the platform */}
                                        <div className="absolute bottom-0 right-15">
                                            {/* Flag pole */}
                                            <div className="w-4 h-48 bg-gray-300 dark:bg-gray-700 transform translate-y-[-36px]"></div>
                                            {/* Flag */}
                                            <div
                                                className={`absolute top-0 left-4 ${
                                                    item.year.length > 8
                                                        ? "w-20"
                                                        : "w-16"
                                                } h-8 bg-primary transform translate-y-[-36px]`}
                                            ></div>
                                            {/* Year */}
                                            <div className="absolute top-2 left-6 text-xs whitespace-nowrap text-primary-foreground font-bold transform translate-y-[-36px]">
                                                {item.year}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dialog box - Positioned relative to the platform */}
                                    <div
                                        className={`absolute w-64 terminal-border bg-card p-3 ${
                                            isDark
                                                ? "shadow-lg shadow-primary/30"
                                                : ""
                                        }`}
                                        style={{
                                            // Position dialog box higher above the platform to avoid flag overlap
                                            top: "-200px",
                                            // Adjust horizontal positioning to avoid flag
                                            ...(index % 2 === 0
                                                ? { left: "132px" } // Move left side dialogs more to the left
                                                : { right: "90px" }), // Move right side dialogs more to the right
                                        }}
                                    >
                                        <div className="mb-1 text-lg font-bold text-primary">
                                            {item.title}
                                        </div>
                                        <div className="mb-2 text-sm font-bold text-secondary">
                                            {item.company}
                                        </div>
                                        <p className="text-xs">
                                            {item.description}
                                        </p>

                                        {/* Dialog pointer */}
                                        {/* <div
                                            className={`absolute bottom-[-8px] ${
                                                index % 2 === 0
                                                    ? "left-4"
                                                    : "right-4"
                                            } w-4 h-4 bg-card transform rotate-45 border-r-2 border-b-2 border-primary`}
                                        ></div> */}
                                        <div className="absolute top-16 left-61 w-4 h-4 bg-card transform rotate-45 border-r-2 border-t-2 border-primary"></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Ground - Different in dark mode */}
                    <div
                        className={`absolute bottom-0 left-0 right-0 h-8 ${
                            isDark
                                ? "bg-gradient-to-b from-green-900 to-green-950"
                                : "bg-gradient-to-b from-green-600 to-green-800"
                        }`}
                    ></div>
                </div>

                {/* Game controls - Glowing in dark mode */}
                <div className="flex justify-between items-center p-4 bg-card border-t-2 border-primary/50">
                    <div className="flex gap-2">
                        <button
                            className={`w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center ${
                                isDark ? "shadow-md shadow-primary/50" : ""
                            }`}
                        >
                            ←
                        </button>
                        <button
                            className={`w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center ${
                                isDark ? "shadow-md shadow-primary/50" : ""
                            }`}
                        >
                            →
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button
                            className={`w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center ${
                                isDark ? "shadow-md shadow-secondary/50" : ""
                            }`}
                        >
                            A
                        </button>
                        <button
                            className={`w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center ${
                                isDark ? "shadow-md shadow-secondary/50" : ""
                            }`}
                        >
                            B
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
