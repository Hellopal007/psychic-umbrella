import { AppShell } from "@/components/app-shell";
import { Badge, Card, ProgressBar, SectionLabel, StreakIndicator } from "@/components/ui";
import { challengeProgress, currentStreak, student } from "@/lib/mock-data";

export default function DashboardPage() {
  return <AppShell><div className="page space-y-8"><div><Badge>Student profile</Badge><h1 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">Your build log.</h1><p className="mt-2 text-sm text-muted">{student.college} · {student.track}</p></div><Card className="p-4"><SectionLabel>Day {challengeProgress.currentDay} of {challengeProgress.totalDays}</SectionLabel><p className="mt-2 font-mono text-3xl font-semibold">{Math.round((challengeProgress.completedDays / challengeProgress.totalDays) * 100)}%</p><div className="mt-5"><ProgressBar value={challengeProgress.completedDays} /></div></Card><Card className="p-4"><StreakIndicator days={currentStreak.days} /><p className="mt-5 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-eyebrow text-muted">Personal best: {currentStreak.best} days</p></Card></div></AppShell>;
}
