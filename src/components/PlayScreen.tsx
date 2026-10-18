"use client";

import React, { useState, useEffect, useRef } from "react";
import { SeatTier, BalletWord, getWordsForSeatTier } from "../utils/balletData";
import { TypingEngine } from "../utils/typingEngine";
import { playKeySound, playMissSound, playClearSound, playBonusSound, playSpeedClearSound, playPerfectSound } from "../utils/sound";

interface PlayScreenProps {
  seatTier: SeatTier;
  onGameEnd: (stats: BalletGameStats) => void;
  onBackToMenu: () => void;
}

export interface BalletGameStats {
  seatTierName: string;
  ticketPrice: number;
  earnedValue: number;
  correctKeys: number;
  misTypes: number;
  totalKeys: number;
  accuracy: number;
  completedTerms: number;
  speed: number; // keys per second
  maxCombo: number;        // 最大コンボ数
  perfectCombo: number;    // 最大ミスなし連続クリア数
  speedClears: number;     // スピードクリア回数
}

export function getBalletIcon(word: BalletWord | null): string {
  if (!word) return "🩰";
  const kanji = word.kanji;

  // Specific characters, roles and scene motifs
  if (kanji.includes("オデット") || kanji.includes("白鳥")) return "🦢";
  if (kanji.includes("オディール") || kanji.includes("黒鳥")) return "🦅";
  if (kanji.includes("ジークフリート") || kanji.includes("デジレ") || kanji.includes("アルブレヒト") || kanji.includes("ジャン・ド・ブリエンヌ") || kanji.includes("リュシアン") || kanji.includes("王子")) return "🤴";
  if (kanji.includes("オーロラ姫") || kanji.includes("フロリナ") || kanji.includes("姫")) return "👸";
  if (kanji.includes("くるみ割り") || kanji.includes("ドロッセルマイヤー")) return "💂";
  if (kanji.includes("金平糖")) return "🍬";
  if (kanji.includes("クリスマス")) return "🎄";
  if (kanji.includes("ねずみ") || kanji.includes("狼")) return "🐺";
  if (kanji.includes("決闘") || kanji.includes("剣") || kanji.includes("海賊") || kanji.includes("コンラッド") || kanji.includes("アリ")) return "⚔️";
  if (kanji.includes("カラボス") || kanji.includes("ロットバルト") || kanji.includes("カシチェイ") || kanji.includes("悪魔") || kanji.includes("魔王")) return "👿";
  if (kanji.includes("リラの精") || kanji.includes("仙女") || kanji.includes("魔法")) return "🪄";
  if (kanji.includes("道化師")) return "🃏";
  if (kanji.includes("キトリ") || kanji.includes("エスパーダ") || kanji.includes("ドン・キホーテ") || kanji.includes("バジル")) return "💃";
  if (kanji.includes("扇子") || kanji.includes("メルセデス")) return "🪭";
  if (kanji.includes("風車")) return "🌬️";
  if (kanji.includes("キューピッド") || kanji.includes("愛の妖精")) return "🏹";
  if (kanji.includes("ジゼル") || kanji.includes("ミルタ") || kanji.includes("花束")) return "💐";
  if (kanji.includes("ウィリ") || kanji.includes("シルフィード") || kanji.includes("ジェームズ")) return "🧚";
  if (kanji.includes("湖畔") || kanji.includes("深夜") || kanji.includes("墓場") || kanji.includes("月")) return "🌙";
  if (kanji.includes("ぶどう") || kanji.includes("収穫祭")) return "🍇";
  if (kanji.includes("ロミオ") || kanji.includes("ジュリエット") || kanji.includes("キャピュレット") || kanji.includes("マキューシオ") || kanji.includes("ティボルト")) return "🎭";
  if (kanji.includes("バルコニー") || kanji.includes("王宮") || kanji.includes("舞踏会") || kanji.includes("宮廷")) return "🏰";
  if (kanji.includes("シンデレラ") || kanji.includes("ガラスの靴")) return "👠";
  if (kanji.includes("火の鳥")) return "🔥";
  if (kanji.includes("青い鳥")) return "🐦";
  if (kanji.includes("コッペリア") || kanji.includes("からくり人形")) return "🪆";
  if (kanji.includes("コッペリウス") || kanji.includes("博士")) return "📜";
  if (kanji.includes("スワニルダ") || kanji.includes("クララ") || kanji.includes("村娘")) return "👧";
  if (kanji.includes("鐘")) return "🔔";
  if (kanji.includes("バヤデール") || kanji.includes("ニキヤ") || kanji.includes("寺院")) return "🛕";
  if (kanji.includes("神像") || kanji.includes("ブロンズ")) return "🌟";
  if (kanji.includes("カルメン")) return "🌹";
  if (kanji.includes("ライモンダ") || kanji.includes("ティアラ") || kanji.includes("冠")) return "👑";
  if (kanji.includes("猫")) return "🐱";
  if (kanji.includes("針") || kanji.includes("糸つむぎ")) return "🪡";
  if (kanji.includes("オーケストラ") || kanji.includes("葦笛") || kanji.includes("ワルツ")) return "🎻";
  if (kanji.includes("チュチュ") || kanji.includes("パニエ") || kanji.includes("ボディス") || kanji.includes("スカート") || kanji.includes("ジョーゼット") || kanji.includes("アームカバー")) return "👗";
  if (kanji.includes("タイツ") || kanji.includes("レッグウォーマー")) return "🩰";
  if (kanji.includes("メイク") || kanji.includes("ドーラン") || kanji.includes("アイライン") || kanji.includes("まつげ") || kanji.includes("ハイライト") || kanji.includes("シェーディング") || kanji.includes("おしろい") || kanji.includes("ダブルライン") || kanji.includes("ラメ")) return "💄";
  if (kanji.includes("シニヨン") || kanji.includes("ヘアネット") || kanji.includes("マトメージュ") || kanji.includes("ピン")) return "💇‍♀️";
  if (kanji.includes("松やに") || kanji.includes("ニス") || kanji.includes("トウパッド") || kanji.includes("リボン")) return "🩰";
  if (kanji.includes("フェッテ") || kanji.includes("ピルエット") || kanji.includes("ジュテ") || kanji.includes("跳躍") || kanji.includes("カブリオール") || kanji.includes("アントルシャ") || kanji.includes("ブリゼ") || kanji.includes("パディシャ")) return "✨";
  if (kanji.includes("バリエーション") || kanji.includes("ヴァリエーション") || kanji.includes("サタネラ") || kanji.includes("パキータ") || kanji.includes("タリスマン") || kanji.includes("エスメラルダ") || kanji.includes("クラシック") || kanji.includes("アダージョ")) return "🌟";

  return "🩰";
}

export interface RealisticDancerInfo {
  imageName: string;
  altText: string;
  characterType:
    | "odette"
    | "odile"
    | "kitri"
    | "aurora"
    | "prince"
    | "giselle"
    | "bluebird"
    | "sugarplum"
    | "nikia"
    | "firebird"
    | "lilac_fairy"
    | "lise"
    | "graduation_ball"
    | "nutcracker_doll"
    | "mouse_king"
    | "coppelia_doll"
    | "pointe_shoes"
    | "royal_tiara"
    | "spanish_fan"
    | "classical_tutu"
    | "violin_bouquet";
}

export function getRealisticDancer(word: BalletWord | null): RealisticDancerInfo {
  if (!word) {
    return {
      imageName: "odette.jpg",
      altText: "白鳥オデット",
      characterType: "odette",
    };
  }
  const kanji = word.kanji;
  const cat = word.category || "";

  // ──────────────────────────────────────────────────────────────
  // 🌟 特別優先キャラクター: リラの精・リーズ・卒業舞踏会
  // ──────────────────────────────────────────────────────────────

  // 🪄 リラの精 (Lilac Fairy & Fairies of The Sleeping Beauty)
  if (
    kanji.includes("リラの精") ||
    kanji.includes("仙女") ||
    kanji.includes("優しさの精") ||
    kanji.includes("勇気の精") ||
    kanji.includes("鷹揚の精") ||
    kanji.includes("のんきなカナリア")
  ) {
    return {
      imageName: "lilac_fairy.jpg",
      altText: "リラの精 (眠れる森の美女)",
      characterType: "lilac_fairy",
    };
  }

  // 🎀 リーズ (Lise - La Fille mal gardée / リーズの結婚)
  if (
    kanji.includes("リーズ") ||
    kanji.includes("フィーユ・マル・ガルデ") ||
    kanji.includes("無益な用心") ||
    kanji.includes("コーラス") ||
    kanji.includes("シモーヌ") ||
    kanji.includes("木靴") ||
    kanji.includes("麦穂") ||
    kanji.includes("ピンクのリボン") ||
    kanji.includes("アラン")
  ) {
    return {
      imageName: "lise.jpg",
      altText: "リーズ (ラ・フィーユ・マル・ガルデ)",
      characterType: "lise",
    };
  }

  // 🎓 卒業舞踏会 (Graduation Ball)
  if (
    kanji.includes("卒業舞踏会") ||
    kanji.includes("女学生") ||
    kanji.includes("無窮動") ||
    kanji.includes("鼓手") ||
    kanji.includes("老将軍") ||
    kanji.includes("女学院長")
  ) {
    return {
      imageName: "graduation_ball.jpg",
      altText: "卒業舞踏会",
      characterType: "graduation_ball",
    };
  }

  // ──────────────────────────────────────────────────────────────
  // 🎭 A. 非ダンサーの象徴キャラクター・代表的な舞台小道具 (Props & Dolls)
  // ──────────────────────────────────────────────────────────────

  // 1. 👑 ねずみの王様 (Mouse King & Battles)
  if (kanji.includes("ねずみ") || kanji.includes("狼") || kanji.includes("赤ずきん")) {
    return {
      imageName: "mouse_king.jpg",
      altText: "ねずみの王様",
      characterType: "mouse_king",
    };
  }

  // 2. 💂 くるみ割り人形 (Nutcracker Soldier Doll)
  if (kanji.includes("くるみ割り") || kanji.includes("ドロッセルマイヤー") || kanji.includes("クリスマス") || kanji.includes("兵隊")) {
    return {
      imageName: "nutcracker_doll.jpg",
      altText: "くるみ割り人形",
      characterType: "nutcracker_doll",
    };
  }

  // 3. 🪆 からくり人形コッペリア (Coppélia Automaton Doll)
  if (kanji.includes("コッペリア") || kanji.includes("からくり人形") || kanji.includes("コッペリウス") || kanji.includes("博士") || kanji.includes("仕事部屋")) {
    return {
      imageName: "coppelia_doll.jpg",
      altText: "からくり人形コッペリア",
      characterType: "coppelia_doll",
    };
  }

  // 4. 🪭 キトリのレース扇子 (Spanish Lace Fan - Abanico)
  if (kanji.includes("扇子") || kanji.includes("風車")) {
    return {
      imageName: "spanish_fan.jpg",
      altText: "スペインの扇子",
      characterType: "spanish_fan",
    };
  }

  // 5. 👑 ロイヤル・ティアラ / 宝石冠 (Royal Tiara & Jewels)
  if (kanji.includes("ティアラ") || kanji.includes("冠") || kanji.includes("スワロフスキー") || kanji.includes("ガラスの靴") || kanji.includes("王宮") || kanji.includes("祝宴") || kanji.includes("結婚式")) {
    return {
      imageName: "royal_tiara.jpg",
      altText: "ロイヤル・ティアラ",
      characterType: "royal_tiara",
    };
  }

  // 6. 🩰 トウシューズ・ポワント・足元小物 (Satin Pointe Shoes)
  if (
    kanji.includes("トウシューズ") ||
    kanji.includes("ポワント") ||
    kanji.includes("トウパッド") ||
    kanji.includes("リボン") ||
    kanji.includes("松やに") ||
    kanji.includes("ニス") ||
    kanji.includes("タイツ") ||
    kanji.includes("レッグウォーマー") ||
    cat === "小道具" ||
    cat === "小物"
  ) {
    return {
      imageName: "pointe_shoes.jpg",
      altText: "サテンのトウシューズ",
      characterType: "pointe_shoes",
    };
  }

  // 7. 👗 クラシックチュチュ・舞台衣装 (Classical Tutu & Stage Costumes)
  if (
    kanji.includes("チュチュ") ||
    kanji.includes("パニエ") ||
    kanji.includes("ボディス") ||
    kanji.includes("スカート") ||
    kanji.includes("ジョーゼット") ||
    kanji.includes("アームカバー") ||
    kanji.includes("針") ||
    kanji.includes("糸つむぎ") ||
    cat === "衣装"
  ) {
    return {
      imageName: "classical_tutu.jpg",
      altText: "クラシック・チュチュ",
      characterType: "classical_tutu",
    };
  }

  // 8. 🎻 ヴァイオリンと薔薇の花束・オーケストラ (Violin & Rose Bouquet)
  if (
    kanji.includes("オーケストラ") ||
    kanji.includes("ワルツ") ||
    kanji.includes("花束") ||
    kanji.includes("ローズ") ||
    kanji.includes("花園") ||
    kanji.includes("ぶどう") ||
    kanji.includes("葦笛") ||
    kanji.includes("鐘") ||
    cat === "名曲"
  ) {
    return {
      imageName: "violin_bouquet.jpg",
      altText: "ヴァイオリンと薔薇の花束",
      characterType: "violin_bouquet",
    };
  }

  // ──────────────────────────────────────────────────────────────
  // 💃 B. 主要ダンサー・プリマ・プリンシパル (Classical Dancers)
  // ──────────────────────────────────────────────────────────────

  // 9. 🔥 火の鳥 (The Firebird)
  if (kanji.includes("火の鳥") || kanji.includes("カシチェイ") || kanji.includes("不死鳥") || kanji.includes("イワン")) {
    return {
      imageName: "firebird.jpg",
      altText: "火の鳥",
      characterType: "firebird",
    };
  }

  // 10. 🛕 ラ・バヤデール / 寺院の舞姫 (La Bayadère - Nikiya & Gamzatti)
  if (kanji.includes("バヤデール") || kanji.includes("ニキヤ") || kanji.includes("寺院") || kanji.includes("影の王国") || kanji.includes("ガムザッティ") || kanji.includes("神像") || kanji.includes("ブラフマン")) {
    return {
      imageName: "nikia.jpg",
      altText: "舞姫ニキヤ",
      characterType: "nikia",
    };
  }

  // 11. 🍬 金平糖の精 (Sugar Plum Fairy)
  if (kanji.includes("金平糖") || kanji.includes("お菓子の国") || kanji.includes("クララ") || kanji.includes("トレパック")) {
    return {
      imageName: "sugarplum.jpg",
      altText: "金平糖の精",
      characterType: "sugarplum",
    };
  }

  // 12. 🐦 青い鳥 / 跳躍男性ソリスト (Bluebird & Allegro Jumpers)
  if (kanji.includes("青い鳥") || kanji.includes("鳥") || kanji.includes("ジュテ") || kanji.includes("カブリオール") || kanji.includes("ブリゼ") || kanji.includes("アントルシャ") || kanji.includes("パディシャ") || kanji.includes("跳躍")) {
    return {
      imageName: "bluebird.jpg",
      altText: "青い鳥 (ブルーバード)",
      characterType: "bluebird",
    };
  }

  // 13. 🧚 ジゼル / ウィリ (Giselle & Sylphide)
  if (kanji.includes("ジゼル") || kanji.includes("ウィリ") || kanji.includes("ミルタ") || kanji.includes("シルフィード") || kanji.includes("墓場") || kanji.includes("深夜") || kanji.includes("収穫祭") || kanji.includes("ヒラリオン") || kanji.includes("ペザント")) {
    return {
      imageName: "giselle.jpg",
      altText: "ジゼル (ウィリ)",
      characterType: "giselle",
    };
  }

  // 14. 🦅 黒鳥オディール / 悪魔・ドラマチック (Black Swan Odile & Rothbart)
  if (kanji.includes("オディール") || kanji.includes("黒鳥") || kanji.includes("ロットバルト") || kanji.includes("カラボス") || kanji.includes("悪魔") || kanji.includes("フェッテ")) {
    return {
      imageName: "odile.jpg",
      altText: "黒鳥オディール",
      characterType: "odile",
    };
  }

  // 15. 💃 スペイン・情熱系 (Don Quixote, Kitri, Carmen, Esmeralda)
  if (kanji.includes("キトリ") || kanji.includes("ドン・キホーテ") || kanji.includes("バジル") || kanji.includes("カルメン") || kanji.includes("エスパーダ") || kanji.includes("メルセデス") || kanji.includes("エスメラルダ") || kanji.includes("サタネラ") || kanji.includes("闘牛士")) {
    return {
      imageName: "kitri.jpg",
      altText: "キトリ (ドン・キホーテ)",
      characterType: "kitri",
    };
  }

  // 16. 🤴 王子・騎士・男性主役 (Princes, Danseur Noble & Pirates)
  if (kanji.includes("ジークフリート") || kanji.includes("デジレ") || kanji.includes("アルブレヒト") || kanji.includes("王子") || kanji.includes("ソロル") || kanji.includes("コンラッド") || kanji.includes("アリ") || kanji.includes("ジャン・ド・ブリエンヌ") || kanji.includes("フランツ") || kanji.includes("ジェームズ") || kanji.includes("海賊") || kanji.includes("ロミオ") || kanji.includes("決闘") || kanji.includes("パ・ド・ドゥ")) {
    return {
      imageName: "prince.jpg",
      altText: "王子・プリンシパル",
      characterType: "prince",
    };
  }

  // 17. 👸 クラシカル・プリンセス (Sleeping Beauty Aurora, Cinderella, Swanhilda)
  if (kanji.includes("オーロラ") || kanji.includes("フロリナ") || kanji.includes("スワニルダ") || kanji.includes("シンデレラ") || kanji.includes("ライモンダ") || kanji.includes("パキータ") || kanji.includes("タリスマン") || kanji.includes("ダイアナ") || kanji.includes("グラン・パ・クラシック") || kanji.includes("眠れる森")) {
    return {
      imageName: "aurora.jpg",
      altText: "オーロラ姫",
      characterType: "aurora",
    };
  }

  // 18. 🦢 白鳥の湖 / オデット (Swan Lake Odette)
  if (kanji.includes("オデット") || kanji.includes("白鳥") || kanji.includes("湖畔") || kanji.includes("アダージョ")) {
    return {
      imageName: "odette.jpg",
      altText: "白鳥オデット",
      characterType: "odette",
    };
  }

  // ──────────────────────────────────────────────────────────────
  // 🎲 C. 全21種類のハッシュ分散ローテーション（基礎ステップ・メイク・ポーズ等）
  // ──────────────────────────────────────────────────────────────
  const charSum = kanji.split("").reduce((acc, c, idx) => acc + c.charCodeAt(0) * (idx + 1), 0);
  const pool: RealisticDancerInfo[] = [
    { imageName: "lilac_fairy.jpg", altText: "リラの精 (眠れる森の美女)", characterType: "lilac_fairy" },
    { imageName: "lise.jpg", altText: "リーズ (ラ・フィーユ・マル・ガルデ)", characterType: "lise" },
    { imageName: "graduation_ball.jpg", altText: "卒業舞踏会", characterType: "graduation_ball" },
    { imageName: "odette.jpg", altText: "白鳥オデット", characterType: "odette" },
    { imageName: "pointe_shoes.jpg", altText: "サテンのトウシューズ", characterType: "pointe_shoes" },
    { imageName: "kitri.jpg", altText: "キトリ", characterType: "kitri" },
    { imageName: "nutcracker_doll.jpg", altText: "くるみ割り人形", characterType: "nutcracker_doll" },
    { imageName: "aurora.jpg", altText: "オーロラ姫", characterType: "aurora" },
    { imageName: "royal_tiara.jpg", altText: "ロイヤル・ティアラ", characterType: "royal_tiara" },
    { imageName: "sugarplum.jpg", altText: "金平糖の精", characterType: "sugarplum" },
    { imageName: "spanish_fan.jpg", altText: "スペインの扇子", characterType: "spanish_fan" },
    { imageName: "giselle.jpg", altText: "ジゼル", characterType: "giselle" },
    { imageName: "coppelia_doll.jpg", altText: "からくり人形コッペリア", characterType: "coppelia_doll" },
    { imageName: "nikia.jpg", altText: "舞姫ニキヤ", characterType: "nikia" },
    { imageName: "classical_tutu.jpg", altText: "クラシック・チュチュ", characterType: "classical_tutu" },
    { imageName: "firebird.jpg", altText: "火の鳥", characterType: "firebird" },
    { imageName: "violin_bouquet.jpg", altText: "ヴァイオリンと花束", characterType: "violin_bouquet" },
    { imageName: "bluebird.jpg", altText: "青い鳥", characterType: "bluebird" },
    { imageName: "mouse_king.jpg", altText: "ねずみの王様", characterType: "mouse_king" },
    { imageName: "prince.jpg", altText: "王子", characterType: "prince" },
    { imageName: "odile.jpg", altText: "黒鳥オディール", characterType: "odile" },
  ];
  return pool[charSum % pool.length];
}

export function getBalletMotionType(word: BalletWord | null): string {
  if (!word) return "dance-glide";
  const kanji = word.kanji;
  // Graduation Ball / Pirouette / Fouette / lively spins
  if (kanji.includes("卒業舞踏会") || kanji.includes("無窮動") || kanji.includes("ピルエット") || kanji.includes("フェッテ") || kanji.includes("回転") || kanji.includes("風車") || kanji.includes("トゥールナン") || kanji.includes("アン・ドゥオール") || kanji.includes("アン・ドゥダン")) {
    return "dance-spin";
  }
  // Lise / Jump / grand allegro / birds / winged creatures
  if (kanji.includes("リーズ") || kanji.includes("フィーユ・マル・ガルデ") || kanji.includes("ジュテ") || kanji.includes("跳躍") || kanji.includes("青い鳥") || kanji.includes("鳥") || kanji.includes("火の鳥") || kanji.includes("シルフィード") || kanji.includes("ウィリ") || kanji.includes("キューピッド") || kanji.includes("カブリオール") || kanji.includes("アントルシャ") || kanji.includes("ブリゼ") || kanji.includes("パディシャ") || kanji.includes("エシャッペ")) {
    return "dance-leap";
  }
  // Lilac Fairy / Swans / graceful floating arabesque
  if (kanji.includes("リラの精") || kanji.includes("白鳥") || kanji.includes("オデット") || kanji.includes("オディール") || kanji.includes("黒鳥") || kanji.includes("湖畔") || kanji.includes("アダージョ") || kanji.includes("タリスマン") || kanji.includes("フロリナ")) {
    return "dance-swan";
  }
  // Clockwork / doll / toy soldier / mouse king characters
  if (kanji.includes("コッペリア") || kanji.includes("からくり人形") || kanji.includes("くるみ割り") || kanji.includes("兵隊") || kanji.includes("ドロッセルマイヤー") || kanji.includes("博士")) {
    return "dance-doll";
  }
  // Ornate props / tiara / pointe shoes / tutu / violin
  if (kanji.includes("トウシューズ") || kanji.includes("ポワント") || kanji.includes("ティアラ") || kanji.includes("チュチュ") || kanji.includes("リボン") || kanji.includes("扇子") || kanji.includes("花束") || kanji.includes("オーケストラ")) {
    return "dance-prop-float";
  }
  // Dramatic / combat / passionate characters / variations
  if (kanji.includes("決闘") || kanji.includes("剣") || kanji.includes("海賊") || kanji.includes("カルメン") || kanji.includes("エスパーダ") || kanji.includes("キトリ") || kanji.includes("エスメラルダ") || kanji.includes("サタネラ") || kanji.includes("ダイアナ") || kanji.includes("ねずみ")) {
    return "dance-passion";
  }
  // Default graceful glide & float
  return "dance-glide";
}

export default function PlayScreen({ seatTier, onGameEnd, onBackToMenu }: PlayScreenProps) {
  const [timeLeft, setTimeLeft] = useState<number>(seatTier.timeLimit);
  const [earnedValue, setEarnedValue] = useState<number>(0);
  const [correctKeys, setCorrectKeys] = useState<number>(0);
  const [misTypes, setMisTypes] = useState<number>(0);
  const [completedTerms, setCompletedTerms] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  
  // Extended game mechanics state
  const [perfectComboCount, setPerfectComboCount] = useState<number>(0); // ミスなし連続クリア数
  const [isGrandPrix, setIsGrandPrix] = useState<boolean>(false);        // コンボ10以上でGP状態
  const [bouquetEffect, setBouquetEffect] = useState<boolean>(false);    // 花束エフェクト

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  
  const wordListRef = useRef<BalletWord[]>([]);
  const [currentWord, setCurrentWord] = useState<BalletWord | null>(null);
  const [typingState, setTypingState] = useState<{
    typed: string;
    remaining: string;
  }>({ typed: "", remaining: "" });

  const [shaking, setShaking] = useState<boolean>(false);
  const [flashRed, setFlashRed] = useState<boolean>(false);
  const [bravoEffect, setBravoEffect] = useState<string | null>(null);
  const [addedValuePopup, setAddedValuePopup] = useState<{ value: number; label: string } | null>(null);

  // Stage actor ref & progress for silky-smooth GPU motion
  const stageActorRef = useRef<HTMLDivElement | null>(null);
  const stageProgressRef = useRef<number>(0);
  const stageSpeedRef = useRef<number>(12);
  const animationFrameId = useRef<number | null>(null);
  const lastUpdateTime = useRef<number>(0);

  const engineRef = useRef<TypingEngine | null>(null);
  const isTermClearedWithoutErrors = useRef<boolean>(true);

  // Tracking refs for extended stats
  const wordStartTimeRef = useRef<number>(0);   // 単語タイピング開始時刻
  const comboRef = useRef<number>(0);           // リアルタイムcombo値 (stateはasync)
  const perfectComboRef = useRef<number>(0);    // 現在のミスなし連続数
  const maxComboRef = useRef<number>(0);        // 最大コンボ記録
  const maxPerfectComboRef = useRef<number>(0); // 最大ミスなし連続記録
  const speedClearsRef = useRef<number>(0);     // スピードクリア回数
  const speedClearStreakRef = useRef<number>(0);// 連続スピードクリア数

  const showBravoEffect = (msg: string) => {
    setBravoEffect(msg);
    setTimeout(() => {
      setBravoEffect(null);
    }, 1200);
  };

  const loadNextWord = () => {
    if (wordListRef.current.length === 0) {
      const originalList = getWordsForSeatTier(seatTier);
      
      // Fisher-Yates Shuffle
      const shuffled = [...originalList];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        if (temp !== undefined && shuffled[j] !== undefined) {
          shuffled[i] = shuffled[j]!;
          shuffled[j] = temp;
        }
      }
      wordListRef.current = shuffled;
    }
    
    const selected = wordListRef.current.pop();
    if (!selected) return;

    setCurrentWord(selected);
    
    const engine = new TypingEngine(selected.hiragana);
    engineRef.current = engine;
    
    const progress = engine.getProgress();
    setTypingState({
      typed: progress.typedText,
      remaining: progress.remainingText
    });
    
    stageProgressRef.current = 0;
    if (stageActorRef.current) {
      stageActorRef.current.style.left = `0%`;
      stageActorRef.current.style.transform = `translateX(-50%)`;
    }
    lastUpdateTime.current = performance.now();
    wordStartTimeRef.current = performance.now(); // 単語タイピング開始時刻を記録
    isTermClearedWithoutErrors.current = true;
    
    stageSpeedRef.current = 4 + selected.hiragana.length * 0.85;
  };

  const handleStageSlideOff = () => {
    playMissSound();
    comboRef.current = 0;
    perfectComboRef.current = 0;
    speedClearStreakRef.current = 0;
    setCombo(0);
    setPerfectComboCount(0);
    setIsGrandPrix(false);
    setFlashRed(true);
    setTimeout(() => setFlashRed(false), 150);
    loadNextWord();
  };

  // Timer lifecycle
  useEffect(() => {
    wordListRef.current = getWordsForSeatTier(seatTier);
    loadNextWord();
    
    const timerInterval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          setIsPlaying(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timerInterval);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Completion lifecycle
  useEffect(() => {
    if (!isPlaying) {
      const totalKeys = correctKeys + misTypes;
      const accuracy = totalKeys > 0 ? (correctKeys / totalKeys) * 100 : 0;
      const timeSpent = seatTier.timeLimit - timeLeft;
      const speed = timeSpent > 0 ? correctKeys / timeSpent : 0;
      
      onGameEnd({
        seatTierName: seatTier.name,
        ticketPrice: seatTier.ticketPrice,
        earnedValue,
        correctKeys,
        misTypes,
        totalKeys,
        accuracy,
        completedTerms,
        speed,
        maxCombo: maxComboRef.current,
        perfectCombo: maxPerfectComboRef.current,
        speedClears: speedClearsRef.current,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  // Stage animation loop (Direct GPU Hardware Acceleration across the full stage)
  useEffect(() => {
    if (!isPlaying || !currentWord) return;

    const updateStage = (time: number) => {
      const delta = (time - lastUpdateTime.current) / 1000;
      lastUpdateTime.current = time;

      stageProgressRef.current += (100 / stageSpeedRef.current) * delta;
      if (stageProgressRef.current >= 100) {
        handleStageSlideOff();
        return;
      }

      if (stageActorRef.current) {
        // Move smoothly from left (0%) to right exit (105%) matching term time limit
        const leftPercent = stageProgressRef.current * 1.05;
        stageActorRef.current.style.left = `${leftPercent}%`;
      }

      animationFrameId.current = requestAnimationFrame(updateStage);
    };

    animationFrameId.current = requestAnimationFrame(updateStage);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWord, isPlaying]);

  // Keyboard input listener
  useEffect(() => {
    if (!isPlaying || !engineRef.current) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      if (e.key === "Escape") {
        onBackToMenu();
        return;
      }

      const key = e.key;
      const isCorrect = engineRef.current!.inputKey(key);
      const progress = engineRef.current!.getProgress();

      if (isCorrect) {
        playKeySound();
        setCorrectKeys(prev => prev + 1);
        setTypingState({
          typed: progress.typedText,
          remaining: progress.remainingText
        });

        if (progress.isCompleted) {
          playClearSound();
          const wordPrice = currentWord ? currentWord.price : 0;

          // ──────────────────────────────────────────────
          // ⚡ スピードクリア判定
          // 想定クリア時間(stageSpeedRef.current秒)の50%以内ならスピードクリア
          // ──────────────────────────────────────────────
          const elapsed = (performance.now() - wordStartTimeRef.current) / 1000;
          const expectedTime = stageSpeedRef.current;
          const isSpeedClear = elapsed <= expectedTime * 0.5;

          // ──────────────────────────────────────────────
          // 🎯 パーフェクトクリア判定（ミスなし）
          // ──────────────────────────────────────────────
          const isPerfect = isTermClearedWithoutErrors.current;

          // ──────────────────────────────────────────────
          // 🔥 コンボ更新・倍率計算
          // ──────────────────────────────────────────────
          let nextCombo = comboRef.current;
          if (isPerfect) {
            nextCombo = comboRef.current + 1;
            comboRef.current = nextCombo;
            if (nextCombo > maxComboRef.current) {
              maxComboRef.current = nextCombo;
            }
          } else {
            comboRef.current = 0;
            nextCombo = 0;
          }

          // コンボ倍率: 1.0 + combo * 0.1 (最大+2.0 = 3.0倍)
          const multiplier = 1.0 + Math.min(comboRef.current * 0.1, 2.0);
          const bonusValue = Math.floor(wordPrice * multiplier);

          setEarnedValue(prev => prev + bonusValue);
          setCompletedTerms(prev => prev + 1);

          // ポップアップ表示（倍率付きラベル）
          const popupLabel = multiplier > 1.0
            ? `+${bonusValue.toLocaleString()}円 (×${multiplier.toFixed(1)}倍!)`
            : `+${bonusValue.toLocaleString()}円 鑑賞満足度UP!`;
          setAddedValuePopup({ value: bonusValue, label: popupLabel });
          setTimeout(() => setAddedValuePopup(null), 1000);

          // ──────────────────────────────────────────────
          // グランプリ状態（コンボ10以上）
          // ──────────────────────────────────────────────
          const grandPrix = nextCombo >= 10;
          setIsGrandPrix(grandPrix);

          // コンボ state 更新
          setCombo(nextCombo);

          // ──────────────────────────────────────────────
          // 🎯 パーフェクト連続ボーナス（毎問加算は廃止、3問連続時のみ +1秒）
          // ──────────────────────────────────────────────
          let timeBonusTotal = 0;
          let bravoMsg = "";

          if (isPerfect) {
            const nextPerfect = perfectComboRef.current + 1;
            perfectComboRef.current = nextPerfect;
            if (nextPerfect > maxPerfectComboRef.current) {
              maxPerfectComboRef.current = nextPerfect;
            }
            setPerfectComboCount(nextPerfect);

            // パーフェクト連続3問ごとに +1秒
            if (nextPerfect % 3 === 0) {
              timeBonusTotal += 1;
              bravoMsg = `パーフェクト${nextPerfect}連！ +1秒`;
              playPerfectSound();

              // 花束エフェクト（3連・6連・9連...）
              setBouquetEffect(true);
              setTimeout(() => setBouquetEffect(false), 1500);
            } else {
              playPerfectSound();
            }
          } else {
            perfectComboRef.current = 0;
            setPerfectComboCount(0);
          }

          // ──────────────────────────────────────────────
          // ⚡ スピードクリアボーナス（+1秒、3連時も追加+1秒のみ）
          // ──────────────────────────────────────────────
          if (isSpeedClear) {
            speedClearsRef.current += 1;
            speedClearStreakRef.current += 1;
            timeBonusTotal += 1; // スピードクリア +1秒

            if (speedClearStreakRef.current >= 3) {
              // 3連続スピードクリアで さらに +1秒
              timeBonusTotal += 1;
              bravoMsg = `ヴィルトゥオーゾ3連！ +${timeBonusTotal}秒`;
              playSpeedClearSound();
              speedClearStreakRef.current = 0;
            } else {
              const speedMsg = `ヴィルトゥオーゾ！ +1秒`;
              bravoMsg = bravoMsg ? `${bravoMsg} / ${speedMsg}` : speedMsg;
              playSpeedClearSound();
            }
          } else {
            speedClearStreakRef.current = 0;
          }

          // ──────────────────────────────────────────────
          // 🔥 コンボ5の倍数ブラボーボーナス（5コンボごとに +1秒固定）
          // ──────────────────────────────────────────────
          if (isPerfect && nextCombo > 0 && nextCombo % 5 === 0) {
            timeBonusTotal += 1;
            bravoMsg = `ブラボー！コンボ${nextCombo}！ +${timeBonusTotal}秒`;
            playBonusSound();
          }

          // 時間加算（上限: コース初期制限時間 seatTier.timeLimit まで。無限増殖を防止）
          if (timeBonusTotal > 0) {
            setTimeLeft(t => Math.min(seatTier.timeLimit, t + timeBonusTotal));
            showBravoEffect(bravoMsg);
          }

          loadNextWord();
        }
      } else {
        playMissSound();
        setMisTypes(prev => prev + 1);
        comboRef.current = 0;
        perfectComboRef.current = 0;
        speedClearStreakRef.current = 0;
        setCombo(0);
        setPerfectComboCount(0);
        setIsGrandPrix(false);
        isTermClearedWithoutErrors.current = false;

        // ミスペナルティ: -0.5秒（最低1秒確保）
        setTimeLeft(t => Math.max(1, t - 0.5));

        setShaking(true);
        setTimeout(() => setShaking(false), 200);

        setFlashRed(true);
        setTimeout(() => setFlashRed(false), 100);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWord, isPlaying]);

  const currentIcon = getBalletIcon(currentWord);
  const dancerInfo = getRealisticDancer(currentWord);
  const basePath = process.env.NODE_ENV === "production" ? "/BalletTyping" : "";

  const profit = earnedValue - seatTier.ticketPrice;
  const isProfitable = profit >= 0;

  return (
    <div className={`play-container ballet-play ${flashRed ? "flash-red" : ""} ${isGrandPrix ? "grand-prix-mode" : ""}`}>
      {/* THEATER HEADER */}
      <div className="play-header ballet-play-header">
        <div>
          <span className="header-stat-label ballet-label">
            NOW PERFORMING
          </span>
          <h2 className="header-stat-val ballet-title-val">
            {seatTier.name}
          </h2>
        </div>

        {/* Live Theater Stats */}
        <div className="header-status-group">
          {/* Time Limit Gauge */}
          <div className="timer-box">
            <div className="timer-info">
              <span className="header-stat-label">終演まで</span>
              <span className={`header-stat-val ${timeLeft <= 10 ? "warning" : ""}`} style={{ fontSize: "1.1rem" }}>
                {timeLeft}秒
              </span>
            </div>
            <div className="timer-bar-outer">
              <div 
                className={`timer-bar-inner ballet-timer-bar ${timeLeft <= 10 ? "warning" : ""} ${isGrandPrix ? "grandprix" : combo >= 5 ? "heat-mid" : ""}`}
                style={{ width: `${(timeLeft / seatTier.timeLimit) * 100}%` }}
              />
            </div>
          </div>

          {/* Earned Appreciation Value */}
          <div className="header-stat-box">
            <span className="header-stat-label">鑑賞バリュー満足度</span>
            <span className="header-stat-val gold ballet-gold">
              {earnedValue.toLocaleString()}円
            </span>
          </div>

          {/* Ticket Cost Balance */}
          <div className="header-stat-box">
            <span className="header-stat-label">チケット鑑賞損得</span>
            <span className={`header-stat-val ${isProfitable ? "profit" : "loss"}`}>
              {isProfitable 
                ? `+${profit.toLocaleString()}円 満足！(元取達成)` 
                : `あと ${(seatTier.ticketPrice - earnedValue).toLocaleString()}円 で元取`
              }
            </span>
          </div>

          {/* Bravo Combo - shows grandprix state */}
          <div className={`combo-box ballet-combo-box ${isGrandPrix ? "combo-grandprix" : ""}`}>
            <span className="combo-label">
              {isGrandPrix ? "✦ GRAND PRIX ✦" : combo >= 5 ? "🔥 BRAVO!" : "BRAVO!"}
            </span>
            <span className="header-stat-val ballet-gold" style={{ textAlign: "center" }}>{combo}</span>
            {perfectComboCount > 0 && (
              <span className="perfect-streak-label">Perfect×{perfectComboCount}</span>
            )}
          </div>
        </div>
      </div>

      {/* BALLET THEATER STAGE */}
      <div className="conveyor-belt-section ballet-stage-section">
        {/* Stage Curtain Decor */}
        <div className="stage-curtain-top" />
        
        {/* Stage Spotlight Track Floor */}
        <div className="stage-floor-track">
          <div className="stage-footlights" />
        </div>

        {/* Active Ballet Motif / Dancer Spotlight */}
        {/* Active Ballet Motif / Dancer Spotlight */}
        {currentWord && (
          <div
            ref={stageActorRef}
            className={`sushi-plate-wrapper ballet-motif-wrapper ${shaking ? "shake" : ""}`}
            style={{
              left: "0%",
              transform: "translateX(-50%)",
              willChange: "left",
            }}
          >
            <div className={`stage-actor-container ${getBalletMotionType(currentWord)}`}>
              {/* Overhead pin-spotlight beam illuminating the performer */}
              <div className="pin-spotlight-beam" />
              
              {/* Dancing fairy dust / golden sparkle trail */}
              <div className="dancer-fairy-dust" aria-hidden="true">
                <span className="dust-particle dust-1">✦</span>
                <span className="dust-particle dust-2">✧</span>
                <span className="dust-particle dust-3">✨</span>
                <span className="dust-particle dust-4">✦</span>
              </div>

              {/* Realistic Classical Ballerina on Stage */}
              <div className="ballet-dancer-on-stage">
                <div className={`realistic-dancer-figure ${dancerInfo.characterType} ${getBalletMotionType(currentWord)}`}>
                  {/* Ornate Gold Filigree Floating Frame */}
                  <div className="dancer-cameo-frame" />
                  
                  {/* Oil Painting Masterpiece Art */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${basePath}/dancers/${dancerInfo.imageName}`}
                    alt={dancerInfo.altText}
                    className="dancer-oil-artwork"
                    loading="eager"
                  />
                  
                  {/* Shimmering Lighting Glaze Overlay */}
                  <div className="dancer-lighting-shimmer" />

                  {/* Character/Term Badge */}
                  <span className="dancer-role-badge">
                    {currentIcon} {currentWord.kanji.length > 8 ? currentWord.kanji.slice(0, 7) + "…" : currentWord.kanji}
                  </span>
                </div>
              </div>

              {/* Dynamic spotlight pool reacting to dancer movement */}
              <div className={`stage-floor-spotlight ${getBalletMotionType(currentWord)}`} />

              {/* Appreciation Value Tag with elegant float */}
              <div className="ballet-value-tag">
                +{currentWord.price}円相当
              </div>
            </div>
          </div>
        )}

        {/* Score Addition Popup */}
        {addedValuePopup && (
          <div className="point-add-popup">
            {addedValuePopup.label}
          </div>
        )}

        {/* Bouquet Effect (Perfect 3x streak) */}
        {bouquetEffect && (
          <div className="bouquet-container" aria-hidden="true">
            {["🌹","🌸","🌺","🌹","🌸"].map((flower, i) => (
              <span key={i} className={`bouquet-petal petal-${i + 1}`}>{flower}</span>
            ))}
          </div>
        )}

        {/* Bravo Applause Banner */}
        {bravoEffect && (
          <div className="bonus-alert ballet-bravo-alert">
            {bravoEffect}
          </div>
        )}
      </div>

      {/* TYPING WORD DISPLAY PANEL */}
      <div className="typing-display-area ballet-typing-area">
        {currentWord ? (
          <div style={{ textAlign: "center", width: "100%", maxWidth: "48rem" }}>
            {/* Category tag */}
            {currentWord.category && (
              <span className="ballet-category-tag">
                {currentWord.category}
              </span>
            )}

            {/* Kanji / Main Ballet Term */}
            <div className="word-main ballet-term-main">
              {currentWord.kanji}
            </div>

            {/* Kana (Hiragana) guides */}
            <div className="word-sub ballet-term-sub">
              {currentWord.hiragana}
            </div>

            {/* Romaji typing guides */}
            <div className="romaji-guide-box ballet-romaji-box">
              <div className="romaji-text">
                <span className="romaji-typed ballet-typed">{typingState.typed}</span>
                <span className="romaji-remaining ballet-remaining">
                  {typingState.remaining}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ color: "var(--text-gray)", animation: "pulse 1s infinite alternate" }}>
            幕が上がります...
          </div>
        )}
      </div>

      {/* FOOTER TIPS */}
      <div className="play-footer ballet-footer">
        <div className="footer-back-label">
          <span>Esc キーで座席選択に戻る</span>
        </div>
        <div className="footer-tip">
          <span>ミスなし速打ちで時間延長！ミスすると -0.5秒 ⚡コンボで獲得バリュー倍増！</span>
        </div>
      </div>
    </div>
  );
}
