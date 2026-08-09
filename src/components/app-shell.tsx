import Link from "next/link";
import { BottomNav } from "@/components/bottom-nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return <main className="shell"><header className="flex h-16 items-center justify-between border-b border-line px-5 sm:px-7"><Link href="/" aria-label="AB Talks home" className="font-mono text-xl font-black italic tracking-[-0.12em] text-paper transition-colors hover:text-signal">AB TALKS</Link><span className="telemetry">SYS / 01</span></header>{children}<BottomNav /></main>;
}
