import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    caption: 'For personal projects',
    highlight: false,
    features: [
      '10 monitors',
      '5 min check interval',
      'Email alerts',
      'Public status page',
    ],
  },
  {
    name: 'Pro',
    price: '$12',
    caption: 'Perfect for startups',
    highlight: true,
    features: [
      '50 monitors',
      '1 min check interval',
      'Slack & webhook alerts',
      'SSL & domain monitoring',
      'Status page analytics',
    ],
  },
  {
    name: 'Business',
    price: '$39',
    caption: 'For growing teams',
    highlight: false,
    features: [
      '200 monitors',
      '30 sec checks',
      'SLA reporting',
      'On-call schedules',
      'Priority support',
    ],
  },
];

export default function PricingPlans() {
  return (
    <section id="pricing" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Transparent pricing</h2>
          <p className="mt-3 text-white/70">Simple plans that grow with you. Change or cancel anytime.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                'relative rounded-2xl border p-6 flex flex-col ' +
                (plan.highlight
                  ? 'border-orange-400/40 bg-gradient-to-b from-white/10 to-white/[0.02] shadow-[0_0_0_1px_rgba(249,115,22,0.2),0_30px_60px_-15px_rgba(249,115,22,0.25)]'
                  : 'border-white/10 bg-white/[0.03]')
              }
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-6 px-2 py-1 text-xs rounded-md bg-orange-500 text-black font-medium">Most popular</div>
              )}
              <div>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-white/60 text-sm mt-1">{plan.caption}</p>
              </div>
              <div className="mt-6">
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className="text-white/50 ml-1">/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-orange-500 text-black flex items-center justify-center shrink-0">
                      <Check size={14} />
                    </div>
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button
                  className={
                    'w-full px-4 py-2 rounded-lg font-medium transition ' +
                    (plan.highlight ? 'bg-orange-500 hover:bg-orange-400 text-black' : 'border border-white/15 hover:bg-white/5')
                  }
                >
                  {plan.highlight ? 'Start Pro' : 'Choose plan'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
