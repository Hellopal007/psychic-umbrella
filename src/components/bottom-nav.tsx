"use client";

import Link from "next/link";
import { Home, LayoutDashboard, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";

const items = [{ href: "/", label: "Home", icon: Home }, { href: "/dashboard", label: "Progress", icon: LayoutDashboard }, { href: "/day/12", label: "Today", icon: UserRound }];

export function BottomNav() {
  const pathname = usePathname();
  return <nav className="fixed inset-x-0 bottom-0 z-10 mx-auto flex max-w-[680px] border-x border-t border-line bg-graphite/95 px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur"><div className="grid w-full grid-cols-3">{items.map(({ href, label, icon: Icon }) => { const active = pathname === href; return <Link key={href} href={href} className={`flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-eyebrow ${active ? "text-signal" : "text-muted"}`}><Icon size={18} strokeWidth={active ? 2.4 : 1.7} /><span>{label}</span></Link>; })}</div></nav>;
}
