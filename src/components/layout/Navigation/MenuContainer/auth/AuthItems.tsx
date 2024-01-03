import { useAuth } from '@/hooks/useAuth';
import { FC } from 'react';
import MenuItem from '../MenuItem';
import LogoutButton from './LogoutButton';

const AuthItems: FC = () => {
	const { user } = useAuth();

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<>
					<MenuItem
						item={{
							icon: 'MdLogin',
							link: '/auth',
							title: 'Login',
						}}
					/>
				</>
			)}
		</>
	);
};

export default AuthItems;
