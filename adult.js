// Adult offers – keep this file updated when you add/remove links.
// IMPORTANT: Adult-only links go here. Do not mix mainstream links into this array.

const ADULT_OFFERS = [
  "https://www.effectivegatecpm.com/aqe7unm3?key=5a45be11b025761c3ccad378ffb221f4", // EffectiveGate adult
  "https://lakns.com/link?z=10285669" // Zeydoo adult smartlink
];

function goAdult() {
  if (!ADULT_OFFERS.length) return;
  const target = ADULT_OFFERS[Math.floor(Math.random() * ADULT_OFFERS.length)];
  window.open(target, "_blank");
}
