import { ITableItem } from '@/components/ui/user-table/user-table.interface';
import { useDebounce } from '@/hooks/useDebounce';
import { QuizService } from '@/services/quiz.service';
import { convertStatusToDate } from '@/utils/date/convertStatusToDate';
import { toastError } from '@/utils/toast-error';
import { useRouter } from 'next/router';
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
						editUrl: `manage/quiz/edit/${quiz.id}`,
						playUrl: `questions/quiz/${quiz.id}`,
						isBlocked: quiz.isPassed,
						items: [
							String(quiz.id),
							quiz.name,
							String(
								convertStatusToDate(quiz.status, quiz.updatedAt, quiz.isPassed)
							),
							String(quiz.isPassed),
						],
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

	const { push } = useRouter();

	const { mutateAsync: createAsync } = useMutation(
		'create quiz',
		() => QuizService.create(),
		{
			onError: (error) => {
				toastError(error, 'Create quiz');
			},
			onSuccess: (data) => {
				toastr.success('Create quiz', 'create was success!');
				push(`manage/quiz/edit/${data.data.id}`);
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
