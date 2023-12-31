import UserTable from '@/components/ui/user-table/UserTable';
import Meta from '@/utils/meta/Meta';
import { Heading } from 'lucide-react';
import { FC } from 'react';
import { useUserFriends } from './useFriends';

const FriendsList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync, table } =
		useUserFriends();

	return (
		<Meta title="Friends">
			<Heading title="Friends" />
			<UserTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default FriendsList;
