import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const GRADIENTS = [
  "linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)",
  "linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)",
  "linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)",
  "linear-gradient(137deg, #6366f1 0%, #a855f7 45%, #ec4899 100%)",
  "linear-gradient(137deg, #22d3ee 0%, #6366f1 45%, #a855f7 100%)",
  "linear-gradient(137deg, #f59e0b 0%, #f97316 45%, #ef4444 100%)",
] as const;

export function getGradient(index: number): string {
  return GRADIENTS[index % GRADIENTS.length];
}

interface GlowCardProps {
  children: ReactNode;
  gradient?: string;
  delay?: number;
  className?: string;
  innerClassName?: string;
  noAnimation?: boolean;
  rounded?: string;
  borderWidth?: number;
  glowOpacity?: number;
  glowBlur?: number;
}

export function GlowCard({
  children,
  gradient = GRADIENTS[0],
  delay = 0,
  className,
  innerClassName,
  noAnimation = false,
  rounded = "40px",
  borderWidth = 2,
  glowOpacity = 0.6,
  glowBlur = 45,
}: GlowCardProps) {
  const Wrapper = noAnimation ? "div" : motion.div;
  const wrapperProps = noAnimation
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" as const, delay },
      };

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={cn("relative flex flex-col justify-start items-start w-full group", className)}
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-80"
        style={{
          background: gradient,
          opacity: glowOpacity,
          filter: `blur(${glowBlur}px)`,
          borderRadius: rounded,
          transform: "scale(0.92)",
        }}
        aria-hidden
      />

      {/* Foreground card with gradient border */}
      <div
        className={cn("relative z-10 w-full overflow-hidden", innerClassName)}
        style={{
          borderRadius: rounded,
          border: `${borderWidth}px solid transparent`,
          background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${gradient} border-box`,
        }}
      >
        {children}
      </div>
    </Wrapper>
  );
}

/* Compact glow card for smaller items (buttons, badges, pills) */
interface GlowBorderProps {
  children: ReactNode;
  gradient?: string;
  className?: string;
  hoverOnly?: boolean;
}

export function GlowBorder({
  children,
  gradient = GRADIENTS[0],
  className,
  hoverOnly = false,
}: GlowBorderProps) {
  return (
    <div
      className={cn(
        "relative inline-flex rounded-full p-[2px] transition-all duration-300",
        hoverOnly && "opacity-0 hover:opacity-100",
        className,
      )}
      style={{ background: gradient }}
    >
      <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}
