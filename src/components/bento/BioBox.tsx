
import { motion } from "framer-motion";
import { Paintbrush } from "lucide-react";

const BioBox = () => {
    return (
        <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-[2.5rem] border border-[#E5E5E5] bg-white p-10 shadow-sm group">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                        Product Designer
                    </span>

                    <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold leading-[1.2] tracking-tight text-[#1a1a1a] mb-6">
                        Designing <span className="text-blue-600">purposeful</span> digital experiences.
                    </h2>

                    <p className="max-w-[90%] text-base text-muted-foreground leading-relaxed font-medium">
                        I'm a designer and developer focused on creating clean, intuitive interfaces that
                        bridge the gap between complex technology and human needs. I believe in
                        simplicity as the ultimate sophistication.
                    </p>
                </motion.div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute top-8 right-8 p-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Paintbrush className="w-10 h-10" strokeWidth={1.5} />
            </div>

            {/* Subtle Bottom Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-50/50 blur-[100px] rounded-full pointer-events-none" />
        </div>
    );
};

export default BioBox;
