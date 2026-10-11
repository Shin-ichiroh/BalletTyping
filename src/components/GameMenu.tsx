"use client";

import React, { useState, useEffect } from "react";
import { SeatTier, seatTiers } from "../utils/balletData";
import { resumeAudioContext } from "../utils/sound";
import Chandelier from "./Chandelier";

interface GameMenuProps {
  onStartGame: (tier: SeatTier) => void;
}

export default function GameMenu({ onStartGame }: GameMenuProps) {
  const [selectedIdx, setSelectedIdx] = useState<number>(1); // Default to A-Seat (index 1)

  const handleStart = () => {
    resumeAudioContext();
    onStartGame(seatTiers[selectedIdx] ?? seatTiers[0]);
  };

  const handleSelect = (idx: number) => {
    setSelectedIdx(idx);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        handleStart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIdx]);

  return (
    <div className="game-container grand-theater-bg">
      {/* Grand Stage Velvet Drapery (Top fringe & side curtains framing the hall) */}
      <div className="grand-curtain-drape-top" />
      <div className="grand-curtain-side-left" />
      <div className="grand-curtain-side-right" />

      {/* Radiant Colorful Theater Lights (Emerald, Ruby Rose & Sapphire) */}
      <div className="bg-glow-emerald" />
      <div className="bg-glow-rose" />
      <div className="bg-glow-sapphire" />

      {/* Grand Crystal Chandelier (Suspended luxuriously from top) */}
      <Chandelier width={350} height={140} />

      {/* Header Area */}
      <div className="menu-header theater-header-box" style={{ position: "relative", zIndex: 10, marginTop: "0", marginBottom: "0.5rem" }}>
        
        {/* Royal Crest / Pre-title */}
        <div className="theater-pre-title">
          <span className="theater-pre-crest">⚜️</span>
          <span>THE GRAND OPERA & BALLET</span>
          <span className="theater-pre-crest">⚜️</span>
        </div>

        {/* Grand Hero English Title (Cinzel Decorative) */}
        <h1 className="grand-title-en">
          <span>BALLET</span>
          <span className="title-gold-star">✦</span>
          <span>DA</span>
        </h1>

        {/* Harmonized Japanese Title & Accents */}
        <div className="theater-jp-title-line">
          <div className="theater-jp-line-decor" />
          <h2 className="theater-jp-title">バレエ打</h2>
          <div className="theater-jp-line-decor" />
        </div>

        {/* Classical Theater Subtitle */}
        <div className="grand-subtitle">
          〜 The Grand Classical Theater 〜
        </div>

        <div className="badge ballet-badge" style={{ marginBottom: "0.4rem", padding: "0.15rem 0.65rem", fontSize: "0.7rem" }}>
          👑 クラシックバレエ鑑賞タイピング 〜 グランシアター 〜 🩰
        </div>

        <p className="desc-muted" style={{ maxWidth: "36rem", margin: "0 auto 0.25rem auto", lineHeight: 1.45, fontSize: "0.82rem" }}>
          華麗なるオーケストラの調べ、スポットライトに包まれる主役ダンサーたち。<br />
          名作の幕や登場人物を正確にタイピングし、チケット代以上の大喝采を勝ち取りましょう！
        </p>
      </div>

      {/* Colorful Jewel Seat Tier Cards */}
      <div className="course-grid" style={{ position: "relative", zIndex: 10 }}>
        {seatTiers.map((tier, idx) => {
          const isSelected = selectedIdx === idx;
          const isRecommended = tier.recommended;
          
          // Distinct color themes per tier
          const cardClass = idx === 0 
            ? "seat-card-b" 
            : idx === 1 
            ? "seat-card-a" 
            : "seat-card-s";

          const tagClass = idx === 0 
            ? "tag-emerald" 
            : idx === 1 
            ? "tag-rose" 
            : "tag-sapphire";

          const tierIcon = idx === 0 ? "🧚" : idx === 1 ? "🌹" : "👑";
          const seatTypeName = idx === 0 ? "BALCONY / 2階バルコニー席" : idx === 1 ? "ORCHESTRA / 1階特等S席" : "ROYAL VIP GALA / 貴賓特別席";

          return (
            <div
              key={tier.id}
              onClick={() => handleSelect(idx)}
              className={`course-card ${cardClass} ${isSelected ? "selected" : ""}`}
              style={{ cursor: "pointer" }}
            >
              {isRecommended && (
                <div className="recommended-badge badge-rose">
                  🌟 人気ナンバーワン指定席
                </div>
              )}
              
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                  <span className={`card-tag ${tagClass}`}>
                    {seatTypeName}
                  </span>
                  <span style={{ fontSize: "1.5rem" }}>{tierIcon}</span>
                </div>
                
                <h3 className="card-title" style={{ fontSize: "1.35rem" }}>
                  {tier.name}
                </h3>
                
                <p className="card-meta" style={{ color: "#fef08a", fontWeight: "bold" }}>
                  公演時間: {tier.timeLimit}秒 ／ チケット料金: {tier.ticketPrice.toLocaleString()}円
                </p>
                
                <p className="card-body" style={{ color: "#e2e8f0" }}>
                  {tier.description}
                </p>
              </div>

              <div className="card-footer" style={{ borderTopColor: "rgba(255, 255, 255, 0.1)" }}>
                <span className="card-footer-label" style={{ color: "#cbd5e1" }}>出題フレーズ文字数</span>
                <span className="card-footer-val" style={{ color: "#fef08a", fontWeight: "bold" }}>
                  {tier.minLen} 〜 {tier.maxLen}文字
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Start Action */}
      <div className="action-box" style={{ position: "relative", zIndex: 10, marginTop: "0.65rem" }}>
        <button
          onClick={handleStart}
          className="grand-start-btn"
        >
          <span className="floating-sparkle" style={{ marginRight: "0.5rem" }}>✨</span>
          開演・客席へ入場する (Space)
          <span className="floating-sparkle" style={{ marginLeft: "0.5rem" }}>✨</span>
        </button>
        <p className="warning-hint" style={{ color: "#cbd5e1", marginTop: "0.25rem" }}>
          ※ 劇場の生演奏・シンセサイザー効果音が響きます。音量にご注意の上、大喝采のカーテンコールをお楽しみください。
        </p>
      </div>
    </div>
  );
}
