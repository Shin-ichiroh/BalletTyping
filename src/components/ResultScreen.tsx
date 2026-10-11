"use client";

import React from "react";
import { BalletGameStats } from "./PlayScreen";

interface ResultScreenProps {
  stats: BalletGameStats;
  onRestart: () => void;
  onBackToMenu: () => void;
}

function getBalletRanking(stats: BalletGameStats): { title: string; desc: string; cssClass: string } {
  const profit = stats.earnedValue - stats.ticketPrice;
  const kps = stats.speed;
  const acc = stats.accuracy;

  if (profit < 0) {
    if (acc < 75) {
      return { 
        title: "居眠り鑑賞客", 
        desc: "心地よい音楽につられて、うとうとしてしまったようです。まずは短いステップから落ち着いて観劇しましょう！", 
        cssClass: "level-一般" 
      };
    }
    return { 
      title: "ビギナー観客", 
      desc: "チケット代の元は取れませんでしたが、バレエの華やかな美しさに触れる素敵な第一歩となりました。", 
      cssClass: "level-一般" 
    };
  }

  // Profit >= 0
  if (profit < 3000) {
    if (kps > 4) {
      return {
        title: "コール・ド・バレエ",
        desc: "息の合った軽快なスピード！群舞の一体感を思わせる安定した打鍵で元を取りました。",
        cssClass: "level-職人"
      };
    }
    return { 
      title: "熱心なバレエファン", 
      desc: "見事にチケット代以上の鑑賞価値を満喫！客席から熱い拍手を送る立派な観客です。", 
      cssClass: "level-常連" 
    };
  } else if (profit < 8000) {
    return { 
      title: "気高きソリスト", 
      desc: "素晴らしい腕前です！舞台上の主役たちと呼吸を合わせたかのように、難関ステップを次々にクリアしました。", 
      cssClass: "level-大将" 
    };
  } else {
    return { 
      title: "至高のエトワール (最高位プリンシパル)", 
      desc: "神がかり的なタイピング芸術！劇場中が総立ちとなり、嵐のようなブラボーとスタンディングオベーションが鳴り止みません！", 
      cssClass: "level-仙人" 
    };
  }
}

export default function ResultScreen({ stats, onRestart, onBackToMenu }: ResultScreenProps) {
  const profit = stats.earnedValue - stats.ticketPrice;
  const isProfitable = profit >= 0;
  const rank = getBalletRanking(stats);

  return (
    <div className="game-container ballet-theme">
      {/* Radial theater glow */}
      <div className={`bg-glow-radial ${isProfitable ? "bg-glow-gold-rad" : "bg-glow-burgundy-rad"}`} />

      {/* Main Curtain Call Summary Container */}
      <div className="result-card-container ballet-result-container">
        
        <span className="badge ballet-badge" style={{ marginBottom: "0.5rem" }}>
          CURTAIN CALL & RESULT
        </span>
        
        <h2 style={{ color: isProfitable ? "var(--ballet-gold)" : "var(--text-gray)" }}>
          {isProfitable ? "鑑賞料の元を取りました！（大満足）" : "鑑賞料の元を取れませんでした..."}
        </h2>

        {/* Ticket Cost Balance */}
        <div className="result-balance-grid">
          <div className="result-balance-box ballet-box">
            <span className="balance-title">獲得した鑑賞バリュー</span>
            <span className="balance-val ballet-gold">
              {stats.earnedValue.toLocaleString()}円
            </span>
          </div>
          <div className="result-balance-box ballet-box">
            <span className="balance-title">チケット料金 ({stats.seatTierName})</span>
            <span className="balance-val" style={{ color: "var(--text-gray)" }}>
              {stats.ticketPrice.toLocaleString()}円
            </span>
          </div>
          <div className="result-balance-box ballet-box">
            <span className="balance-title">鑑賞満足収支</span>
            <span className={`balance-val ${isProfitable ? "positive" : "negative"}`}>
              {isProfitable ? "+" : ""}
              {profit.toLocaleString()}円
            </span>
          </div>
        </div>

        {/* Accolade Banner */}
        <div className="rank-banner ballet-rank-banner">
          <span className="rank-banner-label ballet-gold">称号ランク</span>
          <h3 className={`rank-banner-title ${rank.cssClass}`}>
            【 {rank.title} 】
          </h3>
          <p className="rank-banner-desc">
            {rank.desc}
          </p>
        </div>

        {/* Performance Statistics */}
        <div className="stats-grid">
          <div className="stats-card ballet-box">
            <span className="stats-card-label">クリア演目・技数</span>
            <span className="stats-card-val">
              {stats.completedTerms}
              <span className="stats-card-val-unit">個</span>
            </span>
          </div>
          <div className="stats-card ballet-box">
            <span className="stats-card-label">打鍵速度</span>
            <span className="stats-card-val ballet-gold">
              {stats.speed.toFixed(2)}
              <span className="stats-card-val-unit">打/秒</span>
            </span>
          </div>
          <div className="stats-card ballet-box">
            <span className="stats-card-label">正しく打ったキー</span>
            <span className="stats-card-val">
              {stats.correctKeys}
              <span className="stats-card-val-unit">打</span>
            </span>
          </div>
          <div className="stats-card ballet-box">
            <span className="stats-card-label">ミスタイプ</span>
            <span className="stats-card-val">
              {stats.misTypes}
              <span className="stats-card-val-unit">回</span>
            </span>
          </div>
          <div className="stats-card ballet-box">
            <span className="stats-card-label">🔥 最大コンボ</span>
            <span className="stats-card-val ballet-gold">
              {stats.maxCombo}
              <span className="stats-card-val-unit">コンボ</span>
            </span>
          </div>
          <div className="stats-card ballet-box">
            <span className="stats-card-label">🎯 最長ミスなし連続</span>
            <span className="stats-card-val">
              {stats.perfectCombo}
              <span className="stats-card-val-unit">問連続</span>
            </span>
          </div>
          <div className="stats-card ballet-box">
            <span className="stats-card-label">⚡ スピードクリア</span>
            <span className="stats-card-val">
              {stats.speedClears}
              <span className="stats-card-val-unit">回</span>
            </span>
          </div>
        </div>

        {/* Accuracy Bar */}
        <div className="accuracy-bar-box ballet-box">
          <div className="acc-label-group">
            <span className="acc-label">正確さ (Accuracy)</span>
            <span className="acc-val">
              {stats.accuracy.toFixed(1)}%
            </span>
          </div>
          <div className="acc-bar-outer">
            <div 
              className="acc-bar-inner ballet-acc-bar"
              style={{ width: `${stats.accuracy}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="result-btn-group">
          <button
            onClick={onRestart}
            className="btn-accent ballet-btn-accent"
          >
            もう一度観劇する
          </button>
          <button
            onClick={onBackToMenu}
            className="btn-secondary ballet-btn-secondary"
          >
            座席・コース選択へ
          </button>
        </div>

      </div>
    </div>
  );
}
