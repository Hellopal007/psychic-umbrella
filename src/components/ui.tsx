import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Check, Flame, LockKeyhole } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "quiet" | "danger";
type ButtonSize = "sm" | "md" | "lg";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-signal text-graphite hover:bg-[#edfcae] active:bg-signal-dim",
  secondary: "border border-line bg-ink text-paper hover:border-[#55574f] hover:bg-[#1c1e1a]",
  quiet: "text-muted hover:bg-paper/5 hover:text-paper",
  danger: "border border-red-400/30 bg-red-400/10 text-red-300 hover:bg-red-400/15",
};
const buttonSizes: Record<ButtonSize, string> = { sm: "h-9 px-3 text-xs", md: "h-11 px-4 text-sm", lg: "h-12 px-5 text-sm" };

export function Button({ className = "", children, variant = "primary", size = "md", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return <button className={`inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-[background-color,border-color,color,transform] duration-150 ease-out active:translate-y-px disabled:pointer-events-none disabled:opacity-40 ${buttonStyles[variant]} ${buttonSizes[size]} ${className}`} {...props}>{children}</button>;
}

type BadgeTone = "default" | "signal" | "verified" | "pending" | "locked";
const badgeStyles: Record<BadgeTone, string> = {
  default: "border-line bg-ink text-muted",
  signal: "border-signal/35 bg-signal/10 text-signal",
  verified: "border-signal/25 bg-signal/[0.07] text-signal",
  pending: "border-amber-200/20 bg-amber-200/[0.07] text-amber-100",
  locked: "border-line bg-transparent text-[#6e7169]",
};

export function Badge({ children, tone = "default" }: { children: ReactNode; tone?: BadgeTone }) {
  return <span className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-eyebrow ${badgeStyles[tone]}`}>{children}</span>;
}

export function Card({ children, className = "", elevated = false }: { children: ReactNode; className?: string; elevated?: boolean }) {
  return <section className={`border border-line bg-ink ${elevated ? "shadow-[0_1px_0_rgb(255_255_255_/_0.035%)_inset,0_12px_30px_rgb(0_0_0_/_0.14)]" : ""} ${className}`}>{children}</section>;
}

export function ProgressBar({ value, max = 60, label }: { value: number; max?: number; label?: string }) {
  const progress = Math.min(100, Math.max(0, (value / max) * 100));
  return <div aria-label={label ?? `${Math.round(progress)} percent complete`} aria-valuemax={max} aria-valuemin={0} aria-valuenow={value} role="progressbar"><div className="mb-2 flex justify-between telemetry"><span>{label ?? "progress"}</span><span>{Math.round(progress)}%</span></div><div className="h-1.5 overflow-hidden border border-line bg-[#0c0d0b]"><div className="h-full origin-left bg-signal shadow-[0_0_12px_rgb(216_255_87_/_0.28)] animate-meter-fill" style={{ width: `${progress}%` }} /></div></div>;
}

export function StreakIndicator({ days, compact = false }: { days: number; compact?: boolean }) {
  return <div className={`flex items-center ${compact ? "gap-2" : "gap-3"}`}><span className={`${compact ? "size-8" : "size-10"} relative grid place-items-center rounded-full border border-signal/35 bg-signal/[0.08] text-signal`}><Flame size={compact ? 15 : 18} /><span className="absolute -right-px -top-px size-1.5 rounded-full bg-signal animate-status-pulse" /></span><div><p className={`${compact ? "text-sm" : "text-lg"} font-mono font-semibold leading-none text-paper`}>{days}<span className="ml-0.5 text-signal">D</span></p><p className="mt-1 telemetry">streak active</p></div></div>;
}

export function SectionLabel({ children }: { children: ReactNode }) { return <p className="telemetry">{children}</p>; }

export function Telemetry({ label, value, className = "" }: { label: string; value: ReactNode; className?: string }) {
  return <div className={`min-w-0 ${className}`}><p className="telemetry">{label}</p><p className="mt-1 truncate font-mono text-sm font-semibold text-paper">{value}</p></div>;
}

export function StatusIndicator({ status = "verified", label }: { status?: "verified" | "pending" | "offline"; label: string }) {
  const styles = status === "verified" ? "text-signal" : status === "pending" ? "text-amber-100" : "text-muted";
  const dot = status === "verified" ? "bg-signal animate-status-pulse" : status === "pending" ? "bg-amber-200" : "bg-muted";
  return <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-eyebrow ${styles}`}><span className={`size-1.5 rounded-full ${dot}`} />{label}</span>;
}

export function ChallengeDayIndicator({ day, status, label }: { day: number; status: "complete" | "current" | "locked"; label?: boolean }) {
  const styles = status === "complete" ? "border-signal bg-signal text-graphite" : status === "current" ? "border-signal bg-signal/[0.07] text-signal shadow-[0_0_0_3px_rgb(216_255_87_/_0.06)]" : "border-line bg-[#151613] text-muted";
  return <div className="inline-flex flex-col gap-1.5"><span className={`grid size-10 place-items-center border font-mono text-xs font-bold transition-colors ${styles}`}>{status === "complete" ? <Check size={15} strokeWidth={3} /> : status === "locked" ? <LockKeyhole size={13} /> : String(day).padStart(2, "0")}</span>{label && <span className="telemetry text-center">day {day}</span>}</div>;
}
