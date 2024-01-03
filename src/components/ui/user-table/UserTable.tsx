import { FC } from 'react';
import SkeletonLoader from '../SkeletonLoader';
import styles from './UserTable.module.scss';
import UserTableHeader from './UserTableHeader';
import UserTableItem from './UserTableItem';
import { ITableItem } from './user-table.interface';

interface IUserTable {
	tableItems: ITableItem[];
	isLoading: boolean;
	headerItems: string[];
	removeHandler?: (id: number) => void;
}

const UserTable: FC<IUserTable> = ({
	headerItems,
	isLoading,
	removeHandler,
	tableItems,
}) => {
	return (
		<div>
			<UserTableHeader headerItems={headerItems} />

			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((el) => (
					<UserTableItem
						key={el.id}
						removeHandler={() => removeHandler(el.id)}
						tableItem={el}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
		</div>
	);
};

export default UserTable;
