import Background01 from "@assets/decks/background01.jpg";
import Background02 from "@assets/decks/background02.jpg";
import Background03 from "@assets/decks/background03.jpg";

export const Backgrounds = [
    Background01,
    Background02,
    Background03
];

export function randomBackground() {
    return Backgrounds[Math.floor(Math.random() * Backgrounds.length)];
}