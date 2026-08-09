export const student = {
  name: "Aarav Mehta",
  handle: "@aaravbuilds",
  college: "VIT Vellore",
  track: "Full-stack developer",
  avatar: "AM",
};

export const challengeProgress = { currentDay: 12, totalDays: 60, completedDays: 11 };
export const currentStreak = { days: 11, best: 11, status: "active" as const };

export const dailyChallenges = [
  { day: 10, title: "Ship a responsive portfolio", status: "complete" as const },
  { day: 11, title: "Build a keyboard-first command menu", status: "complete" as const },
  { day: 12, title: "Design your personal API", status: "current" as const },
  { day: 13, title: "Make a data visualisation", status: "locked" as const },
];

export const githubProof = { repository: "arjunmehta/rest-api", commits: 11, lastCommit: "2h ago", verified: true };
export const linkedinProof = { postUrl: "linkedin.com/posts/arjunmehta", posts: 10, postedAt: "Yesterday", verified: true };

export const achievements = [
  { name: "First commit", unlocked: true },
  { name: "7 day streak", unlocked: true },
  { name: "10 public builds", unlocked: true },
];
