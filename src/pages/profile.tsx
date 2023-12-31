import Profile from '@/components/screens/profile/Profile';
import { NextPageAuth } from '@/shared/types/auth.types';
import { useState } from 'react';
const ProfilePage: NextPageAuth = () => {
	const [isShow, setIsShow] = useState(false);

	return (
		<>
			{/* {isShow ? <Quiz data={data} /> : null}
			<button onClick={() => setIsShow(true)}>Quiz</button> */}

			<Profile />
		</>
	);
};

ProfilePage.isOnlyUser = true;

export default ProfilePage;
