import { useRouter } from 'next/router';
import { FC } from 'react';
import MaterialIcon from '../../MaterialIcon';
import styles from './UserActions.module.scss';
interface IUserActions {
	editUrl: string;
	playUrl?: string;
	isBlocked?: boolean;
	isQuizFriends?: boolean;
	removeHandler: () => void;
}

const UserActions: FC<IUserActions> = ({
	editUrl,
	removeHandler,
	playUrl,
	isBlocked,
	isQuizFriends,
}) => {
	const { push } = useRouter();

	return (
		<div className={styles.action}>
			{playUrl && !isBlocked && (
				<button onClick={() => push(`${playUrl}`)}>
					<MaterialIcon name="MdLocalPlay" />
				</button>
			)}
			{editUrl !== '' && (
				<button onClick={() => push(`${editUrl}`)}>
					<MaterialIcon name="MdEdit" />
				</button>
			)}
			{!isQuizFriends && (
				<button onClick={removeHandler}>
					<MaterialIcon name="MdClose" />
				</button>
			)}
		</div>
	);
};

export default UserActions;
