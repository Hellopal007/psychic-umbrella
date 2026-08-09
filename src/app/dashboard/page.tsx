"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Github, Linkedin, Timer, UserRound } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { AppShell } from "@/components/app-shell";
import { Badge, Card, ChallengeDayIndicator, ProgressBar, SectionLabel, StatusIndicator, Telemetry } from "@/components/ui";
import { achievements, challengeProgress, githubProof, linkedinProof, type MockScenario } from "@/lib/mock-data";

const proofDays = [9, 10, 11, 12, 13, 14];

function getScenario(value: string | null): MockScenario {
  return value === "first-day" || value === "missed-day" || value === "empty-profile" ? value : "active";
}

export default function DashboardPage() {
  return <Suspense fallback={<AppShell><div className="page"><p className="telemetry">Loading command center…</p></div></AppShell>}><DashboardContent /></Suspense>;
}

function DashboardContent() {
  const searchParams = useSearchParams();
  const scenario = getScenario(searchParams.get("scenario"));
  const isFirstDay = scenario === "first-day";
  const isMissed = scenario === "missed-day";
  const isEmptyProfile = scenario === "empty-profile";
  const completedDays = isFirstDay ? 0 : challengeProgress.completedDays;
  const day = isFirstDay ? 1 : challengeProgress.currentDay;
  const streakDays = isFirstDay || isMissed ? 0 : 11;
  const completion = ((completedDays / challengeProgress.totalDays) * 100).toFixed(1);

  return <AppShell><div className="page space-y-9">
    <section aria-labelledby="dashboard-heading"><p className="telemetry">Sunday / 20:24 IST</p><h1 id="dashboard-heading" className="display mt-2 text-[2rem] leading-none">Good evening, Arjun.</h1></section>

    <section aria-label="Challenge status" className="border-y border-line py-5">
      <div className="flex items-end justify-between"><div><p className="font-mono text-[2.7rem] font-semibold leading-none tracking-[-0.08em] text-paper">{streakDays}<span className="ml-1 text-signal">D</span></p><p className="mt-2 telemetry">streak / {isMissed ? "paused" : isFirstDay ? "ready" : "active"}</p></div><div className="text-right"><p className="font-mono text-sm font-semibold text-paper">DAY {String(day).padStart(2, "0")} <span className="text-muted">/ 60</span></p><p className="mt-2 telemetry">challenge run</p></div></div>
      {isFirstDay && <p className="mt-4 border-l border-signal pl-3 text-sm text-muted">Every streak starts at zero.</p>}
      {isMissed && <div className="mt-4 border-l border-amber-200/50 pl-3"><p className="text-sm text-paper">Your streak broke yesterday.</p><p className="mt-1 text-xs leading-5 text-muted">Your 11 completed days are still yours.</p></div>}
      <div className="mt-5"><ProgressBar value={completedDays} max={challengeProgress.totalDays} label="challenge completion" /></div>
    </section>

    <section aria-labelledby="mission-heading"><div className="flex items-center justify-between"><SectionLabel>Today&apos;s mission</SectionLabel><Badge tone={isMissed ? "pending" : "signal"}>{isMissed ? "Restart ready" : isFirstDay ? "Day one" : "Ready to ship"}</Badge></div><Card elevated className="mt-3 overflow-hidden"><div className="flex items-center justify-between border-b border-line px-4 py-3"><span className="font-mono text-xs font-semibold text-signal">DAY {String(day).padStart(2, "0")}</span><span className="telemetry">{String(day).padStart(2, "0")} / 60</span></div><div className="p-4"><h2 id="mission-heading" className="display max-w-[11ch] text-[1.9rem] leading-[0.95]">Build your first REST API</h2><p className="mt-4 max-w-[34ch] text-sm leading-6 text-muted">Create a small API with clear resources, useful routes, and thoughtful request and response shapes.</p><div className="mt-6 flex gap-2"><Badge><Timer size={12} /> ~45 min</Badge><Badge>Intermediate</Badge></div></div><Link href="/day/12" className="flex h-12 items-center justify-between border-t border-line bg-signal px-4 text-sm font-semibold text-graphite transition-colors hover:bg-[#edfcae]">{isMissed ? "Restart today" : `Start Day ${day}`} <ArrowUpRight size={17} /></Link></Card></section>

    <section aria-labelledby="chain-heading"><div className="flex items-end justify-between"><div><SectionLabel>Verified history</SectionLabel><h2 id="chain-heading" className="display mt-2 text-2xl">Proof Chain</h2></div><StatusIndicator status={isFirstDay ? "offline" : "verified"} label={isFirstDay ? "awaiting proof" : "sync healthy"} /></div><p className="mt-3 max-w-[36ch] text-xs leading-5 text-muted">Every shipped day leaves two connected signals: work on GitHub and a public learning note on LinkedIn.</p>
      <div className="mt-5 border-y border-line py-4"><div className="relative flex items-start justify-between before:absolute before:left-4 before:right-4 before:top-5 before:h-px before:bg-line">{proofDays.map((proofDay) => { const status = isFirstDay ? "locked" : proofDay < 12 ? "complete" : proofDay === 12 ? "current" : "locked"; return <div key={proofDay} className="relative z-[1] flex flex-col items-center bg-graphite px-0.5"><ChallengeDayIndicator day={proofDay} status={status} /><span className={`mt-2 font-mono text-[10px] ${status === "current" ? "text-signal" : "text-muted"}`}>{String(proofDay).padStart(2, "0")}</span></div>; })}</div></div>
      <div className="surface-grid mt-4 grid-cols-3"><Telemetry className="bg-ink p-3" label="github" value={isFirstDay ? "0 commits" : `${githubProof.commits} commits`} /><Telemetry className="bg-ink p-3" label="linkedin" value={isFirstDay ? "0 posts" : `${linkedinProof.posts} posts`} /><Telemetry className="bg-ink p-3" label="progress" value={`${completion}%`} /></div>
    </section>

    {isEmptyProfile ? <EmptyProfile /> : <section id="profile" aria-labelledby="achievements-heading"><SectionLabel>Unlocked</SectionLabel><h2 id="achievements-heading" className="display mt-2 text-2xl">Small wins, retained.</h2><div className="mt-4 divide-y divide-line border-y border-line">{achievements.filter((achievement) => achievement.unlocked).map((achievement, index) => <div key={achievement.name} className="flex items-center gap-3 py-3"><span className="grid size-6 place-items-center border border-signal/35 bg-signal/[0.07] text-signal"><Check size={13} /></span><p className="font-mono text-xs uppercase tracking-[0.08em] text-paper">{achievement.name}</p><span className="ml-auto font-mono text-[10px] text-muted">0{index + 1}</span></div>)}</div></section>}
  </div></AppShell>;
}

function EmptyProfile() {
  return <section id="profile" aria-labelledby="profile-heading" className="border-y border-line py-5"><div className="flex items-start gap-3"><span className="grid size-10 place-items-center border border-dashed border-line text-muted"><UserRound size={17} /></span><div><SectionLabel>Profile</SectionLabel><h2 id="profile-heading" className="display mt-1 text-xl">Make your work recognisable.</h2></div></div><p className="mt-4 max-w-[36ch] text-sm leading-6 text-muted">Your public profile will take shape as you connect proof and complete challenge days. Nothing is missing—you&apos;re simply at the starting point.</p><div className="mt-5"><StatusIndicator status="offline" label="Profile details not added" /></div></section>;
}
