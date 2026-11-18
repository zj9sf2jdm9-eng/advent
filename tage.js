// =====================================================================
//  HIER TRÄGST DU DEINE INHALTE EIN.
//  Regeln: Texte stehen zwischen `Backticks`. Jeder Tag endet mit  },
//  Leerzeile im Text = neuer Absatz.
//  Testen ohne Datumssperre: Adresse mit ?vorschau öffnen, z. B.
//  https://DEINNAME.github.io/advent/?vorschau#5
// =====================================================================

const EINSTELLUNGEN = {
  jahr: 2026,
  titel: "Für dich, mein Schatz",
  gruss: "24 Tage, 24 kleine Überraschungen.",
};

const TAGE = {

  // Beispiel: nur Text
  1: {
    titel: "Willkommen im Advent",
    text: `Ab heute wartet jeden Morgen eine kleine Überraschung auf dich.

Hier steht dein Text für Tag 1.`,
  },

  // Beispiel: Rätsel – die Belohnung erscheint erst nach der richtigen Antwort
  2: {
    titel: "Ein kleines Rätsel",
    text: `Erinnerst du dich?`,
    raetsel: {
      frage: `Wo hatten wir unser erstes Date?`,
      antwort: ["Café Muster", "cafe muster"],   // mehrere Schreibweisen möglich
      tipp: `Es gab dort den besten Kuchen.`,
      belohnung: `Richtig! ❤️ Heute Abend gehen wir wieder hin.`,
    },
  },

  // Beispiel: Bild + Link (z. B. Spotify-Song)
  3: {
    titel: "Unser Lied",
    bild: "bilder/tag3.jpg",                      // Bild in den Ordner "bilder" hochladen
    text: `Warum dieses Lied zu uns gehört …`,
    link: { text: "Song anhören", url: "https://open.spotify.com/" },
  },

  // Beispiel: Sprachnachricht
  4: {
    titel: "Hör mal",
    text: `Eine Nachricht nur für dich.`,
    audio: "audio/tag4.m4a",                      // Datei in den Ordner "audio" hochladen
  },

  5:  { titel: "", text: `` },
  6:  { titel: "", text: `` },
  7:  { titel: "", text: `` },
  8:  { titel: "", text: `` },
  9:  { titel: "", text: `` },
  10: { titel: "", text: `` },
  11: { titel: "", text: `` },
  12: { titel: "", text: `` },
  13: { titel: "", text: `` },
  14: { titel: "", text: `` },
  15: { titel: "", text: `` },
  16: { titel: "", text: `` },
  17: { titel: "", text: `` },
  18: { titel: "", text: `` },
  19: { titel: "", text: `` },
  20: { titel: "", text: `` },
  21: { titel: "", text: `` },
  22: { titel: "", text: `` },
  23: { titel: "", text: `` },
  24: { titel: "Frohe Weihnachten", text: `` },
};
