import { FC } from 'react';
import UserActions from './UserActions/UserActions';
import styles from './UserTable.module.scss';
import { IUserTableItem } from './user-table.interface';
const UserTableItem: FC<IUserTableItem> = ({ removeHandler, tableItem }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value) => (
				<div>{value}</div>
			))}
			<UserActions
				editUrl={tableItem.editUrl}
				playUrl={tableItem.playUrl}
				removeHandler={removeHandler}
				isBlocked={tableItem.isBlocked}
				isQuizFriends={tableItem.isQuizFriends}
			/>
		</div>
	);
};

export default UserTableItem;
