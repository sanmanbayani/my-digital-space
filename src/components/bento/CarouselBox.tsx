
import { motion } from "framer-motion";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const row1 = [about1, work1, about2, work2];
const row2 = [work3, about1, work4, about2];

// Helper to double the items for seamless loop
const MarqueeRow = ({ items, direction = "left", speed = 30 }: { items: string[], direction?: "left" | "right", speed?: number }) => {
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div className="flex w-full overflow-hidden py-2">
            <motion.div
                className="flex gap-4 px-2"
                animate={{
                    x: direction === "left" ? [0, -400] : [-400, 0],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ width: "max-content" }}
            >
                {duplicatedItems.map((src, index) => (
                    <div
                        key={index}
                        className="group relative h-[120px] w-[180px] flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm border border-[#F0F0F0] transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    >
                        <img
                            src={src}
                            alt={`Gallery card ${index}`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const CarouselBox = () => {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-[#E5E5E5] bg-[#FBFCFF] py-4 px-0 flex flex-col justify-center gap-2 shadow-sm">
            {/* Background Decorative Layer */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>

            {/* Marquee Rows */}
            <div className="relative z-10 space-y-2">
                <MarqueeRow items={row1} direction="left" speed={35} />
                <MarqueeRow items={row2} direction="right" speed={40} />
            </div>

            {/* Corner Glows */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-100/30 blur-3xl rounded-full" />
        </div>
    );
};

export default CarouselBox;
