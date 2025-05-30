"use client";

import type React from "react";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Send, Terminal } from "lucide-react";

import { email } from "@/lib/data";

export default function TerminalContact() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate form submission
        setTimeout(() => {
            setCommandHistory([
                ...commandHistory,
                `> user@portfolio:~$ send_message --name="${formState.name}" --email="${formState.email}"`,
                "> Encrypting message...",
                "> Establishing connection...",
                "> Connection established!",
                "> Message delivered successfully!",
            ]);
            setSubmitted(true);
            setLoading(false);
            setFormState({ name: "", email: "", message: "" });
        }, 2000);
    };

    const resetForm = () => {
        setSubmitted(false);
        setCommandHistory([]);
    };

    return (
        <section
            id="contact"
            className="terminal-section"
        >
            <h2 className="terminal-heading">CONTACT ME</h2>

            <div className="terminal-container">
                <div className="terminal-header">
                    <div className="terminal-title">SYSTEM.CONTACT</div>
                    <div className="terminal-controls">
                        <div className="terminal-control bg-primary"></div>
                        <div className="terminal-control bg-secondary"></div>
                        <div className="terminal-control bg-emerald-500"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="p-4">
                        <h3 className="text-2xl font-bold mb-6 text-primary">
                            <Terminal className="inline-block mr-2 h-6 w-6" />
                            Connection Details
                        </h3>

                        <div className="space-y-6">
                            <div className="terminal-border bg-card p-4">
                                <div className="text-secondary font-bold mb-1">
                                    EMAIL
                                </div>
                                <div className="flex items-center">
                                    <span className="text-primary mr-2">
                                        &gt;
                                    </span>
                                    <a
                                        href={`mailto:${email}`}
                                        className="hover:text-secondary transition-colors"
                                    >
                                        {email}
                                    </a>
                                </div>
                            </div>

                            <div className="terminal-border bg-card p-4">
                                <div className="text-secondary font-bold mb-1">
                                    LOCATION
                                </div>
                                <div className="flex items-center">
                                    <span className="text-primary mr-2">
                                        &gt;
                                    </span>
                                    <span>Hanoi, VietNam</span>
                                </div>
                            </div>

                            <div className="terminal-border bg-card p-4">
                                <div className="text-secondary font-bold mb-1">
                                    AVAILABILITY
                                </div>
                                <div className="flex items-center">
                                    <span className="text-primary mr-2">
                                        &gt;
                                    </span>
                                    <span>Open to opportunities</span>
                                </div>
                            </div>

                            <div className="terminal-border bg-card p-4">
                                <div className="text-secondary font-bold mb-1">
                                    RESPONSE TIME
                                </div>
                                <div className="flex items-center">
                                    <span className="text-primary mr-2">
                                        &gt;
                                    </span>
                                    <span>Usually within 24 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-4">
                        <div className="terminal-border bg-card p-4 h-full">
                            {!submitted ? (
                                <>
                                    <h3 className="text-xl font-bold mb-4 text-primary">
                                        <span className="text-secondary">
                                            $
                                        </span>{" "}
                                        send_message.exe
                                    </h3>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-secondary mb-1 text-sm"
                                            >
                                                NAME:
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-background border-2 border-primary p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-secondary mb-1 text-sm"
                                            >
                                                EMAIL:
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-background border-2 border-primary p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-secondary mb-1 text-sm"
                                            >
                                                MESSAGE:
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formState.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full bg-background border-2 border-primary p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none font-mono"
                                                placeholder="Type your message here..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`terminal-button flex items-center justify-center gap-2 w-full ${
                                                loading ? "opacity-70" : ""
                                            }`}
                                        >
                                            {loading ? (
                                                <>
                                                    <div className="animate-spin h-4 w-4 border-2 border-white rounded-full border-t-transparent"></div>
                                                    SENDING...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-4 w-4" />
                                                    SEND MESSAGE
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="h-full flex flex-col">
                                    <h3 className="text-xl font-bold mb-4 text-primary">
                                        <span className="text-secondary">
                                            $
                                        </span>{" "}
                                        Terminal Output
                                    </h3>
                                    <div className="flex-1 bg-background p-3 font-mono text-sm mb-4 overflow-y-auto terminal-border">
                                        {commandHistory.map((cmd, index) => (
                                            <div
                                                key={index}
                                                className={
                                                    index > 2
                                                        ? "text-green-500"
                                                        : ""
                                                }
                                            >
                                                {cmd}
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        onClick={resetForm}
                                        className="terminal-button-alt"
                                    >
                                        SEND ANOTHER MESSAGE
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* ASCII Art */}
                <div className="mt-8 text-center font-mono text-xs overflow-hidden">
                    <pre
                        className={`inline-block text-left ${
                            isDark ? "text-primary" : "text-secondary"
                        }`}
                    >
                        {`
   _____                 _____            _             _   
  / ____|               |  __ \\          | |           | |  
 | |     ___  _ __  ___ | |__) |___  __ _| |_ ___  __ _| |_ 
 | |    / _ \\| '_ \\/ __||  _  // _ \\/ _\` | __/ _ \\/ _\` | __|
 | |___| (_) | | | \\__ \\| | \\ \\  __/ (_| | ||  __/ (_| | |_ 
  \\_____\\___/|_| |_|___/|_|  \\_\\___|\\__,_|\\__\\___|\\__,_|\\__|
            `}
                    </pre>
                </div>
            </div>
        </section>
    );
}
