import TerminalHeader from "@/components/terminal-header";
import TerminalIntro from "@/components/terminal-intro";
import GameTimeline from "@/components/game-timeline";
import TerminalProjects from "@/components/terminal-projects";
import TerminalResume from "@/components/terminal-resume";
import TerminalContact from "@/components/terminal-contact";
import TerminalFooter from "@/components/terminal-footer";

export default function Home() {
    return (
        <div className="min-h-screen text-foreground font-mono grid-lines">
            <TerminalHeader />
            <main className="container mx-auto px-4 py-8">
                <TerminalIntro />
                <GameTimeline />
                <TerminalProjects />
                <TerminalResume />
                <TerminalContact />
            </main>
            <TerminalFooter />
        </div>
    );
}
