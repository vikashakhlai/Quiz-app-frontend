import cn from 'classnames';
import { FC } from 'react';
import styles from './UserTable.module.scss';
const UserTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<div className={cn(styles.item, styles.itemHeader)}>
			{headerItems.map((val) => (
				<div key={val}>{val}</div>
			))}
			<div>Actions</div>
		</div>
	);
};

export default UserTableHeader;
