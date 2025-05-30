import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";

export default function TerminalProjects() {
    return (
        <section
            id="projects"
            className="terminal-section"
        >
            <h2 className="terminal-heading">PROJECTS</h2>

            <div className="terminal-container">
                <div className="terminal-header">
                    <div className="terminal-title">SYSTEM.PROJECTS</div>
                    <div className="terminal-controls">
                        <div className="terminal-control bg-pink-500"></div>
                        <div className="terminal-control bg-cyan-500"></div>
                        <div className="terminal-control bg-purple-500"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="terminal-border bg-[#121212] p-4 group hover:shadow-[0_0_15px_rgba(255,105,180,0.8)] transition-shadow duration-300"
                        >
                            <div className="relative h-48 mb-4 overflow-hidden terminal-border">
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 z-10"></div>
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 mix-blend-luminosity"
                                />
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-pink-500">
                                {project.title}
                            </h3>
                            <p className="mb-4 text-pink-300">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="bg-[#121212] text-cyan-400 px-2 py-1 text-xs font-bold terminal-border"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.liveLink}
                                    className="terminal-button flex items-center gap-2 text-sm"
                                >
                                    <ExternalLink size={16} />
                                    DEMO
                                </a>
                                <a
                                    href={project.githubLink}
                                    className="terminal-button-alt flex items-center gap-2 text-sm"
                                >
                                    <Github size={16} />
                                    CODE
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
