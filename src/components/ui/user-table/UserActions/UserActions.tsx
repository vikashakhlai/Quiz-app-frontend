import { useRouter } from 'next/router';
import { FC } from 'react';
import MaterialIcon from '../../MaterialIcon';
import styles from './UserActions.module.scss';
interface IUserActions {
	editUrl: string;
	removeHandler: () => void;
}

const UserActions: FC<IUserActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter();

	return (
		<div className={styles.action}>
			<button onClick={() => push(`${editUrl}`)}>
				<MaterialIcon name="MdEdit" />
			</button>
			<button onClick={removeHandler}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	);
};

export default UserActions;
