import AddFriend from '@/components/screens/friend/AddFriend';
import { NextPageAuth } from '@/shared/types/auth.types';

const AddFriendPage: NextPageAuth = () => {
	return <AddFriend />;
};

AddFriendPage.isOnlyUser = true;

export default AddFriendPage;
