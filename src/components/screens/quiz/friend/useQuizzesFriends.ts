import { ITableItem } from '@/components/ui/user-table/user-table.interface';
import { useDebounce } from '@/hooks/useDebounce';
import { QuizService } from '@/services/quiz.service';
import { UserService } from '@/services/user.service';
import { convertStatusToDate } from '@/utils/date/convertStatusToDate';
import { toastError } from '@/utils/toast-error';
import { useRouter } from 'next/router';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

export const useQuizzesFriends = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery(
		['quizzes friends list', debouncedSearch],
		() => UserService.getFriendsQuizzes(),
		{
			select: ({ data }) =>
				data[0].map(
					(quiz): ITableItem => ({
						id: +quiz.id,
						editUrl: ``,
						playUrl: `question/${quiz.id}`,
						isBlocked: quiz.isPassed,
						isQuizFriends: true,
						items: [
							String(quiz.id),
							quiz.name,
							String(
								convertStatusToDate(
									quiz.status,
									quiz.updatedAt,
									quiz.isPassed,
									quiz.id
								)
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
