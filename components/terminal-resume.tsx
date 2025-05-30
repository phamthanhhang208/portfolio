import { skills, resume } from "@/lib/data";

export default function TerminalResume() {
    return (
        <section
            id="resume"
            className="terminal-section"
        >
            <h2 className="terminal-heading">RESUME</h2>

            <div className="terminal-container">
                <div className="terminal-header">
                    <div className="terminal-title">SYSTEM.RESUME</div>
                    <div className="terminal-controls">
                        <div className="terminal-control bg-pink-500"></div>
                        <div className="terminal-control bg-cyan-500"></div>
                        <div className="terminal-control bg-purple-500"></div>
                    </div>
                </div>

                <div className="grid gap-8">
                    <div className="terminal-border bg-[#121212] p-4">
                        <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                            Experience
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold text-pink-500">
                                    Frontend Developer
                                </h4>
                                <p className="text-cyan-400 font-bold">
                                    Kyber Network
                                </p>
                                <p className="text-sm text-pink-300">
                                    2/2025 - Present
                                </p>
                                <ul className="list-disc list-inside mt-2 space-y-1 text-pink-300">
                                    <li>
                                        Redesign and modernization of a legacy
                                        frontend codebase, improving
                                        performance, maintainability, and user
                                        experience.
                                    </li>
                                    <li>
                                        Transits the build system from Webpack
                                        to Vite, resulting in significantly
                                        faster development server startup and
                                        build times
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-pink-500">
                                    Software Engineer
                                </h4>
                                <p className="text-cyan-400 font-bold">
                                    One Mount Group
                                </p>
                                <p className="text-sm text-pink-300">
                                    2022 - 2024
                                </p>
                                <ul className="list-disc list-inside mt-2 space-y-1 text-pink-300">
                                    <li>
                                        Developed and integrated new features,
                                        enhancing the system&#39;s capabilities
                                        and responsiveness.
                                    </li>
                                    <li>
                                        Collaborated with the design team to
                                        revamp the company’s user interface,
                                        ensuring adherence to brand guidelines
                                        and Figma design specifications.
                                    </li>
                                    <li>
                                        Optimized key components, reducing load
                                        times and enhancing efficiency.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="terminal-border bg-[#121212] p-4">
                        <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                            Education
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold text-pink-500">
                                    BSc in Software Engineering
                                </h4>
                                <p className="text-cyan-400 font-bold">
                                    Hanoi University of Science and Technology
                                </p>
                                <p className="text-sm text-pink-300">
                                    Graduated September 2022
                                </p>
                                <p className="mt-2 text-pink-300">
                                    In-major GPA: 3.48, Dean’s List for 3
                                    semesters
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="terminal-border bg-[#121212] p-4">
                        <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                            Skills
                        </h3>

                        <div className="grid md:grid-cols-3 gap-6">
                            {skills.map((skillGroup, index) => (
                                <div key={index}>
                                    <h4 className="text-lg font-bold mb-3 bg-pink-800 text-[#121212] px-3 py-1 inline-block">
                                        {skillGroup.category}
                                    </h4>
                                    <ul className="space-y-2">
                                        {skillGroup.items.map(
                                            (skill, skillIndex) => (
                                                <li
                                                    key={skillIndex}
                                                    className="flex items-center gap-2 text-pink-300"
                                                >
                                                    <span className="inline-block w-3 h-3 bg-cyan-500"></span>
                                                    {skill}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <a
                        href={resume}
                        target="_blank"
                        className="terminal-button inline-block"
                    >
                        DOWNLOAD FULL RESUME
                    </a>
                </div>
            </div>
        </section>
    );
}
