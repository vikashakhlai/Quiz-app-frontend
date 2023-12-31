import { ITableItem } from '@/components/ui/user-table/user-table.interface';
import { getQuizzesUrl } from '@/config/api.config';
import { useDebounce } from '@/hooks/useDebounce';
import { QuizService } from '@/services/quiz.service';
import { toastError } from '@/utils/toast-error';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

export const useUserQuizzes = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery(
		['quizzes list', debouncedSearch],
		() => QuizService.getUserQuizzes(),
		{
			select: ({ data }) =>
				data.map(
					(quiz): ITableItem => ({
						id: quiz.id,
						editUrl: getQuizzesUrl(`/user`),
						items: [String(quiz.name), quiz.status],
					})
				),

			onError: (error) => {
				toastError(error, 'Quiz list');
			},
		}
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const { mutateAsync: deleteAsync } = useMutation(
		'delete',
		(userId: number) => QuizService.delete(userId),
		{
			onError: (error) => {
				toastError(error, 'Delete quiz');
			},
			onSuccess: () => {
				toastr.success('Delete quiz', 'delete was success!');
				queryData.refetch();
			},
		}
	);

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
		}),
		[queryData, searchTerm, deleteAsync]
	);
};
