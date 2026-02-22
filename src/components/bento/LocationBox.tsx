
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationBox = () => {
    return (
        <div className="relative flex h-[300px] flex-col overflow-hidden rounded-[2.5rem] border border-[#E5E5E5] bg-[#F4F7FF] shadow-sm group">
            {/* Low-Poly Minimal SVG Map Background */}
            <div className="absolute inset-0 z-0">
                <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full scale-[1.05]"
                    preserveAspectRatio="xMidYMid slice"
                >
                    {/* Minimal Base Layer */}
                    <rect width="400" height="400" fill="#F4F7FF" />

                    {/* Low-Poly Water Feature (Geometric) */}
                    <path
                        d="M -10 380 L 120 340 L 220 370 L 410 330 L 410 410 L -10 410 Z"
                        fill="#DCEBFF"
                        opacity="0.8"
                    />

                    {/* Low-Poly Minimal Building Blocks */}
                    <g opacity="0.3">
                        {/* Clean Geometric Shapes */}
                        <path d="M 30 40 L 90 40 L 100 100 L 40 110 Z" fill="#DAF0DC" />
                        <path d="M 150 20 L 230 15 L 240 70 L 160 80 Z" fill="#EFDEF2" />
                        <path d="M 300 40 L 370 45 L 360 110 L 310 105 Z" fill="#D3EDFF" />

                        <path d="M 50 190 L 100 185 L 105 230 L 55 235 Z" fill="#FFFED3" />
                        <path d="M 170 170 L 250 165 L 255 230 L 165 240 Z" fill="#D9EFFF" />
                        <path d="M 320 180 L 380 185 L 375 230 L 325 225 Z" fill="#FDE1ED" />

                        <path d="M 60 320 L 160 315 L 155 370 L 65 375 Z" fill="#D7F2F1" />
                        <path d="M 240 310 L 340 315 L 345 370 L 250 365 Z" fill="#F7FAE2" />
                    </g>

                    {/* Minimal Roads Layout */}
                    <g stroke="#FFFFFF" strokeWidth="10" fill="none" strokeLinecap="square">
                        <path d="M -10 120 L 410 120" />
                        <path d="M 130 -10 L 130 410" />
                        <path d="M -10 270 L 410 270" />
                        <path d="M 290 -10 L 290 410" />
                    </g>

                    {/* Subtle Secondary Roads */}
                    <g stroke="#FFFFFF" strokeWidth="2" opacity="0.4">
                        <path d="M 0 60 L 130 60" />
                        <path d="M 290 200 L 410 200" />
                        <path d="M 70 120 L 70 270" />
                    </g>
                </svg>
            </div>

            {/* Decorative Minimal Clouds */}
            <div className="absolute inset-0 pointer-events-none z-10">
                <motion.div
                    animate={{ x: [0, 30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-12 left-20 w-12 h-6 bg-white opacity-70 blur-[1px] rounded-full"
                />
                <motion.div
                    animate={{ x: [0, -20, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute top-40 right-24 w-16 h-8 bg-white opacity-50 blur-[2px] rounded-full"
                />
            </div>

            {/* Central Glowing Location Pin */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative flex items-center justify-center w-32 h-32">
                    {/* Levitation Wrapper - Pin and Concentric Rings move together */}
                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Concentric Glowing Rings */}
                        <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute w-16 h-16 rounded-full bg-blue-400/20 blur-lg"
                        />
                        <motion.div
                            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute w-22 h-22 rounded-full border border-blue-400/20 bg-blue-400/5 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                        />

                        {/* Minimal White Circle Container */}
                        <div className="relative w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgb(0,0,0,0.06)] flex items-center justify-center border border-[#F0F0F0] z-10">
                            <MapPin className="w-6 h-6 text-[#3B82F6] fill-[#3B82F6]/5" />
                        </div>

                        {/* Smaller Pune Label */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-[#F5F5F5] z-20">
                            <span className="text-[10px] font-bold text-[#444444] whitespace-nowrap uppercase tracking-wider">Pune, IN</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LocationBox;
