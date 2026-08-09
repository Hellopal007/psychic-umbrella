import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Check, Flame } from "lucide-react";

export function Button({ className = "", children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-signal px-4 text-sm font-semibold text-graphite transition hover:bg-paper disabled:opacity-50 ${className}`} {...props}>{children}</button>;
}

export function Badge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "signal" }) {
  const styles = tone === "signal" ? "border-signal/40 bg-signal/10 text-signal" : "border-line bg-ink text-muted";
  return <span className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-eyebrow ${styles}`}>{children}</span>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`border border-line bg-ink ${className}`}>{children}</section>;
}

export function ProgressBar({ value, max = 60 }: { value: number; max?: number }) {
  return <div className="h-1.5 w-full overflow-hidden bg-line"><div className="h-full bg-signal" style={{ width: `${Math.min(100, (value / max) * 100)}%` }} /></div>;
}

export function StreakIndicator({ days, compact = false }: { days: number; compact?: boolean }) {
  return <div className="flex items-center gap-2"><span className="grid size-8 place-items-center rounded-full border border-signal/40 bg-signal/10 text-signal"><Flame size={15} /></span><div><p className="font-mono text-sm font-semibold leading-none text-paper">{days} days</p>{!compact && <p className="mt-1 font-mono text-[10px] uppercase tracking-eyebrow text-muted">current streak</p>}</div></div>;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="font-mono text-[10px] font-medium uppercase tracking-eyebrow text-muted">{children}</p>;
}

export function StatusIndicator({ status = "verified", label }: { status?: "verified" | "pending"; label: string }) {
  const active = status === "verified";
  return <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-eyebrow ${active ? "text-signal" : "text-muted"}`}><span className={`size-1.5 rounded-full ${active ? "bg-signal" : "bg-muted"}`}>{active && <Check size={0} />}</span>{label}</span>;
}

export function ChallengeDayIndicator({ day, status }: { day: number; status: "complete" | "current" | "locked" }) {
  const styles = status === "complete" ? "border-signal bg-signal text-graphite" : status === "current" ? "border-signal text-signal" : "border-line text-muted";
  return <span className={`grid size-9 place-items-center border font-mono text-xs font-bold ${styles}`}>{status === "complete" ? <Check size={14} strokeWidth={3} /> : String(day).padStart(2, "0")}</span>;
}
