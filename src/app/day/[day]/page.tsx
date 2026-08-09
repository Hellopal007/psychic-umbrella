"use client";

import Link from "next/link";
import { ArrowLeft, Check, CheckCircle2, Github, Linkedin, Terminal } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Badge, Button, Card, SectionLabel, StatusIndicator, Telemetry } from "@/components/ui";

const requirements = ["GET /tasks", "POST /tasks", "JSON responses", "Basic error handling"];

export default function ChallengeDayPage() {
  const [complete, setComplete] = useState(false);

  return <AppShell><div className="page space-y-8">
    <section aria-labelledby="day-heading"><Link href="/dashboard" className="inline-flex items-center gap-2 telemetry transition-colors hover:text-signal"><ArrowLeft size={14} /> Day 12</Link><div className="mt-6 flex flex-wrap gap-2"><Badge tone="signal">Day 12 / 60</Badge><Badge>~45 min</Badge><Badge>Intermediate</Badge></div><h1 id="day-heading" className="display mt-5 max-w-[11ch] text-[2.35rem] leading-[0.94]">Build your first REST API</h1><p className="mt-5 max-w-[36ch] text-sm leading-6 text-muted">Create a compact task API that makes its data, intent, and failure states easy for another developer to understand.</p></section>

    <section aria-labelledby="build-heading"><div className="flex items-center justify-between"><SectionLabel>Today&apos;s build</SectionLabel><Terminal size={15} className="text-signal" /></div><Card elevated className="mt-3 overflow-hidden"><div className="border-b border-line bg-[#121310] px-4 py-3"><p className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">api / task-service</p></div><div className="divide-y divide-line">{requirements.map((requirement, index) => <div key={requirement} className="flex items-center gap-3 px-4 py-3"><span className="font-mono text-[10px] text-muted">0{index + 1}</span><code className="font-mono text-[13px] text-paper">{requirement}</code></div>)}</div><div className="border-t border-line bg-signal/[0.045] px-4 py-3"><p className="font-mono text-[10px] leading-5 text-muted"><span className="mr-2 text-signal">//</span>Keep it small. Working endpoints and clean responses matter more than feature count.</p></div></Card></section>

    <section aria-labelledby="proof-heading"><div className="flex items-end justify-between"><div><SectionLabel>Your proof</SectionLabel><h2 id="proof-heading" className="display mt-2 text-2xl">Ready for verification.</h2></div><StatusIndicator label="2 / 2" /></div><div className="mt-4 divide-y divide-line border-y border-line"><div className="py-4"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Github size={17} className="text-signal" /><p className="font-mono text-xs font-semibold uppercase tracking-[0.09em]">GitHub repository</p></div><StatusIndicator label="connected" /></div><p className="mt-3 truncate font-mono text-xs text-muted">github.com/arjun/day-12-api</p></div><div className="py-4"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Linkedin size={17} className="text-signal" /><p className="font-mono text-xs font-semibold uppercase tracking-[0.09em]">LinkedIn post</p></div><StatusIndicator label="posted" /></div><p className="mt-3 truncate font-mono text-xs text-muted">linkedin.com/posts/arjun/day-12</p></div></div></section>

    {complete ? <CompletionState /> : <Button onClick={() => setComplete(true)} className="w-full" size="lg">Complete day 12 <CheckCircle2 size={17} /></Button>}
  </div></AppShell>;
}

function CompletionState() {
  return <section aria-live="polite" className="border border-signal/45 bg-signal/[0.07] p-4 shadow-[0_0_0_3px_rgb(216_255_87_/_0.05)]"><div className="flex items-start justify-between"><div><p className="telemetry text-signal">Verification complete</p><h2 className="display mt-3 text-[1.7rem] leading-[0.95]">Day 12 locked in.</h2></div><span className="grid size-9 place-items-center rounded-full border border-signal/40 bg-signal/10 text-signal"><Check size={18} /></span></div><div className="mt-5 border-y border-signal/20 py-3"><Telemetry label="active streak" value={<><span className="text-signal">12D</span> streak</>} /></div><p className="mt-4 max-w-[35ch] text-sm leading-6 text-muted">Your work is now part of your public proof chain.</p><div className="mt-5 grid grid-cols-3 gap-px border border-signal/20 bg-signal/20"><ProofStep label="build" /><ProofStep label="commit" /><ProofStep label="share" /></div><Link href="/dashboard" className="mt-5 flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-signal">Return to command center <span>→</span></Link></section>;
}

function ProofStep({ label }: { label: string }) { return <div className="flex items-center justify-center gap-1.5 bg-[#171816] py-3 font-mono text-[10px] uppercase tracking-[0.1em] text-paper"><Check size={12} className="text-signal" />{label}</div>; }
