import { useEffect, useState } from "react";

const LINES: { text: string; className?: string }[] = [
  { text: "$ audit --free", className: "text-foreground" },
  { text: "› analyzing workflows ........... ✓", className: "text-muted-foreground" },
  { text: "› identifying bottlenecks ....... ✓", className: "text-muted-foreground" },
  { text: "› mapping ROI opportunities ..... ✓", className: "text-muted-foreground" },
  { text: "" },
  { text: "$ build --custom", className: "text-foreground" },
  { text: "› deploying automation system to production", className: "text-muted-foreground" },
  { text: "→ ready in 2 weeks. zero templates. all yours.", className: "text-foreground" },
];

const FULL = LINES.map((l) => l.text).join("\n");
const TOTAL_DURATION = 8000; // 8s loop
const TYPE_RATIO = 0.7; // 70% typing, then hold

export function TerminalTypewriter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start = performance.now();
    const loop = (now: number) => {
      const t = ((now - start) % TOTAL_DURATION) / TOTAL_DURATION;
      if (t < TYPE_RATIO) {
        const p = t / TYPE_RATIO;
        setCount(Math.floor(p * FULL.length));
      } else {
        setCount(FULL.length);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Build visible output line-by-line based on `count`
  let remaining = count;
  const rendered: { text: string; className?: string }[] = [];
  for (const line of LINES) {
    const len = line.text.length;
    if (remaining <= 0) {
      rendered.push({ text: "", className: line.className });
    } else if (remaining >= len) {
      rendered.push({ text: line.text, className: line.className });
      remaining -= len + 1; // +1 for newline
    } else {
      rendered.push({ text: line.text.slice(0, remaining), className: line.className });
      remaining = 0;
    }
  }

  return (
    <pre className="font-mono text-[13px] leading-relaxed p-5 overflow-x-auto whitespace-pre">
      {rendered.map((l, i) => (
        <div key={i} className={l.className}>
          {l.text || "\u00A0"}
          {i === rendered.length - 1 && (
            <span className="inline-block w-2 h-4 -mb-0.5 ml-0.5 bg-cyan animate-pulse" />
          )}
        </div>
      ))}
    </pre>
  );
}