import { socialLinks, email } from "@/lib/data";

export default function TerminalFooter() {
    return (
        <footer className="bg-background text-foreground py-8 terminal-border border-b-0 border-x-0">
            <div className="container mx-auto px-4">
                <div className="terminal-container">
                    <div className="terminal-header">
                        <div className="terminal-title">SYSTEM.CONTACT</div>
                        <div className="terminal-controls">
                            <div className="terminal-control bg-primary"></div>
                            <div className="terminal-control bg-secondary"></div>
                            <div className="terminal-control bg-emerald-500"></div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold mb-6">
                            <span className="text-secondary">&lt;</span>
                            TERMINAL_DEV
                            <span className="text-secondary">/&gt;</span>
                            <span className="cursor-blink"></span>
                        </div>

                        <div className="flex gap-6 mb-8">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="terminal-button p-3 flex items-center justify-center"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>

                        <div className="text-center">
                            <p className="mb-2 text-foreground">
                                Feel free to reach out for collaborations or
                                just a friendly hello!
                            </p>
                            <p className="text-secondary">{email}</p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-primary/30 w-full text-center">
                            <p className="text-foreground">
                                © {new Date().getFullYear()} Pham Thanh Hang.
                                All rights reserved.
                            </p>
                            <p className="text-xs mt-2 text-secondary">
                                <span className="text-primary">[</span> Made
                                with love and a lot of caffeine{" "}
                                <span className="text-primary">]</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
