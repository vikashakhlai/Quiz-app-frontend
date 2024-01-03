import { ITableItem } from '@/components/ui/user-table/user-table.interface';
import { getUsersUrl } from '@/config/api.config';
import { useDebounce } from '@/hooks/useDebounce';
import { FriendService } from '@/services/friend.service';
import { toastError } from '@/utils/toast-error';
import { useRouter } from 'next/router';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { IFriendAddInput } from './add-friend.interface';

export const useUserFriends = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const { push } = useRouter();

	const queryData = useQuery(
		['friends list', debouncedSearch],
		() => FriendService.getUserFriends(),
		{
			select: ({ data }) =>
				data.map(
					(friend): ITableItem => ({
						id: friend.id,
						editUrl: getUsersUrl(`/edit/friend`),
						items: [String(friend.id), friend.email],
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
		(userId: number) => FriendService.deleteFriend(userId),
		{
			onError: (error) => {
				toastError(error, 'Delete friend');
				push('/friends');
			},
			onSuccess: () => {
				toastr.success('Delete friend', 'delete was success!');
				queryData.refetch();
				push('/friends');
			},
		}
	);

	const { mutateAsync: createAsync } = useMutation(
		'create',
		(friendId: IFriendAddInput) => FriendService.addFriend(friendId),
		{
			onError: (error) => {
				toastError(error, 'Add friend');
			},
			onSuccess: () => {
				toastr.success('Add friend', 'add friend was success!');
				push('/friends');
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
		[queryData, searchTerm, deleteAsync, createAsync]
	);
};
