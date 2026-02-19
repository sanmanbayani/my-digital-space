
import { motion } from "framer-motion";

const skills = [
    "React", "TypeScript", "Tailwind", "Figma",
    "Node.js", "Next.js", "UI/UX", "Motion"
];

const SkillsCloud = () => {
    return (
        <div className="w-full h-full min-h-[300px] bg-white dark:bg-zinc-900 rounded-xl border border-border p-6 flex flex-col overflow-hidden relative">
            <h3 className="text-xl font-bold mb-4 z-10 relative">Tech Stack</h3>

            <div className="flex-1 flex flex-wrap content-center gap-3 overflow-y-auto z-10 relative no-scrollbar">
                {skills.map((skill, i) => (
                    <motion.span
                        key={skill}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium border border-transparent hover:border-primary/20 hover:bg-primary/5 cursor-default transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        </div>
    );
};

export default SkillsCloud;
