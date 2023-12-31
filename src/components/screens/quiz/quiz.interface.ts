export interface IQuiz {
	id: number;
	name: string;
	status: string;
}

export interface IUserQuizzes extends Pick<IQuiz, 'name' | 'status'> {}
