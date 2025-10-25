import React from 'react';
import { Rocket, Activity } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-white to-orange-500 group-hover:scale-105 transition" />
          <span className="font-semibold tracking-tight">UpTime Buddy</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition flex items-center gap-2"><Activity size={16}/>Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">Status</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-white/15 hover:bg-white/5 transition text-sm">Sign in</button>
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-black font-medium transition text-sm">
            <Rocket size={16}/> Start free
          </button>
        </div>
      </div>
    </header>
  );
}
