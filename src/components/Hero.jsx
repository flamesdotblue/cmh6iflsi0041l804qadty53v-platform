import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-70 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.25),transparent_60%)]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-14 pb-10">
        <div className="relative order-2 lg:order-1">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">Uptime monitoring that never sleeps</h1>
          <p className="mt-4 text-white/70 text-lg">Keep websites, APIs, and services online. Get instant alerts when something goes wrong. Simple, fast, and reliable—just like it should be.</p>
          <div className="mt-8 flex items-center gap-4">
            <button className="px-5 py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-black font-medium transition">Create free account</button>
            <button className="px-5 py-3 rounded-lg border border-white/15 hover:bg-white/5 transition">Live demo</button>
          </div>
          <div className="mt-6 text-white/50 text-sm">Free plan includes up to 10 monitors • 5 min checks • Email & Slack alerts</div>
        </div>
        <div className="relative h-[420px] md:h-[520px] order-1 lg:order-2">
          <div className="absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0" />
          <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
