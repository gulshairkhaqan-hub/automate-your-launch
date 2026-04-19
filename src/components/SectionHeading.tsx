import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ label, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" as const }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span className={`inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan mb-4 ${align === "center" ? "justify-center" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--accent-cyan)]" />
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-foreground">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
