import React from "react";

interface ChandelierProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function Chandelier({
  className = "",
  width = 440,
  height = 210,
}: ChandelierProps) {
  return (
    <div className={`grand-chandelier-container ${className}`}>
      {/* Soft Ambient Radial Halo behind the Chandelier */}
      <div className="chandelier-ambient-glow" />

      <svg
        viewBox="0 0 480 230"
        width={width}
        height={height}
        className="grand-chandelier-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Imperial 24K Gold Gradient */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffdf0" />
            <stop offset="25%" stopColor="#fde047" />
            <stop offset="60%" stopColor="#d97706" />
            <stop offset="85%" stopColor="#92400e" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          {/* Pure Crystal Prismatic Shimmer */}
          <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#f0f9ff" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#bae6fd" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.9" />
          </linearGradient>

          {/* Warm Candle Light Radial Flame */}
          <radialGradient id="candleFlame" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#fef08a" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </radialGradient>

          {/* Candle Atmosphere Blur */}
          <filter id="flameBlur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4.5" />
          </filter>

          {/* Crystal Glow Effect */}
          <filter id="crystalGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        {/* --- Top Suspension Chain (Hanging from Opera Velvet Drapery) --- */}
        <g stroke="url(#goldGrad)">
          {/* Main Central Rod */}
          <line x1="240" y1="0" x2="240" y2="40" strokeWidth="3.5" />
          {/* Side Support Chains */}
          <line x1="234" y1="8" x2="234" y2="35" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="246" y1="8" x2="246" y2="35" strokeWidth="2" strokeDasharray="3 3" />
        </g>

        {/* Top Canopy Ceiling Rosette */}
        <ellipse cx="240" cy="12" rx="20" ry="7" fill="url(#goldGrad)" />
        <ellipse cx="240" cy="11" rx="14" ry="4.5" fill="#fef08a" opacity="0.8" />

        {/* --- Tier 1: Upper Royal Acanthus Crown --- */}
        <ellipse cx="240" cy="42" rx="34" ry="9" fill="url(#goldGrad)" />
        <path
          d="M206,42 Q240,24 274,42 Q258,32 240,34 Q222,32 206,42 Z"
          fill="url(#goldGrad)"
        />
        {/* Crown Top Finial Crystal Diamond */}
        <polygon points="240,26 246,36 240,46 234,36" fill="url(#crystalGrad)" filter="url(#crystalGlow)" />

        {/* --- Crystal Garlands (Draped Strands from Top Crown) --- */}
        <g stroke="url(#crystalGrad)" strokeWidth="2.2" fill="none" opacity="0.88">
          {/* Outermost sweeping strands */}
          <path d="M214,46 Q160,65 110,95" strokeDasharray="4 6" />
          <path d="M266,46 Q320,65 370,95" strokeDasharray="4 6" />
          {/* Mid cascading strands */}
          <path d="M224,48 Q185,80 155,108" strokeDasharray="4 6" />
          <path d="M256,48 Q295,80 325,108" strokeDasharray="4 6" />
          {/* Inner body vertical beads */}
          <path d="M232,50 Q225,95 225,130" strokeDasharray="3 5" />
          <path d="M248,50 Q255,95 255,130" strokeDasharray="3 5" />
        </g>

        {/* --- Tier 2: Grand Chandelier Core & Baluster --- */}
        <ellipse cx="240" cy="94" rx="46" ry="11" fill="url(#goldGrad)" />
        <ellipse cx="240" cy="97" rx="38" ry="8" fill="#451a03" opacity="0.7" />
        {/* Core Jewel Ornament */}
        <circle cx="240" cy="94" r="10" fill="url(#crystalGrad)" filter="url(#crystalGlow)" />
        <circle cx="237" cy="91" r="3" fill="#ffffff" />

        {/* --- Tier 3: Master S-Curved Ornate Candle Arms (Baroque Brass) --- */}
        {/* 1. Far Left Long Arm */}
        <path
          d="M210,96 C160,98 75,80 50,118 C38,142 68,162 90,148"
          stroke="url(#goldGrad)"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* 1. Far Right Long Arm */}
        <path
          d="M270,96 C320,98 405,80 430,118 C442,142 412,162 390,148"
          stroke="url(#goldGrad)"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* 2. Mid-Outer Left Arm */}
        <path
          d="M218,98 C180,105 125,102 118,140 C114,158 140,168 155,156"
          stroke="url(#goldGrad)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        {/* 2. Mid-Outer Right Arm */}
        <path
          d="M262,98 C300,105 355,102 362,140 C366,158 340,168 325,156"
          stroke="url(#goldGrad)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* 3. Inner Left Arm */}
        <path
          d="M228,100 C205,112 180,122 185,160"
          stroke="url(#goldGrad)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* 3. Inner Right Arm */}
        <path
          d="M252,100 C275,112 300,122 295,160"
          stroke="url(#goldGrad)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* --- Crystal Festoons & Lower Swags Between Arms --- */}
        <g stroke="url(#crystalGrad)" strokeWidth="2.5" fill="none" opacity="0.95">
          <path d="M90,148 Q125,178 155,156" strokeDasharray="3 5" />
          <path d="M155,156 Q190,190 240,172" strokeDasharray="4 5" />
          <path d="M240,172 Q290,190 325,156" strokeDasharray="4 5" />
          <path d="M325,156 Q355,178 390,148" strokeDasharray="3 5" />

          {/* Center Royal Cascades */}
          <path d="M185,160 Q215,202 240,206" strokeDasharray="4 5" />
          <path d="M295,160 Q265,202 240,206" strokeDasharray="4 5" />
        </g>

        {/* --- Glowing Candle Holders & Warm Candle Flames --- */}
        {/* Candle 1: Far Left (x=90, y=142) */}
        <g className="candle-group">
          <ellipse cx="90" cy="146" rx="12" ry="4.5" fill="url(#goldGrad)" />
          <rect x="87" y="122" width="6" height="24" rx="1.5" fill="#fffdfa" />
          <line x1="90" y1="122" x2="90" y2="115" stroke="#333" strokeWidth="1.2" />
          <ellipse cx="90" cy="108" rx="6.5" ry="12" fill="url(#candleFlame)" className="flame-flicker-1" />
          <circle cx="90" cy="108" r="18" fill="#fbbf24" opacity="0.32" filter="url(#flameBlur)" className="flame-flicker-1" />
        </g>

        {/* Candle 2: Mid-Left (x=155, y=152) */}
        <g className="candle-group">
          <ellipse cx="155" cy="155" rx="11" ry="4" fill="url(#goldGrad)" />
          <rect x="152" y="132" width="6" height="23" rx="1.5" fill="#fffdfa" />
          <line x1="155" y1="132" x2="155" y2="126" stroke="#333" strokeWidth="1.2" />
          <ellipse cx="155" cy="119" rx="6" ry="11" fill="url(#candleFlame)" className="flame-flicker-2" />
          <circle cx="155" cy="119" r="16" fill="#fbbf24" opacity="0.35" filter="url(#flameBlur)" className="flame-flicker-2" />
        </g>

        {/* Candle 3: Inner-Left (x=195, y=158) */}
        <g className="candle-group">
          <ellipse cx="195" cy="161" rx="10" ry="3.5" fill="url(#goldGrad)" />
          <rect x="192.5" y="140" width="5" height="21" rx="1.5" fill="#fffdfa" />
          <line x1="195" y1="140" x2="195" y2="134" stroke="#333" strokeWidth="1.2" />
          <ellipse cx="195" cy="128" rx="5.5" ry="10" fill="url(#candleFlame)" className="flame-flicker-3" />
          <circle cx="195" cy="128" r="15" fill="#fbbf24" opacity="0.35" filter="url(#flameBlur)" className="flame-flicker-3" />
        </g>

        {/* Candle 4: Center Pinnacle Candle (x=240, y=138) */}
        <g className="candle-group">
          <ellipse cx="240" cy="142" rx="13" ry="4.5" fill="url(#goldGrad)" />
          <rect x="237" y="116" width="6" height="26" rx="1.5" fill="#fffdfa" />
          <line x1="240" y1="116" x2="240" y2="110" stroke="#333" strokeWidth="1.2" />
          <ellipse cx="240" cy="102" rx="7.5" ry="13.5" fill="url(#candleFlame)" className="flame-flicker-1" />
          <circle cx="240" cy="102" r="22" fill="#fbbf24" opacity="0.4" filter="url(#flameBlur)" className="flame-flicker-1" />
        </g>

        {/* Candle 5: Inner-Right (x=285, y=158) */}
        <g className="candle-group">
          <ellipse cx="285" cy="161" rx="10" ry="3.5" fill="url(#goldGrad)" />
          <rect x="282.5" y="140" width="5" height="21" rx="1.5" fill="#fffdfa" />
          <line x1="285" y1="140" x2="285" y2="134" stroke="#333" strokeWidth="1.2" />
          <ellipse cx="285" cy="128" rx="5.5" ry="10" fill="url(#candleFlame)" className="flame-flicker-2" />
          <circle cx="285" cy="128" r="15" fill="#fbbf24" opacity="0.35" filter="url(#flameBlur)" className="flame-flicker-2" />
        </g>

        {/* Candle 6: Mid-Right (x=325, y=152) */}
        <g className="candle-group">
          <ellipse cx="325" cy="155" rx="11" ry="4" fill="url(#goldGrad)" />
          <rect x="322" y="132" width="6" height="23" rx="1.5" fill="#fffdfa" />
          <line x1="325" y1="132" x2="325" y2="126" stroke="#333" strokeWidth="1.2" />
          <ellipse cx="325" cy="119" rx="6" ry="11" fill="url(#candleFlame)" className="flame-flicker-3" />
          <circle cx="325" cy="119" r="16" fill="#fbbf24" opacity="0.35" filter="url(#flameBlur)" className="flame-flicker-3" />
        </g>

        {/* Candle 7: Far Right (x=390, y=142) */}
        <g className="candle-group">
          <ellipse cx="390" cy="146" rx="12" ry="4.5" fill="url(#goldGrad)" />
          <rect x="387" y="122" width="6" height="24" rx="1.5" fill="#fffdfa" />
          <line x1="390" y1="122" x2="390" y2="115" stroke="#333" strokeWidth="1.2" />
          <ellipse cx="390" cy="108" rx="6.5" ry="12" fill="url(#candleFlame)" className="flame-flicker-1" />
          <circle cx="390" cy="108" r="18" fill="#fbbf24" opacity="0.32" filter="url(#flameBlur)" className="flame-flicker-1" />
        </g>

        {/* --- Crystal Pendants (Prisms & Teardrops) --- */}
        {/* Pendants below Far Left */}
        <polygon points="90,150 94,163 90,176 86,163" fill="url(#crystalGrad)" className="crystal-shimmer-1" />
        <circle cx="90" cy="179" r="3.5" fill="url(#crystalGrad)" />

        {/* Pendants below Mid-Left */}
        <polygon points="155,160 159,174 155,188 151,174" fill="url(#crystalGrad)" className="crystal-shimmer-2" />
        <circle cx="155" cy="191" r="3.5" fill="url(#crystalGrad)" />

        {/* Pendants below swag curves */}
        <polygon points="122,168 126,179 122,189 118,179" fill="url(#crystalGrad)" className="crystal-shimmer-3" />
        <polygon points="358,168 362,179 358,189 354,179" fill="url(#crystalGrad)" className="crystal-shimmer-1" />

        {/* Pendants below Mid-Right */}
        <polygon points="325,160 329,174 325,188 321,174" fill="url(#crystalGrad)" className="crystal-shimmer-2" />
        <circle cx="325" cy="191" r="3.5" fill="url(#crystalGrad)" />

        {/* Pendants below Far Right */}
        <polygon points="390,150 394,163 390,176 386,163" fill="url(#crystalGrad)" className="crystal-shimmer-3" />
        <circle cx="390" cy="179" r="3.5" fill="url(#crystalGrad)" />

        {/* --- Center Grand Crystal Drop & Prisms --- */}
        <g id="center-pendant-grand" className="crystal-shimmer-1">
          <ellipse cx="240" cy="176" rx="16" ry="5" fill="url(#goldGrad)" />
          {/* Main Faceted Crystal Finial */}
          <polygon
            points="240,179 252,198 240,224 228,198"
            fill="url(#crystalGrad)"
            stroke="#ffffff"
            strokeWidth="0.8"
            filter="url(#crystalGlow)"
          />
          <line x1="240" y1="179" x2="240" y2="224" stroke="#ffffff" strokeWidth="0.6" opacity="0.7" />
          <line x1="228" y1="198" x2="252" y2="198" stroke="#ffffff" strokeWidth="0.6" opacity="0.7" />
          {/* Bottom sphere drop */}
          <circle cx="240" cy="229" r="4.5" fill="url(#crystalGrad)" stroke="#ffffff" strokeWidth="0.6" />
        </g>
      </svg>
    </div>
  );
}
