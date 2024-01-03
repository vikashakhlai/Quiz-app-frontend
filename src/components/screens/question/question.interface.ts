export interface IQuestion {
	id: number;
	image?: string;
	video?: string;
	question: string;
	answer_options: string[];
	answer: string[];
	quizId: number;
}

export interface IQuestionEditInput extends Omit<IQuestion, 'id'> {}
