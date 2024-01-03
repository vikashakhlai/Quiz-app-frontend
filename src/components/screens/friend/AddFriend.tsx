import Button from '@/components/ui/form-elements/Button';
import Field from '@/components/ui/form-elements/Field';
import Heading from '@/components/ui/heading/Heading';
import { NextPageAuth } from '@/shared/types/auth.types';
import Meta from '@/utils/meta/Meta';
import { useForm } from 'react-hook-form';
import formStyles from '../../ui/form-elements/user-form.module.scss';
import { useUserFriends } from './useFriends';

const AddFriend: NextPageAuth = () => {
	const { register, handleSubmit } = useForm();
	const { createAsync } = useUserFriends();

	return (
		<Meta title="Edit quiz">
			<Heading title="Edit quiz" />
			<form
				onSubmit={handleSubmit((data) => createAsync(data))}
				className={formStyles.form}
			>
				<>
					<div className={formStyles.fields}>
						<Field
							{...register('friendId', { required: 'Friend Id is required!' })}
							placeholder="Friend Id"
							style={{ width: '31%' }}
						/>
						<Button>Add friend</Button>
					</div>
				</>
			</form>
		</Meta>
	);
};

export default AddFriend;
