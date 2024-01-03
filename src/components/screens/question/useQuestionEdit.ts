import { QuestionService } from '@/services/question.service';
import { getKeys } from '@/utils/object/getKeys';
import { toastError } from '@/utils/toast-error';
import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { IQuestionEditInput } from './question.interface';

export const useQuestionEdit = (
	setValue: UseFormSetValue<IQuestionEditInput>
) => {
	const { push, query } = useRouter();

	const questionId = Number(query.id);

	const { isLoading } = useQuery(
		['question', questionId],
		() => QuestionService.getById(questionId),
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
		(data: IQuestionEditInput) => {
			data.answer_options = data.answer_options.toString().split(',');
			data.answer = data.answer.toString().split(',');

			return QuestionService.update(questionId, data);
		},
		{
			onSuccess() {
				toastr.success('Update Question', 'update was success!');
				push('/questions');
			},
			onError(error) {
				toastError(error, 'Update question');
			},
		}
	);

	const onSubmit: SubmitHandler<IQuestionEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading };
};
