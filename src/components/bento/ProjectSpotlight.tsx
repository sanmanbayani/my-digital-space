
import { motion } from "framer-motion";
import { ArrowUpRight, Monitor, Layout, Smartphone } from "lucide-react";

const ProjectSpotlight = () => {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-[#E5E5E5] bg-white shadow-sm group">
            {/* Background Animated Gradient / Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white to-purple-50/10" />

            <div className="relative h-full w-full pt-8 px-8 flex flex-col justify-between z-10">
                <div className="flex items-start justify-between">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 mb-3"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                                Currently Working On
                            </span>
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a]">
                            Windmill Restaurant
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground font-medium max-w-[440px] leading-relaxed">
                            A premium culinary experience blending traditional flavors with modern gastronomic innovation.
                        </p>
                    </div>

                    <motion.a
                        href="https://windmillrestaurant.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-3 bg-white rounded-2xl border border-[#F0F0F0] shadow-sm text-blue-600"
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </motion.a>
                </div>

                {/* Mockup Preview Area */}
                <div className="relative mt-8 flex-1 flex items-end justify-center perspective-[1000px]">
                    <motion.div
                        initial={{ y: 100, rotateX: 20 }}
                        animate={{ y: 0, rotateX: 10 }}
                        whileHover={{ y: -5, rotateX: 5, scale: 1.02 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-[95%] h-full bg-white/50 backdrop-blur-sm rounded-t-2xl border-x border-t border-[#E5E5E5] shadow-[0_-20px_50px_rgba(0,0,0,0.03)] overflow-hidden"
                    >
                        {/* Mockup Top Bar */}
                        <div className="h-8 border-b border-[#F0F0F0] bg-[#FAFBFF]/80 px-4 flex items-center gap-1.5 z-20 relative">
                            <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                            <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                        </div>

                        {/* Custom Coded Mockup Content */}
                        <div className="absolute inset-0 pt-8 flex flex-col items-center justify-center overflow-hidden bg-white/10">
                            {/* Animated Windmill Graphic */}
                            <div className="relative mb-4">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-32 h-32 relative opacity-60"
                                >
                                    {[0, 90, 180, 270].map((deg) => (
                                        <div
                                            key={deg}
                                            className="absolute top-1/2 left-1/2 w-16 h-1 bg-gradient-to-r from-orange-400 to-transparent origin-left"
                                            style={{ transform: `rotate(${deg}deg)` }}
                                        />
                                    ))}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-orange-400/50 bg-white" />
                                </motion.div>
                            </div>

                            {/* Mockup Text */}
                            <div className="text-center space-y-2 px-6">
                                <h4 className="text-[14px] font-serif tracking-[0.2em] text-[#B8860B] uppercase font-bold">
                                    Windmill
                                </h4>
                                <div className="h-[1px] w-12 bg-[#B8860B]/30 mx-auto" />
                                <p className="text-[10px] text-muted-foreground max-w-[200px] leading-relaxed font-medium">
                                    Culinary excellence rooted in tradition, refined for the modern palate.
                                </p>
                            </div>

                            {/* Subtle Ambient Light */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-100/5 blur-[100px] rounded-full pointer-events-none" />
        </div>
    );
};

export default ProjectSpotlight;
