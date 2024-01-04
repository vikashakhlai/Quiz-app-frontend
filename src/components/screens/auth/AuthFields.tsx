import Field from '@/components/ui/form-elements/Field';
import { validEmail } from '@/shared/regex';
import { FC } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

interface IAuthFields {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	isPasswordRequired?: boolean;
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email',
					},
				})}
				placeholder="E-mail"
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password es required',
								minLength: {
									value: 6,
									message: 'Min length should more 6 leters!',
								},
							}
						: {}
				)}
				placeholder="Password"
				type="password"
				error={errors.password}
			/>
		</>
	);
};

export default AuthFields;
