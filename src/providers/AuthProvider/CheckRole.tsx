import { useAuth } from '@/hooks/useAuth';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import { useRouter } from 'next/router';
import { FC } from 'react';

const CheckRole: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyUser },
}) => {
	const { user } = useAuth();

	const router = useRouter();

	const Children = () => <>{children}</>;

	const isUser = user;

	if (isUser && isOnlyUser) return <Children />;
	else {
		router.pathname !== '/auth' && router.replace('/auth');
		return null;
	}

	return <div>CheckRole</div>;
};

export default CheckRole;
