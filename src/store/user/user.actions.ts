// register

import { errorCatch } from '@/api/api.helpers';
import { AuthService } from '@/services/auth/auth.service';
import { toastError } from '@/utils/toast-error';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';
import { IAuthResponse, IEmailPassword } from './user.interface';

//register
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password);
			toastr.success('Registration', 'Completed success');
			return response.data;
		} catch (err) {
			toastError(err);
			return thunkApi.rejectWithValue(err);
		}
	}
);

// login
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password);
			toastr.success('Login', 'Completed success');
			return response.data;
		} catch (err) {
			toastError(err);
			return thunkApi.rejectWithValue(err);
		}
	}
);

//logout
export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
	await AuthService.logout();
});

//checkAuth
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens();
			return response.data;
		} catch (err) {
			if (errorCatch(err) == 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorization is finished, please sign in again'
				);
				thunkApi.dispatch(logout());
			}
			toastError(err);
			return thunkApi.rejectWithValue(err);
		}
	}
);
