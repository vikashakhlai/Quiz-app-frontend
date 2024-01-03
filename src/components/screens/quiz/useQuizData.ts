import axios from '@/api/interceptors';
import { useQuery } from 'react-query';
import { IQuestion } from '../question/question.interface';
import { IQuizItem } from './quiz.interface';

export const useQuizData = (questionId: number) => {
	// http://localhost:3000/api/questions/quiz/1

	const { data, isLoading } = useQuery(
		['questions', questionId],
		() =>
			axios.get<IQuestion[]>(
				`http://localhost:3000/api/questions/quiz/${questionId}`
			),
		{
			select: ({ data }) =>
				data.map(
					(question): IQuizItem => ({
						id: question.id,
						data: [
							String(question.answer),
							String(question.answer_options),
							String(question.image),
							question.question,
							String(question.video),
							String(question.quizId),
						],
					})
				),
		}
	);

	return { data, isLoading };
};
