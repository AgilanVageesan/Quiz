import { Answer } from "./Answer";

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
  correctAnswer?: number;
  userAnswer?: number;
  isCorrect?: boolean;
}
