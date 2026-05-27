export const WA_MESSAGES = {
  general:
    "Namaste! Mujhe Vedic Heritage ke products ke baare mein jaankari chahiye. Call: 7840882270",
  kapila:
    "Namaste! Mujhe Kapila Pashu Aahar ki price aur availability batayein.",
  bansuri:
    "Namaste! Bansuri Pashu Aahar available hai? Price batayein.",
  brajwasi:
    "Namaste! Brajwasi Feeds ke baare mein puchna tha.",
  godrej:
    "Namaste! Godrej Agrovet cattle feed available hai Bikapur mein?",
  mineral:
    "Namaste! Mineral Mixture available hai? Price aur brands batayein.",
  bulk:
    "Namaste! Mujhe bulk order karna hai. Best price batayein.",
  havan:
    "Namaste! Havan Samagri order karni hai. Price aur delivery batayein.",
  gobar:
    "Namaste! Cow Dung Cake (Gobar Upla) order karna hai. Price?",
  samidha:
    "Namaste! Hawan Wood Sticks (Samidha) order karne hain. Price?",
};

export function getWhatsAppLink(
  type: keyof typeof WA_MESSAGES
): string {
  const msg = encodeURIComponent(WA_MESSAGES[type]);
  return `https://wa.me/919911662492?text=${msg}`;
}
