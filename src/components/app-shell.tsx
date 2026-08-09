import Link from "next/link";
import { BottomNav } from "@/components/bottom-nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return <main className="shell"><header className="flex h-16 items-center justify-between border-b border-line px-5"><Link href="/" className="font-mono text-xl font-black italic tracking-[-0.12em] text-paper">AB TALKS</Link><span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">Build in public</span></header>{children}<BottomNav /></main>;
}
