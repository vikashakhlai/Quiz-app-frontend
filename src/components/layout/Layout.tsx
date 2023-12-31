import styles from './Layout.module.scss';
import Navigation from './Navigation/Navigation';
import SideBar from './SideBar/SideBar';

import type { FC, PropsWithChildren } from 'react';

export type ReactFC<Props extends Record<PropertyKey, unknown> = {}> = FC<
	PropsWithChildren<Props>
>;

const Layout: ReactFC = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<SideBar />
		</div>
	);
};

export default Layout;
