"use client";

import Link from "next/link";
import { Home, LayoutDashboard, SquareTerminal } from "lucide-react";
import { usePathname } from "next/navigation";

const items = [{ href: "/", label: "Home", icon: Home }, { href: "/dashboard", label: "Progress", icon: LayoutDashboard }, { href: "/day/12", label: "Today", icon: SquareTerminal }];

export function BottomNav() {
  const pathname = usePathname();
  return <nav aria-label="Primary navigation" className="fixed inset-x-0 bottom-0 z-10 mx-auto flex max-w-[680px] border-x border-t border-line bg-graphite/95 px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md"><div className="grid w-full grid-cols-3">{items.map(({ href, label, icon: Icon }) => { const active = pathname === href; return <Link key={href} href={href} className={`group relative flex min-h-11 flex-col items-center justify-center gap-1 font-mono text-[10px] uppercase tracking-eyebrow transition-colors ${active ? "text-signal" : "text-muted hover:text-paper"}`}><span className={`absolute -top-3 h-px w-7 transition-all ${active ? "bg-signal" : "bg-transparent group-hover:bg-muted/60"}`} /><Icon size={18} strokeWidth={active ? 2.2 : 1.6} /><span>{label}</span></Link>; })}</div></nav>;
}
