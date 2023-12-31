import SkeletonLoader from '@/components/ui/SkeletonLoader';
import Heading from '@/components/ui/heading/Heading';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import AuthFields from '../auth/AuthFields';
import styles from './Profile.module.scss';
import { IProfileInput } from './profile.interface';
import { useProfile } from './useProfile';

const Profile: FC = () => {
	const { handleSubmit, register, setValue, formState } =
		useForm<IProfileInput>({
			mode: 'onChange',
		});

	const { isLoading, onSubmit } = useProfile(setValue);

	return (
		<Meta title="Auth">
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Heading title="Profile" className="mb-6" />
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<AuthFields formState={formState} register={register} />
				)}

				<div className={styles.buttons}>{/* <Button>Update</Button> */}</div>
			</form>
		</Meta>
	);
};

export default Profile;
