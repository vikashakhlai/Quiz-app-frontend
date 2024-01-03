import { ITableItem } from '@/components/ui/user-table/user-table.interface';
import { useDebounce } from '@/hooks/useDebounce';
import { QuestionService } from '@/services/question.service';
import { toastError } from '@/utils/toast-error';
import { useRouter } from 'next/router';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

export const useUserQuestions = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery(
		['questions list', debouncedSearch],
		() => QuestionService.getUserQuestions(),
		{
			select: ({ data }) =>
				data.map(
					(question): ITableItem => ({
						id: question.id,
						editUrl: `manage/question/edit/${question.id}`,
						items: [String(question.quizId), question.question],
					})
				),

			onError: (error) => {
				toastError(error, 'Question list');
			},
		}
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const { mutateAsync: deleteAsync } = useMutation(
		'delete',
		(questionId: number) => QuestionService.delete(questionId),
		{
			onError: (error) => {
				toastError(error, 'Delete question');
			},
			onSuccess: () => {
				toastr.success('Delete question', 'delete question was success!');
				queryData.refetch();
			},
		}
	);

	const { push } = useRouter();

	const { mutateAsync: createAsync } = useMutation(
		'create question',
		() => QuestionService.create(),
		{
			onError: (error) => {
				toastError(error, 'Create question');
			},
			onSuccess: (data) => {
				toastr.success('Create question', 'delete question was success!');
				push(`manage/question/edit/${data.data.id}`);
			},
		}
	);

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync]
	);
};
