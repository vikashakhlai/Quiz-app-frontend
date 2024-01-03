import { QuizService } from '@/services/quiz.service';
import { getKeys } from '@/utils/object/getKeys';
import { toastError } from '@/utils/toast-error';
import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { IQuizEditInput } from './quiz-edit.interface';

export const useQuizEdit = (setValue: UseFormSetValue<IQuizEditInput>) => {
	const { push, query } = useRouter();

	const quizId = Number(query.id);

	const { isLoading } = useQuery(
		['quiz', quizId],
		() => QuizService.getById(quizId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key]);
				});
			},
			onError(error) {
				toastError(error, 'Get quiz');
			},
			enabled: !!query.id,
		}
	);

	const { mutateAsync } = useMutation(
		'update quiz',
		(data: IQuizEditInput) => QuizService.update(quizId, data),
		{
			onSuccess() {
				toastr.success('Update Quiz', 'update was success!');
				push('/quizzes');
			},
			onError(error) {
				toastError(error, 'Get quiz');
			},
		}
	);

	const onSubmit: SubmitHandler<IQuizEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};
