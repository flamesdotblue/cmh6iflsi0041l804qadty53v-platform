import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import PricingPlans from './components/PricingPlans';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <PricingPlans />
        <section className="py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Start monitoring in minutes</h2>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">Create your first monitor, set alerts, and relax. We’ll keep an eye on your uptime 24/7.</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="#pricing" className="px-5 py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-black font-medium transition">Get Started</a>
              <a href="#features" className="px-5 py-3 rounded-lg border border-white/15 hover:bg-white/5 transition">See Features</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-white to-orange-500" />
            <span className="text-white/80">UpTime Buddy</span>
          </div>
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} UpTime Buddy. Not affiliated with UptimeRobot.</p>
        </div>
      </footer>
    </div>
  );
}
