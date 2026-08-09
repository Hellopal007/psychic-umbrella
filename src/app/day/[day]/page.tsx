import { ArrowUpRight } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Badge, Button, Card, ChallengeDayIndicator, SectionLabel } from "@/components/ui";
import { dailyChallenges } from "@/lib/mock-data";

export default async function ChallengeDayPage({ params }: { params: Promise<{ day: string }> }) {
  const { day } = await params;
  const challenge = dailyChallenges.find((item) => item.day === Number(day)) ?? dailyChallenges[2];
  return <AppShell><div className="page space-y-8"><div className="flex items-start justify-between"><div><Badge tone="signal">Day {String(challenge.day).padStart(2, "0")}</Badge><h1 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em]">{challenge.title}</h1></div><ChallengeDayIndicator day={challenge.day} status="current" /></div><Card className="p-4"><SectionLabel>Today’s prompt</SectionLabel><p className="mt-3 text-sm leading-6 text-muted">Define an API for a personal project. Document its endpoints, its response shape, and the trade-offs you made.</p></Card><div><SectionLabel>Submission</SectionLabel><p className="mt-2 text-sm leading-6 text-muted">This is just the route foundation. Proof capture and guidance come next.</p></div><Button className="w-full">Open your workspace <ArrowUpRight size={16} /></Button></div></AppShell>;
}
