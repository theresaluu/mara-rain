import { Rain } from './rain';

enum Emotion {
  "Longing", "Anxious", "Overwhelm", "Victimized",
  "Hopeful", "Loved", "Peaceful", "Excited"
};

enum Examine {
  "What unmet needs addressing?",
  "What is happening inside me?",
  "How am I experiencing this in my body?",
  "What am I believing?",
  "What does this feeling want from me?"
};

let reflections: string[] = [
  "Awareness of where I am on my current path",
  "I feel insecure when I cannot trust the word of others",
  "It is draining to combat people's negativity with only my own positivity",
  "There is not much to celebrate",
  "Pair down to what is important",
  "I've made deep connections with amazing people",
  "I am ready for what is to come",
  "I recognize the potential"
]

export const RAINS: Rain[] = [
  { recognize: Emotion[0], inquiry: Examine[0], investigate: reflections[0], nonid: false },
  { recognize: Emotion[1], inquiry: Examine[1], investigate: reflections[1], nonid: false },
  { recognize: Emotion[2], inquiry: Examine[2], investigate: reflections[2], nonid: false },
  { recognize: Emotion[3], inquiry: Examine[3], investigate: reflections[3], nonid: false },
  { recognize: Emotion[4], inquiry: Examine[4], investigate: reflections[4], nonid: false },
  { recognize: Emotion[5], inquiry: Examine[0], investigate: reflections[5], nonid: false },
  { recognize: Emotion[6], inquiry: Examine[1], investigate: reflections[6], nonid: false },
  { recognize: Emotion[7], inquiry: Examine[2], investigate: reflections[7], nonid: false },
  { recognize: Emotion[0], inquiry: Examine[3], investigate: reflections[0], nonid: false },
  { recognize: Emotion[1], inquiry: Examine[4], investigate: reflections[1], nonid: false },
  { recognize: Emotion[2], inquiry: Examine[0], investigate: reflections[2], nonid: false },

];
