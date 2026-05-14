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
const CYCLE = 6000; // 6s loop: type → hold → delete → hold

export function TerminalTypewriter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      const t = ((now - start) % CYCLE) / CYCLE;
      let p: number;
      if (t < 0.45) {
        // typing
        p = t / 0.45;
        setCount(Math.floor(p * FULL.length));
      } else if (t < 0.6) {
        // hold full
        setCount(FULL.length);
      } else if (t < 0.9) {
        // deleting
        p = (t - 0.6) / 0.3;
        setCount(Math.floor(FULL.length * (1 - p)));
      } else {
        setCount(0);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  let remaining = count;
  const rendered: { text: string; className?: string }[] = [];
  for (const line of LINES) {
    const len = line.text.length;
    if (remaining <= 0) {
      rendered.push({ text: "", className: line.className });
    } else if (remaining >= len) {
      rendered.push({ text: line.text, className: line.className });
      remaining -= len + 1;
    } else {
      rendered.push({ text: line.text.slice(0, remaining), className: line.className });
      remaining = 0;
    }
  }

  // Find last non-empty line for cursor placement
  let cursorIdx = rendered.length - 1;
  for (let i = rendered.length - 1; i >= 0; i--) {
    if (rendered[i].text.length > 0) { cursorIdx = i; break; }
  }

  return (
    <pre className="font-mono text-[13px] leading-relaxed p-5 overflow-x-auto whitespace-pre">
      {rendered.map((l, i) => (
        <div key={i} className={l.className}>
          {l.text || "\u00A0"}
          {i === cursorIdx && (
            <span
              className="inline-block w-2 h-4 -mb-0.5 ml-0.5 align-middle bg-cyan animate-pulse"
              style={{ boxShadow: "0 0 8px var(--accent-cyan)" }}
            />
          )}
        </div>
      ))}
    </pre>
  );
}
