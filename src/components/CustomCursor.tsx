import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring settings for the outer ring
    const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 });

    // Fast spring settings for the inner dot
    const dotSpringX = useSpring(mouseX, { stiffness: 300, damping: 28, mass: 0.5 });
    const dotSpringY = useSpring(mouseY, { stiffness: 300, damping: 28, mass: 0.5 });

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 rounded-full border border-primary/50 pointer-events-none z-[100] hidden md:block mix-blend-difference"
                style={{
                    translateX: "-50%",
                    translateY: "-50%",
                    x: springX,
                    y: springY,
                }}
                animate={{
                    width: isHovered ? 48 : 16,
                    height: isHovered ? 48 : 16,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
            />
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference"
                style={{
                    translateX: "-50%",
                    translateY: "-50%",
                    x: dotSpringX,
                    y: dotSpringY,
                    backgroundColor: "hsl(var(--primary))",
                }}
                animate={{
                    width: isHovered ? 0 : 8,
                    height: isHovered ? 0 : 8,
                    opacity: isHovered ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
            />
        </>
    );
};

export default CustomCursor;
