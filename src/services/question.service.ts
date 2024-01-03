import axios from '@/api/interceptors';
import {
	IQuestion,
	IQuestionEditInput,
} from '@/components/screens/question/question.interface';
import { getQuestionsUrl } from '@/config/api.config';

export const QuestionService = {
	// async getAll(searchTerm?: string) {
	// 	return axios.get<IQuestion[]>(getQuestionsUrl(''), {
	// 		params: searchTerm ? { searchTerm } : {},
	// 	});
	// },

	async getUserQuestions() {
		return axios.get<IQuestion[]>(getQuestionsUrl('/user'));
	},

	async getQuizQuestions(id: number) {
		return axios.get<IQuestion[]>(getQuestionsUrl(`/quiz/${id}`));
	},

	async create() {
		return axios.post<number>(getQuestionsUrl('/'));
	},

	async getById(id: number) {
		return axios.get<IQuestionEditInput>(getQuestionsUrl(`/${id}`));
	},

	async update(id: number, data: IQuestionEditInput) {
		return axios.put<number>(getQuestionsUrl(`/${id}`), data);
	},

	async delete(id: number) {
		return axios.delete<number>(getQuestionsUrl(`/${id}`));
	},
};
