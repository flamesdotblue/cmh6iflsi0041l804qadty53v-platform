import React from 'react';
import { Activity, Bell, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Global uptime checks',
    desc: 'Ping from multiple regions to avoid false positives and verify true downtime.',
  },
  {
    icon: Bell,
    title: 'Instant smart alerts',
    desc: 'Email, Slack, and webhooks with incident aggregation to reduce noise.',
  },
  {
    icon: Shield,
    title: 'SSL & domain expiry',
    desc: 'Track certificate health and domain expiration with proactive reminders.',
  },
  {
    icon: Clock,
    title: 'Performance insights',
    desc: 'See response times, trends, and Apdex-style insights over any timeframe.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Everything you need to stay online</h2>
          <a href="#" className="text-sm text-white/70 hover:text-white">View docs →</a>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative group rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-5">
              <div className="h-10 w-10 rounded-md flex items-center justify-center bg-gradient-to-br from-white/80 to-orange-500/80 text-black">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/0 group-hover:ring-white/10 pointer-events-none" />
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 rounded-xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-transparent">
            <h4 className="text-xl font-medium">Status pages that build trust</h4>
            <p className="mt-2 text-white/70">Public or private status pages with incident timelines, uptime history, and custom branding. Share transparency without exposing your stack.</p>
            <div className="mt-4 aspect-[16/9] rounded-lg border border-white/10 bg-black/50" />
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-transparent">
            <h4 className="text-xl font-medium">Multi-channel alerts</h4>
            <p className="mt-2 text-white/70">Email, Slack, Teams, Discord, PagerDuty, webhooks, and more. Configure escalation rules by severity and schedule.</p>
            <div className="mt-4 h-40 rounded-lg border border-white/10 bg-black/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
