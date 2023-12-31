import Layout from '@/components/layout/Layout';
import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import { store } from '@/store/store';
import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import AuthProvider from './AuthProvider/AuthProvider';
import HeadProvider from './HeadProvider/HeadProvider';
import ReduxToast from './ReduxToast';

export type ReactFC<Props extends Record<PropertyKey, unknown> = {}> = FC<
	PropsWithChildren<Props>
>;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	);
};

export default MainProvider;