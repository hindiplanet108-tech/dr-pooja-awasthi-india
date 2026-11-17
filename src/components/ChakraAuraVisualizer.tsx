import React, { useState } from 'react';
import { CHAKRAS_DATA, ChakraItem } from '../data/chakrasData';
import { Volume2, ShieldCheck, Check } from 'lucide-react';

interface ChakraAuraVisualizerProps {
  onSelectChakraForConsultation: (chakraName: string) => void;
}

export const ChakraAuraVisualizer: React.FC<ChakraAuraVisualizerProps> = ({
  onSelectChakraForConsultation
}) => {
  const [activeChakra, setActiveChakra] = useState<ChakraItem>(CHAKRAS_DATA[3]);
  const [pulseActive, setPulseActive] = useState(false);

  const triggerMantraVibration = (ch: ChakraItem) => {
    setActiveChakra(ch);
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 1200);
  };

  return (
    <div className="rounded-3xl bg-white border border-[#E6DFD3] p-6 sm:p-10 shadow-lg text-[#1E162B] relative overflow-hidden">
      {/* Subtle passive aura glow in light theme */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 transition-all duration-700 pointer-events-none"
        style={{ backgroundColor: activeChakra.color }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: 7-Chakra Energy Pillar */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="text-center mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#522B8A]">
              Interactive Pranic Aura
            </span>
            <p className="text-xs text-[#5D556A] mt-0.5">
              Select a chakra to align its subtle vibrational field
            </p>
          </div>

          <div className="relative py-4 flex flex-col items-center gap-3">
            <div className="absolute top-6 bottom-6 w-1 bg-gradient-to-b from-[#7C3AED] via-[#059669] to-[#DC2626] rounded-full opacity-35" />

            {[...CHAKRAS_DATA].reverse().map((ch) => {
              const isSelected = activeChakra.id === ch.id;

              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => triggerMantraVibration(ch)}
                  className={`relative z-10 flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-300 group cursor-pointer ${
                    isSelected
                      ? 'bg-white scale-105 shadow-md border-[#522B8A]'
                      : 'bg-[#FAF8F5] hover:bg-white border-[#E6DFD3] hover:scale-[1.02]'
                  }`}
                  style={{
                    boxShadow: isSelected ? `0 6px 20px ${ch.color}30` : undefined
                  }}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                      isSelected ? 'scale-110 animate-pulse' : 'group-hover:scale-105'
                    }`}
                    style={{ backgroundColor: ch.color }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <span className="font-cinzel text-xs font-bold tracking-wide text-[#1E162B]">
                    {ch.name}
                  </span>

                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full border bg-white"
                    style={{
                      borderColor: `${ch.color}60`,
                      color: ch.color,
                    }}
                  >
                    {ch.healingMantra}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Aura Field */}
        <div className="lg:col-span-7 space-y-6 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E6DFD3]">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#E6DFD3] pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: activeChakra.color }}
                />
                <span className="text-xs font-bold uppercase tracking-widest text-[#7A5311]">
                  {activeChakra.sanskrit}
                </span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1E162B]">
                {activeChakra.name} ({activeChakra.name_hi})
              </h3>
            </div>

            <div
              className={`p-3 rounded-xl border flex items-center gap-2 transition-all ${
                pulseActive
                  ? 'bg-[#522B8A] text-white border-[#522B8A] scale-105 shadow-md'
                  : 'bg-white text-[#1E162B] border-[#E6DFD3]'
              }`}
            >
              <Volume2 size={18} className={pulseActive ? 'animate-bounce' : 'text-[#522B8A]'} />
              <div className="text-left">
                <div className={`text-[10px] uppercase font-bold tracking-wider ${pulseActive ? 'text-white/85' : 'text-[#5D556A]'}`}>
                  Mantra Resonance
                </div>
                <div className="font-cinzel text-xs font-bold">
                  {activeChakra.healingMantra}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#4A4356]">
            <div className="p-3 rounded-xl bg-white border border-[#E6DFD3]">
              <span className="text-[10px] text-[#7A5311] font-bold uppercase block">Location</span>
              <span className="font-semibold text-[#1E162B]">{activeChakra.location}</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E6DFD3]">
              <span className="text-[10px] text-[#7A5311] font-bold uppercase block">Cosmic Element</span>
              <span className="font-semibold text-[#1E162B]">{activeChakra.element}</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E6DFD3] col-span-2 sm:col-span-1">
              <span className="text-[10px] text-[#7A5311] font-bold uppercase block">Vibrational Hue</span>
              <span className="font-mono font-bold" style={{ color: activeChakra.color }}>
                {activeChakra.color}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                <Check size={14} />
                <span>When Balanced</span>
              </div>
              <p className="text-xs text-emerald-950/85 leading-relaxed">
                {activeChakra.balancedState}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-800 uppercase tracking-wide">
                <ShieldCheck size={14} />
                <span>Signs of Blockage</span>
              </div>
              <p className="text-xs text-rose-950/85 leading-relaxed">
                {activeChakra.blockedSigns}
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#5D556A]">
              Dr. Pooja Awasthi provides custom distance Chakra Healing & Aura Alignment.
            </p>
            <button
              type="button"
              onClick={() => onSelectChakraForConsultation(`${activeChakra.name} Alignment & Healing`)}
              className="w-full sm:w-auto h-10 px-5 bg-[#522B8A] hover:bg-[#412070] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap shadow-sm cursor-pointer"
            >
              Align {activeChakra.name} (<span className="font-rupee font-black tracking-tight">₹5,100</span>)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
