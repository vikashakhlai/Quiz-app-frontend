import axios from '@/api/interceptors';
import { IProfileInput } from '@/components/screens/profile/profile.interface';
import { getQuizzesUrl, getUsersUrl } from '@/config/api.config';
import { IUser } from '@/shared/types/user.types';

export const UserService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getQuizzesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},
	async getProfile() {
		return axios.get<IUser>(getUsersUrl('/profile'));
	},
	async getById(id: number) {
		return axios.get<IUser>(getUsersUrl(`${id}`));
	},
	async update(id: number, data: IProfileInput) {
		return axios.put<number>(getUsersUrl(`${id}`), data);
	},
	async updateProfile(data: IProfileInput) {
		return axios.put<string>(getUsersUrl('/profile'), data);
	},
};
