import { IQuiz } from './quiz.interface';

export interface IQuizEditInput extends Omit<IQuiz, 'id'> {}
