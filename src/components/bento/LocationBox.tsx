
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import mapBg from "@/assets/map-bg.jpg";
import cloudsImg from "@/assets/clouds.png";

const LocationBox = () => {
    return (
        <div className="relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-[#E5E5E5] bg-[#F4F7FF] shadow-sm group">
            {/* Map Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={mapBg}
                    alt="Map Background"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Overlay to ensure legibility */}
                <div className="absolute inset-0 bg-blue-400/5 mix-blend-multiply" />
            </div>

            {/* Decorative Minimal Clouds */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-80">
                <motion.img
                    src={cloudsImg}
                    animate={{ x: [-20, 10, -20], y: [0, 5, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-10 -left-10 w-48 h-auto rotate-[-10deg]"
                    alt="Cloud"
                />
                <motion.img
                    src={cloudsImg}
                    animate={{ x: [20, -10, 20], y: [0, -8, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-10 -right-10 w-56 h-auto scale-x-[-1] rotate-12"
                    alt="Cloud"
                />
                <motion.img
                    src={cloudsImg}
                    animate={{ x: [-10, 20, -10], y: [0, 10, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 -right-20 w-40 h-auto opacity-40 blur-[1px]"
                    alt="Cloud"
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
