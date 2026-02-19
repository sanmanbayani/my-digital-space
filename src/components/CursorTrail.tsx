import { useEffect, useRef, useState } from "react";

const CursorTrail = () => {
    const [points, setPoints] = useState<{ x: number; y: number; id: number }[]>(
        []
    );
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const requestRef = useRef<number>();
    const pointIdRef = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            setPoints((prev) => [
                ...prev,
                { x: e.clientX, y: e.clientY, id: pointIdRef.current++ },
            ]);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const cleanupPoints = () => {
            setPoints((prev) => {
                if (prev.length === 0) return prev;
                // Longer trail for crayon effect
                return prev.slice(-40);
            });
            requestRef.current = requestAnimationFrame(cleanupPoints);
        };

        requestRef.current = requestAnimationFrame(cleanupPoints);
        return () => cancelAnimationFrame(requestRef.current!);
    }, []);

    const pointsString = points.map((p) => `${p.x},${p.y}`).join(" ");

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Crayon Texture Filter */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id="crayon-texture">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.5"
                            numOctaves="1"
                            result="noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="4"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>

            {/* The Trail */}
            <svg className="absolute top-0 left-0 w-full h-full">
                <polyline
                    points={pointsString}
                    fill="none"
                    stroke="#333" // Dark pencil/crayon color
                    strokeWidth="12" // Thicker for crayon
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-60"
                    style={{ filter: "url(#crayon-texture)" }}
                />
            </svg>

            {/* The Crayon Cursor */}
            <img
                src="/crayon.svg"
                alt="Cursor"
                className="absolute w-8 h-8 -translate-x-0 -translate-y-full" // Adjust tip position
                style={{
                    left: position.x,
                    top: position.y,
                }}
            />
        </div>
    );
};

export default CursorTrail;
