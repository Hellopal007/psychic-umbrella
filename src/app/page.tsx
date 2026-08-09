import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Github, Linkedin } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Badge, Card, ChallengeDayIndicator, SectionLabel, Telemetry } from "@/components/ui";

const timelineDays = [1, 2, 3];

export default function HomePage() {
  return <AppShell><div className="page space-y-14 sm:space-y-20">
    <section aria-labelledby="hero-heading">
      <Badge tone="signal">Challenge protocol / 60D</Badge>
      <h1 id="hero-heading" className="display mt-6 max-w-[10ch] text-[3.45rem] leading-[0.88] sm:text-6xl">60 days.<br /><span className="text-signal">One proof</span><br />every day.</h1>
      <p className="mt-6 max-w-[32rem] text-[15px] leading-6 text-muted">Build in public. Ship something every day. Turn consistency into visible proof.</p>
      <Link href="/day/12" className="mt-8 flex h-12 w-full items-center justify-between rounded-sm bg-signal px-4 text-sm font-semibold text-graphite transition-[background-color,transform] duration-150 hover:bg-[#edfcae] active:translate-y-px sm:w-fit sm:min-w-72">Start the 60-Day Challenge <ArrowUpRight size={17} /></Link>
      <div className="surface-grid mt-8 grid-cols-3"><Telemetry className="bg-ink px-3 py-3" label="duration" value="60 days" /><Telemetry className="bg-ink px-3 py-3" label="cadence" value="daily builds" /><Telemetry className="bg-ink px-3 py-3" label="output" value="public proof" /></div>
    </section>

    <section aria-labelledby="timeline-heading" className="border-y border-line py-5">
      <div className="flex items-end justify-between"><div><SectionLabel>Challenge map</SectionLabel><h2 id="timeline-heading" className="display mt-2 text-2xl">A body of work,<br />one day at a time.</h2></div><span className="mb-1 font-mono text-xs text-signal">01—60</span></div>
      <div className="mt-7 overflow-hidden border border-line bg-[#0d0e0c] p-3">
        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-eyebrow text-muted"><span className="size-1.5 bg-signal" /> build sequence <span className="ml-auto font-mono text-signal">live</span></div>
        <div className="relative mt-5 flex items-center justify-between before:absolute before:left-3 before:right-3 before:top-5 before:h-px before:bg-line">
          {timelineDays.map((day) => <ChallengeDayIndicator key={day} day={day} status={day === 1 ? "complete" : day === 2 ? "current" : "locked"} />)}
          <div className="relative z-[1] -mx-2 flex h-10 items-center bg-[#0d0e0c] px-2 font-mono text-sm tracking-[0.28em] text-muted">···</div>
          <div className="relative z-[1] grid size-10 shrink-0 place-items-center border border-dashed border-line bg-[#0d0e0c] font-mono text-xs text-muted">60</div>
        </div>
        <div className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-eyebrow text-muted"><span>Day 01</span><span>Keep shipping</span><span>Day 60</span></div>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">No dramatic before-and-after. Just 60 small, deliberate artifacts that add up to proof you can show.</p>
    </section>

    <section aria-labelledby="loop-heading">
      <SectionLabel>Daily operating loop</SectionLabel>
      <h2 id="loop-heading" className="display mt-2 text-2xl">Make the work<br />visible.</h2>
      <div className="mt-6 border-y border-line">
        {[
          ["01", "BUILD", "Make a focused thing you can finish today."],
          ["02", "COMMIT", "Push the working proof to GitHub."],
          ["03", "SHARE", "Post what you learned on LinkedIn."],
          ["04", "REPEAT", "Return tomorrow and keep the chain intact."],
        ].map(([number, title, description], index) => <div key={title} className="relative grid grid-cols-[2.75rem_1fr] gap-3 border-b border-line py-4 last:border-b-0"><span className="font-mono text-[10px] text-signal">{number}</span><div><h3 className="font-mono text-xs font-semibold tracking-[0.11em] text-paper">{title}</h3><p className="mt-1 text-xs leading-5 text-muted">{description}</p></div>{index < 3 && <ArrowDown size={13} className="absolute bottom-[-7px] left-[15px] z-[1] bg-graphite text-muted" />}</div>)}
      </div>
    </section>

    <section aria-labelledby="proof-heading">
      <SectionLabel>Proof layer</SectionLabel>
      <h2 id="proof-heading" className="display mt-2 text-2xl">Two signals.<br />One public record.</h2>
      <div className="surface-grid mt-6 grid-cols-1 sm:grid-cols-2">
        <Card className="border-0 p-4"><Github size={19} className="text-signal" /><p className="mt-7 font-mono text-xs font-semibold uppercase tracking-[0.11em]">GitHub commit</p><p className="mt-2 text-xs leading-5 text-muted">The code is there. The timestamp is there. The work is traceable.</p><p className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-eyebrow text-signal"><Check size={13} /> Build proof</p></Card>
        <Card className="border-0 p-4"><Linkedin size={19} className="text-signal" /><p className="mt-7 font-mono text-xs font-semibold uppercase tracking-[0.11em]">LinkedIn post</p><p className="mt-2 text-xs leading-5 text-muted">Share the decision, the lesson, and the artifact behind the code.</p><p className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-eyebrow text-signal"><Check size={13} /> Learning proof</p></Card>
      </div>
    </section>

    <section className="border-t border-line pt-7">
      <p className="display max-w-[15ch] text-3xl leading-[0.98]">Consistency is a skill.<br /><span className="text-signal">Evidence makes it visible.</span></p>
      <p className="mt-5 max-w-md text-sm leading-6 text-muted">ABTalks helps college students build a consistent practice and a public record of the work that came from it.</p>
      <Link href="/day/12" className="mt-7 flex h-12 items-center justify-between border border-signal/45 px-4 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-signal transition-colors hover:bg-signal hover:text-graphite">Begin day 01 <ArrowUpRight size={16} /></Link>
    </section>
  </div></AppShell>;
}
