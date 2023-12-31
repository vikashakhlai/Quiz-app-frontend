import axios from '@/api/interceptors';
import { IFriend } from '@/components/screens/friend/friend.interface';
import { getUsersUrl } from '@/config/api.config';

export const FriendService = {
	async getUserFriends() {
		return axios.get<IFriend[]>(getUsersUrl('/friend'));
	},
};
