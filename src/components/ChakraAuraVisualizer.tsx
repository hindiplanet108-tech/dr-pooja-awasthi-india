import React, { useState } from 'react';
import { CHAKRAS_DATA, ChakraItem } from '../data/chakrasData';
import { Sparkles, Volume2, ShieldCheck, Check } from 'lucide-react';

interface ChakraAuraVisualizerProps {
  onSelectChakraForConsultation: (chakraName: string) => void;
}

export const ChakraAuraVisualizer: React.FC<ChakraAuraVisualizerProps> = ({
  onSelectChakraForConsultation
}) => {
  const [activeChakra, setActiveChakra] = useState<ChakraItem>(CHAKRAS_DATA[3]); // Heart chakra by default
  const [pulseActive, setPulseActive] = useState(false);

  const triggerMantraVibration = (ch: ChakraItem) => {
    setActiveChakra(ch);
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 1200);
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#1c0f26] via-[#24152F] to-[#140b1b] border border-[#D6B574]/40 p-6 sm:p-10 shadow-2xl text-white relative overflow-hidden">
      {/* Dynamic ambient background glow tied to active chakra color */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 transition-all duration-700 pointer-events-none"
        style={{ backgroundColor: activeChakra.color }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Interactive 7-Chakra Energy Pillar & Rotating Sacred Circles */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="text-center mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D6B574]">
              Interactive Pranic Aura
            </span>
            <p className="text-xs text-[#EAE2F4]/70 mt-0.5">
              Select a chakra to align its subtle vibrational field
            </p>
          </div>

          {/* Vertical Energy Axis */}
          <div className="relative py-4 flex flex-col items-center gap-3">
            {/* Pranic central cord line with subtle pulse */}
            <div className="absolute top-6 bottom-6 w-1 bg-gradient-to-b from-[#7C3AED] via-[#059669] to-[#DC2626] rounded-full opacity-60" />

            {/* Reverse loop so Crown is at top and Root at bottom */}
            {[...CHAKRAS_DATA].reverse().map((ch) => {
              const isSelected = activeChakra.id === ch.id;

              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => triggerMantraVibration(ch)}
                  className={`relative z-10 flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-300 group ${
                    isSelected
                      ? 'bg-white/15 scale-105 shadow-lg border-white/60'
                      : 'bg-[#24152F]/90 hover:bg-white/10 border-white/20 hover:scale-102'
                  }`}
                  style={{
                    boxShadow: isSelected ? `0 0 25px ${ch.color}80` : undefined
                  }}
                >
                  {/* Glowing Chakra Orb */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                      isSelected ? 'scale-110 animate-pulse' : 'group-hover:scale-105'
                    }`}
                    style={{ backgroundColor: ch.color }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white/90" />
                  </div>

                  {/* Label */}
                  <span className="font-cinzel text-xs font-semibold tracking-wide text-white">
                    {ch.name}
                  </span>

                  {/* Seed Mantra Tag */}
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                    style={{
                      borderColor: `${ch.color}60`,
                      color: ch.color,
                      backgroundColor: `${ch.color}20`
                    }}
                  >
                    {ch.healingMantra}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Aura Field & Real-Time Alignment Guide */}
        <div className="lg:col-span-7 space-y-6 bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-md">
          {/* Header of Active Chakra */}
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: activeChakra.color }}
                />
                <span className="text-xs font-bold uppercase tracking-widest text-[#D6B574]">
                  {activeChakra.sanskrit}
                </span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                {activeChakra.name} ({activeChakra.name_hi})
              </h3>
            </div>

            {/* Simulated Sacred Mantra Chanting Button */}
            <div
              className={`p-3 rounded-xl border flex items-center gap-2 transition-all ${
                pulseActive
                  ? 'bg-[#D6B574] text-[#24152F] border-[#D6B574] scale-105'
                  : 'bg-white/10 text-white border-white/20'
              }`}
            >
              <Volume2 size={18} className={pulseActive ? 'animate-bounce' : ''} />
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold tracking-wider">
                  Mantra Resonance
                </div>
                <div className="font-cinzel text-xs font-bold">
                  {activeChakra.healingMantra}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#EAE2F4]/80">
            <div className="p-2.5 rounded-lg bg-black/30 border border-white/5">
              <span className="text-[10px] text-[#D6B574] uppercase block">Location</span>
              <span className="font-medium text-white">{activeChakra.location}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/30 border border-white/5">
              <span className="text-[10px] text-[#D6B574] uppercase block">Cosmic Element</span>
              <span className="font-medium text-white">{activeChakra.element}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/30 border border-white/5 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-[#D6B574] uppercase block">Vibrational Hue</span>
              <span className="font-mono font-medium" style={{ color: activeChakra.color }}>
                {activeChakra.color}
              </span>
            </div>
          </div>

          {/* State descriptions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wide">
                <Check size={14} />
                <span>When Balanced</span>
              </div>
              <p className="text-xs text-[#EAE2F4]/90 leading-relaxed">
                {activeChakra.balancedState}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wide">
                <ShieldCheck size={14} />
                <span>Signs of Blockage</span>
              </div>
              <p className="text-xs text-[#EAE2F4]/90 leading-relaxed">
                {activeChakra.blockedSigns}
              </p>
            </div>
          </div>

          {/* Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#EAE2F4]/70">
              Dr. Pooja Awasthi provides custom distance Chakra Healing & Aura Alignment.
            </p>
            <button
              type="button"
              onClick={() => onSelectChakraForConsultation(`${activeChakra.name} Alignment & Healing`)}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#D6B574] hover:bg-[#e4ca8c] text-[#24152F] text-xs font-bold uppercase tracking-wider rounded-md transition-all whitespace-nowrap shadow-md hover:scale-[1.02]"
            >
              Align {activeChakra.name} (₹5,100)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
