import Button from '@/components/ui/form-elements/Button';
import UserTable from '@/components/ui/user-table/UserTable';
import Meta from '@/utils/meta/Meta';

import Heading from '@/components/ui/heading/Heading';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useUserFriends } from './useFriends';

const FriendsList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync, table } =
		useUserFriends();


	const { push } = useRouter();

	return (
		<Meta title="Friends">
			<Heading title="Friends" />
			<Button onClick={() => push('/manage/friend/add')}>Add friend</Button>
			<UserTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Id', 'Email']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default FriendsList;
