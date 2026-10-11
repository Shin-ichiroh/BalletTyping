import { describe, expect, test } from "vitest";
import { generateRomajiPatterns, TypingEngine } from "./typingEngine";

describe("Ballet TypingEngine - Phonetic rules", () => {
  test("ballet specific sounds: ゔぁ (va), でゅ (dhu/dyu)", () => {
    const vaPatterns = generateRomajiPatterns("ゔぁ");
    expect(vaPatterns).toContain("va");

    const dyuPatterns = generateRomajiPatterns("でゅ");
    expect(dyuPatterns).toContain("dyu");
    expect(dyuPatterns).toContain("dhu");
  });

  test("classic ballet step: プリエ (ぷりえ)", () => {
    const engine = new TypingEngine("ぷりえ");
    expect(engine.inputKey("p")).toBe(true);
    expect(engine.inputKey("u")).toBe(true);
    expect(engine.inputKey("r")).toBe(true);
    expect(engine.inputKey("i")).toBe(true);
    expect(engine.inputKey("e")).toBe(true);
    expect(engine.isCompleted()).toBe(true);
  });

  test("sokuon in ballet step: パッセ (ぱっせ)", () => {
    // Should accept double consonant "s"
    const engine1 = new TypingEngine("ぱっせ");
    expect(engine1.inputKey("p")).toBe(true);
    expect(engine1.inputKey("a")).toBe(true);
    expect(engine1.inputKey("s")).toBe(true);
    expect(engine1.inputKey("s")).toBe(true);
    expect(engine1.inputKey("e")).toBe(true);
    expect(engine1.isCompleted()).toBe(true);

    // Should also accept "xtu"
    const engine2 = new TypingEngine("ぱっせ");
    expect(engine2.inputKey("p")).toBe(true);
    expect(engine2.inputKey("a")).toBe(true);
    expect(engine2.inputKey("x")).toBe(true);
    expect(engine2.inputKey("t")).toBe(true);
    expect(engine2.inputKey("u")).toBe(true);
    expect(engine2.inputKey("s")).toBe(true);
    expect(engine2.inputKey("e")).toBe(true);
    expect(engine2.isCompleted()).toBe(true);
  });

  test("repertoire: 白鳥の湖 (はくちょうのみずうみ)", () => {
    const patterns = generateRomajiPatterns("はくちょうのみずうみ");
    expect(patterns).toContain("hakuchounomizuumi");
    expect(patterns).toContain("hakutyounomizuumi");
  });

  test("S-tier Act title & characters: 白鳥の湖 第２幕, ジェームズ", () => {
    const patterns = generateRomajiPatterns("はくちょうのみずうみだいにまくこはんのじょうけい");
    expect(patterns.some(p => p.startsWith("hakuchounomizuumidainimakukohannnojoukei"))).toBe(true);

    const jamesPatterns = generateRomajiPatterns("じぇーむず");
    expect(jamesPatterns).toContain("je-muzu");
  });
});
