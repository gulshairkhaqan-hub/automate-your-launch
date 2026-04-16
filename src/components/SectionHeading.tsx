import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ label, title, description, align = "center", light = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
          {label}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${align === "center" ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
