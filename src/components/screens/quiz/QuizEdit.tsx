import SkeletonLoader from '@/components/ui/SkeletonLoader';
import Button from '@/components/ui/form-elements/Button';
import Field from '@/components/ui/form-elements/Field';
import Heading from '@/components/ui/heading/Heading';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { IQuizEditInput } from './quiz-edit.interface';
import { useQuizEdit } from './useQuizEdit';

import formStyles from '../../ui/form-elements/user-form.module.scss';

const QuizEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IQuizEditInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useQuizEdit(setValue);

	return (
		<Meta title="Edit quiz">
			<Heading title="Edit quiz" />
			<form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', { required: 'Name is required!' })}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>
							<label>Status:</label>
							<select
								{...register('status', { required: 'Status is required!' })}
							>
								<option value="one_day">One day</option>
								<option value="three_day">Three day</option>
								<option value="week">Week</option>
								<option value="month">Month</option>
								<option value="year">Year</option>
							</select>
							<Button>Update</Button>
						</div>
					</>
				)}
			</form>
		</Meta>
	);
};

export default QuizEdit;
