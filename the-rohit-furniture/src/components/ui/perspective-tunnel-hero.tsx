"use client";

import {
    motion,
    useTransform,
    useReducedMotion,
    useMotionValue,
    useSpring,
    type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
    { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", title: "Sofa I" },
    { src: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80", title: "Bedroom II" },
    { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80", title: "Interior III" },
    { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", title: "Living IV" },
    { src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80", title: "Dining V" },
    { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80", title: "Modern VI" },
    { src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80", title: "Craft VII" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", title: "Home VIII" },
    { src: "https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=600&q=80", title: "Wood IX" },
];


interface TunnelCardData {
    item: { src: string; title: string };
    angleCos: number;
    angleSin: number;
    radiusFactorX: number;
    radiusFactorY: number;
    rotationZ: number;
    index: number;
}

const TUNNEL_CARDS: TunnelCardData[] = IMAGES.map((item, i) => {
    const goldenAngle = i * 137.5 * (Math.PI / 180);
    const radiusFactorX = 0.28 + (i % 3) * 0.08;
    const radiusFactorY = 0.26 + (i % 2) * 0.09;

    return {
        item,
        angleCos: Math.cos(goldenAngle),
        angleSin: Math.sin(goldenAngle),
        radiusFactorX,
        radiusFactorY,
        rotationZ: (i % 2 === 0 ? 1 : -1) * (3 + (i % 5) * 2),
        index: i,
    };
});

const SPRING_CONFIG = { stiffness: 60, damping: 25, mass: 0.5 };

interface StageDimensions {
    width: number;
    height: number;
    isMobile: boolean;
}

function useCameraParallax(enabled: boolean) {
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const x = useSpring(rawX, SPRING_CONFIG);
    const y = useSpring(rawY, SPRING_CONFIG);

    useEffect(() => {
        if (!enabled) return;
        const onMove = (e: PointerEvent) => {
            rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
            rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, [enabled, rawX, rawY]);

    return { x, y };
}

interface TunnelCardProps {
    card: TunnelCardData;
    progress: MotionValue<number>;
    pointer: { x: MotionValue<number>; y: MotionValue<number> };
    total: number;
    stage: StageDimensions;
}

function TunnelCard({ card, progress, pointer, total, stage }: TunnelCardProps) {
    const staggerSpan = 0.55;
    const start = (card.index / total) * (1 - staggerSpan);
    const end = start + staggerSpan;

    const localProgress = useTransform(progress, [start, end], [0, 1]);

    const farZ = stage.isMobile ? -1200 : -1700;
    const nearZ = stage.isMobile ? 350 : 500;
    const z = useTransform(localProgress, [0, 1], [farZ, nearZ]);

    const opacity = useTransform(localProgress, [0, 0.18, 0.82, 0.98], [0, 1, 1, 0]);

    const cardWidth = stage.isMobile
        ? Math.max(130, Math.min(180, stage.width * 0.38))
        : Math.max(180, Math.min(270, stage.width * 0.18));

    const baseX = card.angleCos * (stage.width * card.radiusFactorX);
    const baseY = card.angleSin * (stage.height * card.radiusFactorY);
    const panStrength = stage.isMobile ? 20 : 45;

    const transform = useTransform(
        [z, pointer.x, pointer.y],
        ([currZ, px, py]: number[]) => {
            const offsetX = baseX - px * panStrength;
            const offsetY = baseY - py * panStrength;
            return `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), ${currZ}px) rotateZ(${card.rotationZ}deg)`;
        }
    );

    return (
        <motion.div
            style={{
                width: cardWidth,
                transform,
                opacity,
                zIndex: card.index + 1,
            }}
            className="pointer-events-auto absolute left-1/2 top-1/2 aspect-[4/5] will-change-transform select-none cursor-pointer"
        >
            <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-[#E8E0D4] shadow-2xl shadow-[#3D3225]/25 ring-1 ring-[#3D3225]/10 transition-all duration-500 hover:ring-[#A35824]/60 hover:shadow-[#A35824]/20">
                <img
                    src={card.item.src}
                    alt={card.item.title}
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end p-4 sm:p-5">
                    <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-white/95 drop-shadow-md">
                        {card.item.title}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

interface PerspectiveTunnelHeroProps {
    onDone?: () => void;
}

export default function PerspectiveTunnelHero({ onDone }: PerspectiveTunnelHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();

    const [stage, setStage] = useState<StageDimensions>({
        width: 1440,
        height: 900,
        isMobile: false,
    });

    useEffect(() => {
        const updateDimensions = () => {
            setStage({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: window.innerWidth < 768,
            });
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // Raw motion value controlled directly by mouse wheel / touch trackpad
    const rawProgress = useMotionValue(0);
    const smoothProgress = useSpring(rawProgress, {
        stiffness: 80,
        damping: 30,
        restDelta: 0.0001,
    });

    // Handle wheel scrolling locally inside the 100vh viewport container without page scroll
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const current = rawProgress.get();
            const delta = e.deltaY * 0.0008; // Adjust speed of tunnel travel here
            const next = Math.min(1, Math.max(0, current + delta));
            rawProgress.set(next);
        };

        el.addEventListener("wheel", handleWheel, { passive: false });
        return () => el.removeEventListener("wheel", handleWheel);
    }, [rawProgress]);

    const pointer = useCameraParallax(!reduce);

    const titleScale = useTransform(smoothProgress, [0, 0.5, 1], [0.7, 1, 1.35]);
    const titleOpacity = useTransform(smoothProgress, [0, 0.12, 0.85, 1], [0.25, 1, 1, 0]);
    const promptOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);

    // Auto-enter after scrolling through the full tunnel
    useEffect(() => {
        if (!onDone) return;
        const unsub = smoothProgress.on("change", (v) => {
            if (v >= 0.98) {
                onDone();
            }
        });
        return unsub;
    }, [smoothProgress, onDone]);

    return (
        <div
            ref={containerRef}
            className="relative h-[100svh] w-screen overflow-hidden text-[#29251F] select-none flex items-center justify-center"
            data-theme="parchment"
            style={{
                perspective: stage.isMobile ? "900px" : "1200px",
                transformStyle: "preserve-3d",
                background: "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.75), transparent 42%), #EDE8DD",
            }}
        >
            {/* Paper texture lines */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.28]" style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(70,55,35,0.025) 0px, rgba(70,55,35,0.025) 1px, transparent 1px, transparent 4px)" }} />
            {/* Subtle dot grid */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#C4B8A4_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] opacity-40" />
            {/* Warm center glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,88,36,0.08)_0%,transparent_70%)]" />

            {/* Depth Ring Guides */}
            <div className="pointer-events-none absolute h-[48vmin] w-[48vmin] rounded-full border border-[#A35824]/15" />
            <div className="pointer-events-none absolute h-[76vmin] w-[76vmin] rounded-full border border-dashed border-[#C4B8A4]/50" />

            {/* Central Anchor Typography */}
            <motion.div
                style={{ scale: titleScale, opacity: titleOpacity }}
                className="pointer-events-none z-0 flex flex-col items-center text-center px-6 max-w-xl"
            >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-md border border-[#D4B896] bg-[#2C1A0B] mb-3">
                    <img src="/images/logo.png" alt="The Rohit Furniture Works" className="w-full h-full object-contain p-1" />
                </div>
                <p className="text-xs font-mono uppercase tracking-[0.4em] text-[#7D4A27] font-bold mb-3">
                    The Rohit Furniture Works
                </p>
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] bg-gradient-to-b from-[#29251F] via-[#4A3F32] to-[#A09080] bg-clip-text text-transparent">
                    CRAFTED
                    <br />
                    BY HAND.
                </h1>
                <p className="mt-4 max-w-[36ch] text-sm sm:text-base font-light text-[#6B5D4E]">
                    Scroll to explore our handcrafted furniture collection from Mahendragarh.
                </p>
            </motion.div>

            {/* Scroll Prompt */}
            <motion.div
                style={{ opacity: promptOpacity }}
                className="pointer-events-none absolute bottom-8 z-20 flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#8A7A68]"
            >
                <span>Scroll to Explore</span>
                <div className="h-6 w-px bg-gradient-to-b from-[#A35824] to-transparent" />
            </motion.div>

            {/* Enter Store Button */}
            {onDone && (
                <button
                    onClick={onDone}
                    className="absolute bottom-8 right-8 z-30 px-6 py-2.5 text-xs font-mono uppercase tracking-[0.2em] bg-[#29251F]/85 text-[#F0EBE0] backdrop-blur-sm rounded-full border border-[#A35824]/30 hover:bg-[#A35824] hover:border-[#A35824] transition-all duration-300 cursor-pointer"
                >
                    Enter Store →
                </button>
            )}

            {/* 3D Z-Space Plane */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ transformStyle: "preserve-3d" }}
            >
                {TUNNEL_CARDS.map((card, i) => (
                    <TunnelCard
                        key={i}
                        card={card}
                        progress={smoothProgress}
                        pointer={pointer}
                        total={TUNNEL_CARDS.length}
                        stage={stage}
                    />
                ))}
            </div>
        </div>
    );
}
