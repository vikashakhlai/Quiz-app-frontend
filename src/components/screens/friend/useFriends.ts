import { ITableItem } from '@/components/ui/user-table/user-table.interface';
import { getUsersUrl } from '@/config/api.config';
import { useDebounce } from '@/hooks/useDebounce';
import { FriendService } from '@/services/friend.service';
import { QuizService } from '@/services/quiz.service';
import { toastError } from '@/utils/toast-error';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

export const useUserFriends = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery(
		['friend list', debouncedSearch],
		() => FriendService.getUserFriends(),
		{
			select: ({ data }) =>
				data.map(
					(friend): ITableItem => ({
						id: friend.id,
						editUrl: getUsersUrl(`/edit/friends/quiz`),
						items: [friend.email],
					})
				),

			onError: (error) => {
				toastError(error, 'Friends list');
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
