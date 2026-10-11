let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  return audioCtx;
}

export function resumeAudioContext() {
  const ctx = getAudioContext();
  if (ctx && ctx.state === "suspended") {
    ctx.resume();
  }
}

/**
 * Plays a light, crystal celesta/harp-like pluck for key presses.
 */
export function playKeySound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  resumeAudioContext();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = "sine";
  osc.frequency.setValueAtTime(880, ctx.currentTime); // A5 note
  osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.05);

  gain.gain.setValueAtTime(0.06, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

  osc.start();
  osc.stop(ctx.currentTime + 0.05);
}

/**
 * Plays a soft, muted pizzicato error sound.
 */
export function playMissSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  resumeAudioContext();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = "triangle";
  osc.frequency.setValueAtTime(180, ctx.currentTime);
  osc.frequency.linearRampToValueAtTime(120, ctx.currentTime + 0.1);

  gain.gain.setValueAtTime(0.1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

  osc.start();
  osc.stop(ctx.currentTime + 0.1);
}

/**
 * Plays an elegant, sparkling arpeggio when completing a ballet term.
 */
export function playClearSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  resumeAudioContext();

  const now = ctx.currentTime;
  // Sparkling harp arpeggio: C6 -> E6 -> G6 -> B6 -> C7
  const notes = [1046.50, 1318.51, 1567.98, 1975.53, 2093.00];
  
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + idx * 0.04);

    gain.gain.setValueAtTime(0.0, now + idx * 0.04);
    gain.gain.linearRampToValueAtTime(0.05, now + idx * 0.04 + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.22);

    osc.start(now + idx * 0.04);
    osc.stop(now + idx * 0.04 + 0.22);
  });
}

/**
 * Plays a triumphant fanfare / applause chime for combo bonuses.
 */
export function playBonusSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  resumeAudioContext();

  const now = ctx.currentTime;
  const chord1 = [659.25, 783.99, 987.77]; // E5, G5, B5
  const chord2 = [1046.50, 1318.51, 1567.98, 2093.00]; // C6, E6, G6, C7

  chord1.forEach(freq => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc.start(now);
    osc.stop(now + 0.18);
  });

  chord2.forEach(freq => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, now + 0.1);
    gain.gain.setValueAtTime(0.07, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.start(now + 0.1);
    osc.stop(now + 0.1 + 0.35);
  });
}

/**
 * Plays a bright, virtuosic ascending glissando for speed clears.
 */
export function playSpeedClearSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  resumeAudioContext();

  const now = ctx.currentTime;
  // Rapid ascending arpeggio: D5 -> F#5 -> A5 -> D6 -> F#6 -> A6
  const notes = [587.33, 739.99, 880.00, 1174.66, 1479.98, 1760.00];

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + idx * 0.03);
    gain.gain.setValueAtTime(0.0, now + idx * 0.03);
    gain.gain.linearRampToValueAtTime(0.06, now + idx * 0.03 + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.03 + 0.2);
    osc.start(now + idx * 0.03);
    osc.stop(now + idx * 0.03 + 0.2);
  });
}

/**
 * Plays a soft, warm perfect-clear chime (gentle major chord swell).
 */
export function playPerfectSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  resumeAudioContext();

  const now = ctx.currentTime;
  // Warm G major chord: G4, B4, D5, G5
  const notes = [392.00, 493.88, 587.33, 783.99];

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + idx * 0.02);
    gain.gain.setValueAtTime(0.0, now + idx * 0.02);
    gain.gain.linearRampToValueAtTime(0.045, now + idx * 0.02 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.02 + 0.35);
    osc.start(now + idx * 0.02);
    osc.stop(now + idx * 0.02 + 0.35);
  });
}
