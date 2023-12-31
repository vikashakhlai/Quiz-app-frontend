import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logoImage from '@/assets/images/quiz.svg';

const Logo: FC = () => {
	return (
		<Link href="/">
			<span className="px-layout mb-10 block">
				<Image
					src={logoImage}
					width={107}
					height={14}
					alt="Quiz logo"
					draggable={false}
				/>
			</span>
		</Link>
	);
};

export default Logo;
