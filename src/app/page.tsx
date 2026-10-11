"use client";

import React, { useState } from "react";
import GameMenu from "../components/GameMenu";
import PlayScreen, { BalletGameStats } from "../components/PlayScreen";
import ResultScreen from "../components/ResultScreen";
import { SeatTier } from "../utils/balletData";

type Scene = "MENU" | "PLAYING" | "RESULT";

export default function Home() {
  const [scene, setScene] = useState<Scene>("MENU");
  const [selectedTier, setSelectedTier] = useState<SeatTier | null>(null);
  const [stats, setStats] = useState<BalletGameStats | null>(null);

  const handleStartGame = (tier: SeatTier) => {
    setSelectedTier(tier);
    setScene("PLAYING");
  };

  const handleGameEnd = (gameStats: BalletGameStats) => {
    setStats(gameStats);
    setScene("RESULT");
  };

  const handleBackToMenu = () => {
    setScene("MENU");
    setSelectedTier(null);
  };

  const handleRestart = () => {
    if (selectedTier) {
      setScene("PLAYING");
    } else {
      setScene("MENU");
    }
  };

  return (
    <main>
      {scene === "MENU" && <GameMenu onStartGame={handleStartGame} />}
      
      {scene === "PLAYING" && selectedTier && (
        <PlayScreen 
          seatTier={selectedTier} 
          onGameEnd={handleGameEnd} 
          onBackToMenu={handleBackToMenu}
        />
      )}
      
      {scene === "RESULT" && stats && (
        <ResultScreen 
          stats={stats} 
          onRestart={handleRestart} 
          onBackToMenu={handleBackToMenu}
        />
      )}
    </main>
  );
}
