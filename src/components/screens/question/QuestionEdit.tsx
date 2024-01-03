import SkeletonLoader from '@/components/ui/SkeletonLoader';
import Button from '@/components/ui/form-elements/Button';
import Field from '@/components/ui/form-elements/Field';
import UploadField from '@/components/ui/form-elements/UploadFild/UploadField';
import Heading from '@/components/ui/heading/Heading';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import formStyles from '../../ui/form-elements/user-form.module.scss';
import { IQuestionEditInput } from './question.interface';
import { useQuestionEdit } from './useQuestionEdit';

const QuestionEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IQuestionEditInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useQuestionEdit(setValue);

	return (
		<Meta title="Edit question">
			<Heading title="Edit question" />
			<form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('question', { required: 'Question is required!' })}
								placeholder="Question"
								// error={errors.name}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('answer', { required: 'Answer is required!' })}
								placeholder="Answer"
								// error={errors.name}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('answer_options', {
									required: 'Options is required!',
								})}
								placeholder="Answer options"
								// error={errors.name}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('quizId', {
									required: 'Quiz id is required!',
								})}
								placeholder="Quiz id"
								// error={errors.name}
								style={{ width: '31%' }}
							/>
							<Controller
								control={control}
								name="image"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										error={error}
										folder="images"
										placeholder="Image"
									/>
								)}
							></Controller>
							<Controller
								control={control}
								name="video"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										error={error}
										folder="videos"
										placeholder="Video"
									/>
								)}
							></Controller>

							{/* <label>Status:</label>
							<select
								{...register('status', { required: 'Status is required!' })}
							>
								<option value="one_day">One day</option>
								<option value="three_day">Three day</option>
								<option value="week">Week</option>
								<option value="month">Month</option>
								<option value="year">Year</option>
							</select> */}
							<Button>Update</Button>
						</div>
					</>
				)}
			</form>
		</Meta>
	);
};

export default QuestionEdit;
