import { timelineItems } from "@/lib/data";

export default function TerminalTimeline() {
    return (
        <section
            id="timeline"
            className="terminal-section"
        >
            <h2 className="terminal-heading">TIMELINE</h2>

            <div className="terminal-container">
                <div className="terminal-header">
                    <div className="terminal-title">SYSTEM.HISTORY</div>
                    <div className="terminal-controls">
                        <div className="terminal-control bg-pink-500"></div>
                        <div className="terminal-control bg-cyan-500"></div>
                        <div className="terminal-control bg-purple-500"></div>
                    </div>
                </div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-pink-700 transform md:translate-x-[-50%]"></div>

                    <div className="space-y-12">
                        {timelineItems.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row ${
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Dot on timeline */}
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-cyan-500 border-2 border-pink-500 rounded-full transform translate-x-[-50%] z-10"></div>

                                {/* Content */}
                                <div
                                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                                    }`}
                                >
                                    <div className="terminal-border bg-[#121212] p-4">
                                        <div className="bg-pink-800 text-[#121212] px-4 py-2 inline-block mb-2 -mt-10 terminal-border font-bold">
                                            {item.year}
                                        </div>
                                        <h3 className="text-xl font-bold text-pink-500">
                                            {item.title}
                                        </h3>
                                        <p className="text-cyan-400 font-bold mb-2">
                                            {item.company}
                                        </p>
                                        <p className="text-pink-300">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
