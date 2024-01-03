import axios from '@/api/interceptors';

import { IProfileInput } from '@/components/screens/profile/profile.interface';
import { getQuizzesUrl, getUsersUrl } from '@/config/api.config';
import { IQuiz } from '@/shared/types/quiz.types';
import { IUser, IUserWithFriendId } from '@/shared/types/user.types';

export const UserService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getQuizzesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},
	async getProfile() {
		return axios.get<IUserWithFriendId>(getUsersUrl('/profile'));
	},
	async getById(id: number) {
		return axios.get<IUser>(getUsersUrl(`${id}`));
	},
	async getFriendsQuizzes() {
		return axios.get<IQuiz[]>(getUsersUrl(`/friends/quiz`));
	},
	async update(id: number, data: IProfileInput) {
		return axios.put<number>(getUsersUrl(`${id}`), data);
	},
	async updateProfile(data: IProfileInput) {
		return axios.put<string>(getUsersUrl('/profile'), data);
	},
	async addFriend(data: IFriendAddInput) {
		return axios.post<string>(getUsersUrl('/friend'), data);
	},
};
