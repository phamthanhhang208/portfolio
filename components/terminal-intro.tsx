"use client";
import RetroComputer from "./retro-computer";
import { resume } from "@/lib/data";

export default function TerminalIntro() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section
            id="about"
            className="terminal-section"
        >
            <div className="terminal-container">
                <div className="terminal-header">
                    <div className="terminal-title">SYSTEM.PROFILE</div>
                    <div className="terminal-controls">
                        <div className="terminal-control bg-pink-500"></div>
                        <div className="terminal-control bg-cyan-500"></div>
                        <div className="terminal-control bg-purple-500"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <div className="mb-4">
                            <span className="text-cyan-400">$</span>{" "}
                            <span className="text-pink-300">whoami</span>
                            <h1 className="text-4xl font-bold mb-4 text-pink-500">
                                Hello World!
                                <span className="cursor-blink"></span>
                            </h1>
                        </div>

                        <div className="mb-6 bg-[#121212] terminal-border p-4">
                            <p className="mb-4 text-pink-300">
                                <span className="text-cyan-400">name:</span>{" "}
                                <span className="text-pink-500 font-bold">
                                    Pham Thanh Hang
                                </span>
                            </p>
                            <p className="mb-4 text-pink-300">
                                <span className="text-cyan-400">role:</span>{" "}
                                Software Engineer
                            </p>
                            <p className="mb-4 text-pink-300">
                                <span className="text-cyan-400">skills:</span>{" "}
                                React, TypeScript, Modern Web Technologies
                            </p>
                            <p className="text-pink-300">
                                <span className="text-cyan-400">status:</span>{" "}
                                Building awesome web experiences
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={resume}
                                target="_blank"
                                className="terminal-button inline-block"
                            >
                                Download CV
                            </a>
                            <button
                                className="terminal-button-alt"
                                onClick={() => scrollToSection("contact")}
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center">
                        <RetroComputer />
                    </div>
                </div>
            </div>
        </section>
    );
}
