import { IAuthResponse, ITokens } from '@/store/user/user.interface';

import Cookies from 'js-cookie';

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken);
	Cookies.set('refreshToken', data.refreshToken);
};

export const removeTokensStorage = () => {
	Cookies.remove('accessToken');
	Cookies.remove('refreshToken');
};

export const saveToStorage = (data: IAuthResponse) => {
	localStorage.setItem('user', JSON.stringify(data.user));
};
