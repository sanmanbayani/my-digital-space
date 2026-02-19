
import { useState } from "react";
import { motion } from "framer-motion";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

// Using placeholders for more photos if needed, or reusing existing ones
const photos = [
    { id: 1, src: about1, alt: "Sanman working" },
    { id: 2, src: about2, alt: "Design sketches" },
    { id: 3, src: about1, alt: "Another view" }, // Reusing for demo
];

const PhotoStack = () => {
    const [index, setIndex] = useState(0);

    const nextPhoto = () => {
        setIndex((prev) => (prev + 1) % photos.length);
    };

    return (
        <div
            className="relative w-full h-full min-h-[300px] cursor-pointer overflow-hidden rounded-xl bg-card border border-border"
            onClick={nextPhoto}
        >
            <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                <p className="text-sm text-muted-foreground font-medium animate-pulse">
                    Click to shuffle
                </p>
            </div>

            {photos.map((photo, i) => {
                // Calculate offset based on how far this card is from the current index
                const offset = (i - index + photos.length) % photos.length;
                // Only show top 3 cards for performance/visuals
                if (offset > 2) return null;

                return (
                    <motion.div
                        key={photo.id}
                        className="absolute inset-4 overflow-hidden rounded-lg shadow-md border border-white/10"
                        initial={false}
                        animate={{
                            scale: 1 - offset * 0.05,
                            y: offset * 15,
                            zIndex: photos.length - offset,
                            opacity: 1 - offset * 0.2,
                            rotate: offset % 2 === 0 ? offset * 2 : offset * -2,
                        }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="h-full w-full object-cover"
                        />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default PhotoStack;
