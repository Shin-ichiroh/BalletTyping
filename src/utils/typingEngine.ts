// Romaji mapping table for Hiragana syllables.
// Includes extended mappings for ballet loanwords (e.g., ゔぁ, ゔぃ, でゅ, てぃ).
export const ROMAJI_MAP: Record<string, string[]> = {
  "あ": ["a"], "い": ["i", "yi"], "う": ["u", "wu"], "え": ["e", "ye"], "お": ["o"],
  "か": ["ka"], "き": ["ki"], "く": ["ku", "qu"], "け": ["ke"], "こ": ["ko"],
  "さ": ["sa"], "し": ["shi", "si"], "す": ["su"], "せ": ["se"], "そ": ["so"],
  "た": ["ta"], "ち": ["chi", "ti"], "つ": ["tsu", "tu"], "て": ["te"], "と": ["to"],
  "な": ["na"], "に": ["ni"], "ぬ": ["nu"], "ね": ["ne"], "の": ["no"],
  "は": ["ha"], "ひ": ["hi"], "ふ": ["fu", "hu"], "へ": ["he"], "ほ": ["ho"],
  "ま": ["ma"], "み": ["mi"], "む": ["mu"], "め": ["me"], "も": ["mo"],
  "や": ["ya"], "ゆ": ["yu"], "よ": ["yo"],
  "ら": ["ra"], "り": ["ri"], "る": ["ru"], "れ": ["re"], "ろ": ["ro"],
  "わ": ["wa"], "を": ["wo"], "ん": ["nn"],
  "が": ["ga"], "ぎ": ["gi"], "ぐ": ["gu"], "げ": ["ge"], "ご": ["go"],
  "ざ": ["za"], "じ": ["ji", "zi"], "ず": ["zu"], "ぜ": ["ze"], "ぞ": ["zo"],
  "だ": ["da"], "ぢ": ["ji", "di"], "づ": ["zu", "du"], "で": ["de"], "ど": ["do"],
  "ば": ["ba"], "び": ["bi"], "ぶ": ["bu"], "べ": ["be"], "ぼ": ["bo"],
  "ぱ": ["pa"], "ぴ": ["pi"], "ぷ": ["pu"], "ぺ": ["pe"], "ぽ": ["po"],
  "ー": ["-"],
  
  // Contracted sounds (拗音) - 2 characters
  "きゃ": ["kya"], "きゅ": ["kyu"], "きょ": ["kyo"],
  "しゃ": ["sha", "sya"], "しゅ": ["shu", "syu"], "しょ": ["sho", "syo"],
  "ちゃ": ["cha", "tya"], "ちゅ": ["chu", "tyu"], "ちょ": ["cho", "tyo"],
  "にゃ": ["nya"], "にゅ": ["nyu"], "にょ": ["nyo"],
  "ひゃ": ["hya"], "ひゅ": ["hyu"], "ひょ": ["hyo"],
  "みゃ": ["mya"], "みゅ": ["myu"], "みょ": ["myo"],
  "りゃ": ["rya"], "りゅ": ["ryu"], "りょ": ["ryo"],
  "ぎゃ": ["gya"], "ぎゅ": ["gyu"], "ぎょ": ["gyo"],
  "じゃ": ["ja", "zya", "jya"], "じゅ": ["ju", "zyu", "jyu"], "じょ": ["jo", "zyo", "jyo"],
  "ぢゃ": ["dya"], "ぢゅ": ["dyu"], "ぢょ": ["dyo"],
  "びゃ": ["bya"], "びゅ": ["byu"], "びょ": ["byo"],
  "ぴゃ": ["pya"], "ぴゅ": ["pyu"], "ぴょ": ["pyo"],
  
  // Western / Ballet specific phonetics (ゔ, ふぁ, でゅ, じぇ, etc.)
  "ゔ": ["vu"],
  "ゔぁ": ["va", "vua"], "ゔぃ": ["vi", "vui"], "ゔぇ": ["ve", "vue"], "ゔぉ": ["vo", "vuo"],
  "ふぁ": ["fa", "fua"], "ふぃ": ["fi", "fui"], "ふぇ": ["fe", "fue"], "ふぉ": ["fo", "fuo"],
  "うぁ": ["wha"], "うぃ": ["wi", "whi"], "うぇ": ["we", "whe"], "うぉ": ["who"],
  "つぁ": ["tsa"], "つぃ": ["tsi"], "つぇ": ["tse"], "つぉ": ["tso"],
  "でゃ": ["dha"], "でぃ": ["dhi", "di"], "でゅ": ["dhu", "dyu"], "でょ": ["dho"],
  "てゃ": ["tha"], "てぃ": ["thi", "ti"], "てゅ": ["thu", "tyu"], "てょ": ["tho"],
  "じぇ": ["je", "zye", "jye"],
  "しぇ": ["she", "sye"],
  "ちぇ": ["che", "tye"],

  // Small characters (単独小文字)
  "ぁ": ["la", "xa"], "ぃ": ["li", "xi"], "ぅ": ["lu", "xu"], "ぇ": ["le", "xe"], "ぉ": ["lo", "xo"],
  "ゃ": ["lya", "xya"], "ゅ": ["lyu", "xyu"], "ょ": ["lyo", "xyo"],
  "っ": ["ltu", "xtu", "ltsu", "xtsu"],
  "ゎ": ["lwa", "xwa"]
};

// Check if a character is a vowel or y-line or n-line (requires double "n" for previous "ん")
const DOUBLE_N_REQUIRED_NEXT = new Set([
  "あ", "い", "う", "え", "お",
  "や", "ゆ", "よ",
  "な", "に", "ぬ", "ね", "の",
  "ん",
  "ぁ", "ぃ", "ぅ", "ぇ", "ぉ",
  "ゃ", "ゅ", "ょ"
]);

function getFirstConsonant(hiragana: string): string | null {
  if (!hiragana) return null;
  const twoChar = hiragana.slice(0, 2);
  let romajis = ROMAJI_MAP[twoChar];
  if (!romajis) {
    const oneChar = hiragana.slice(0, 1);
    romajis = ROMAJI_MAP[oneChar];
  }
  if (romajis && romajis[0]) {
    const firstRomaji = romajis[0];
    if (firstRomaji && firstRomaji !== "-" && !["a", "i", "u", "e", "o"].includes(firstRomaji[0])) {
      return firstRomaji[0];
    }
  }
  return null;
}

/**
 * Recursively generates all valid romaji typing sequences for a given hiragana string.
 */
export function generateRomajiPatterns(hiragana: string): string[] {
  if (!hiragana) return [""];

  // 1. Double consonant "っ" handling
  if (hiragana.startsWith("っ")) {
    const rest = hiragana.slice(1);
    if (rest) {
      const consonant = getFirstConsonant(rest);
      const subPatterns = generateRomajiPatterns(rest);
      const results: string[] = [];

      if (consonant) {
        for (const sub of subPatterns) {
          results.push(consonant + sub);
        }
      }
      
      const singleSokuon = ROMAJI_MAP["っ"] || ["xtu", "ltu"];
      for (const single of singleSokuon) {
        for (const sub of subPatterns) {
          results.push(single + sub);
        }
      }
      return results;
    } else {
      return ROMAJI_MAP["っ"] || ["xtu", "ltu"];
    }
  }

  // 2. Syllable "ん" handling
  if (hiragana.startsWith("ん")) {
    const rest = hiragana.slice(1);
    if (rest) {
      const nextChar = rest.slice(0, 1);
      const subPatterns = generateRomajiPatterns(rest);
      const results: string[] = [];

      if (DOUBLE_N_REQUIRED_NEXT.has(nextChar)) {
        for (const sub of subPatterns) {
          results.push("nn" + sub);
        }
      } else {
        for (const sub of subPatterns) {
          results.push("n" + sub);
          results.push("nn" + sub);
        }
      }
      return results;
    } else {
      return ["nn"];
    }
  }

  // 3. Check for 2-character contracted sounds (e.g., "ゔぁ", "でゅ", "きゃ")
  if (hiragana.length >= 2) {
    const twoChar = hiragana.slice(0, 2);
    if (ROMAJI_MAP[twoChar]) {
      const romajis = ROMAJI_MAP[twoChar];
      const rest = hiragana.slice(2);
      const subPatterns = generateRomajiPatterns(rest);
      const results: string[] = [];

      for (const r of romajis) {
        for (const sub of subPatterns) {
          results.push(r + sub);
        }
      }
      return results;
    }
  }

  // 4. Standard 1-character sound
  const oneChar = hiragana.slice(0, 1);
  if (ROMAJI_MAP[oneChar]) {
    const romajis = ROMAJI_MAP[oneChar];
    const rest = hiragana.slice(1);
    const subPatterns = generateRomajiPatterns(rest);
    const results: string[] = [];

    for (const r of romajis) {
      for (const sub of subPatterns) {
        results.push(r + sub);
      }
    }
    return results;
  }

  // Fallback for unmapped characters (just keep them as-is)
  const rest = hiragana.slice(1);
  const subPatterns = generateRomajiPatterns(rest);
  const results: string[] = [];
  for (const sub of subPatterns) {
    results.push(oneChar + sub);
  }
  return results;
}

export class TypingEngine {
  private targetHiragana: string;
  private allPatterns: string[];
  private typedText: string = "";
  private misTypes: number = 0;
  private correctTypes: number = 0;

  constructor(hiragana: string) {
    this.targetHiragana = hiragana;
    this.allPatterns = generateRomajiPatterns(hiragana);
  }

  public inputKey(key: string): boolean {
    const lowerKey = key.toLowerCase();
    
    if (lowerKey.length > 1) {
      return true;
    }

    const testInput = this.typedText + lowerKey;
    const isCorrect = this.allPatterns.some(pattern => pattern.startsWith(testInput));

    if (isCorrect) {
      this.typedText = testInput;
      this.correctTypes++;
      return true;
    } else {
      this.misTypes++;
      return false;
    }
  }

  public getProgress() {
    const validPatterns = this.allPatterns.filter(p => p.startsWith(this.typedText));
    const activePattern = validPatterns.length > 0 ? validPatterns[0] : (this.allPatterns[0] || "");

    return {
      typedText: this.typedText,
      remainingText: activePattern.slice(this.typedText.length),
      activePattern,
      isCompleted: this.isCompleted(),
      correctTypes: this.correctTypes,
      misTypes: this.misTypes
    };
  }

  public isCompleted(): boolean {
    return this.allPatterns.includes(this.typedText);
  }

  public getMisTypes(): number {
    return this.misTypes;
  }

  public getCorrectTypes(): number {
    return this.correctTypes;
  }
}
