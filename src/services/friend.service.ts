import axios from '@/api/interceptors';
import { IFriendAddInput } from '@/components/friend/add-friend.interface.ts';
import { IFriend } from '@/components/screens/friend/friend.interface';
import { getUsersUrl } from '@/config/api.config';

export const FriendService = {
	async getUserFriends() {
		return axios.get<IFriend[]>(getUsersUrl('/friend'));
	},
	async addFriend(data: IFriendAddInput) {
		return axios.post<string>(getUsersUrl('/friend'), data);
	},
	async deleteFriend(friendId: number) {
		return axios.delete<IFriend>(getUsersUrl('/friend'));
	},
};
