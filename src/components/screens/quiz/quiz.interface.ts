export interface IQuiz {
	id: number;
	name: string;
	status: string;
	isPassed?: boolean;
}

export interface IQuizItem {
	id: number;
	data: string[];
}

export interface IQuizWithUpdateDate extends IQuiz {
	updatedAt: Date;
}

export interface IUserQuizzes extends Pick<IQuiz, 'name' | 'status'> {}
