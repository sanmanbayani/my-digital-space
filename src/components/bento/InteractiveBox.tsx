
import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const InteractiveBox = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    // Simple drag constraints or physics simulation
    // For now, let's make it a draggable ball pit
    const balls = Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        size: Math.random() * 40 + 40,
        color: ["#FF6B6B", "#4ECDC4", "#FFE66D", "#FF9F43", "#5F27CD"][i % 5],
    }));

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full min-h-[300px] bg-secondary/50 rounded-xl overflow-hidden border border-border flex items-center justify-center"
        >
            <p className="absolute top-4 left-4 text-xs font-mono text-muted-foreground uppercase tracking-widest pointer-events-none">
                Playground
            </p>

            {balls.map((ball) => (
                <motion.div
                    key={ball.id}
                    className="absolute rounded-full cursor-grab active:cursor-grabbing shadow-lg backdrop-blur-sm bg-opacity-80"
                    style={{
                        width: ball.size,
                        height: ball.size,
                        backgroundColor: ball.color,
                    }}
                    drag
                    dragConstraints={containerRef}
                    dragElastic={0.2}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 200 - 100,
                    }}
                />
            ))}

            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
                <span className="text-9xl font-bold">?</span>
            </div>
        </div>
    );
};

export default InteractiveBox;
