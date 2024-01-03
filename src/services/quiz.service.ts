import axios from '@/api/interceptors';
import { IQuestionEditInput } from '@/components/screens/question/question.interface.ts';
import {
	IQuiz,
	IQuizWithUpdateDate,
} from '@/components/screens/quiz/quiz.interface';
import { getQuizzesUrl } from '@/config/api.config';

export const QuizService = {
	async getAll(searchTerm?: string) {
		return axios.get<IQuiz[]>(getQuizzesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},

	async getUserQuizzes() {
		return axios.get<IQuizWithUpdateDate[]>(getQuizzesUrl('/user'));
	},

	async create() {
		return axios.post<number>(getQuizzesUrl('/'));
	},

	async getById(id: number) {
		return axios.get<IQuestionEditInput>(getQuizzesUrl(`/${id}`));
	},

	async update(id: number, data: IQuestionEditInput) {
		return axios.put<number>(getQuizzesUrl(`/${id}`), data);
	},

	async updatePassed(id: number) {
		return axios.patch<number>(getQuizzesUrl(`/${id}`));
	},
	async updateNoPassed(id: number) {
		return axios.patch<number>(getQuizzesUrl(`/noPassed/${id}`));
	},

	async delete(id: number) {
		return axios.delete<number>(getQuizzesUrl(`/${id}`));
	},
};
