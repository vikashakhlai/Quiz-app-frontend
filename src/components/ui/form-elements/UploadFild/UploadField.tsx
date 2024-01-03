import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import styles from '../../../ui/form-elements/form.module.scss';
import SkeletonLoader from '../../SkeletonLoader';
import { IUploadField } from '../form.interface';
import { useUpload } from './useUpload';

const UploadField: FC<IUploadField> = ({
	onChange,
	error,
	folder,
	placeholder,
	isNoImage = false,
	style,
	value,
}) => {
	const { isLoading, uploadFile } = useUpload(onChange, folder);

	return (
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>

				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className="w-full h-full" />
						) : (
							value && <Image alt="" src={value} layout="fill" unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default UploadField;
