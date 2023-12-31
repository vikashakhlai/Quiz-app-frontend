import axios from '@/api/interceptors';
import { IQuiz } from '@/components/screens/quiz/quiz.interface';
import { getQuizzesUrl } from '@/config/api.config';

export const QuizService = {
	async getAll(searchTerm?: string) {
		return axios.get<IQuiz[]>(getQuizzesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},

	async getUserQuizzes() {
		return axios.get<IQuiz[]>(getQuizzesUrl('/user'));
	},

	async delete(id: number) {
		return axios.delete<number>(getQuizzesUrl(`/${id}`));
	},
};
