import FriendsList from '@/components/screens/friend/FriendsList';
import { NextPageAuth } from '@/shared/types/auth.types';

const FriendsPage: NextPageAuth = () => {
	return <FriendsList />;
};

FriendsPage.isOnlyUser = true;

export default FriendsPage;
