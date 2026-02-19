
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface HotspotProps {
    x: number; // Percentage from left
    y: number; // Percentage from top
    label: string;
}

const Hotspot = ({ x, y, label }: HotspotProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="absolute z-20 flex items-center justify-center pointer-events-auto"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative flex items-center justify-center cursor-pointer group">
                {/* Simple Circle with Grow Effect */}
                <motion.div
                    className="h-4 w-4 rounded-full border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.3)] backdrop-blur-sm"
                    animate={{
                        scale: isHovered ? 1.5 : 1,
                        backgroundColor: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />

                {/* Tooltip */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full mt-3 w-max max-w-[200px] px-4 py-2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 text-sm font-medium text-primary text-center pointer-events-none z-50"
                        >
                            {label}
                            {/* Little arrow pointing up */}
                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/95 rotate-45 border-l border-t border-white/20" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Hotspot;
