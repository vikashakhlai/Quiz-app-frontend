import QuizzesFriend from '@/components/screens/quiz/friend/QuizzesFriend';
import { NextPageAuth } from '@/shared/types/auth.types';

const QuizzesFriendPage: NextPageAuth = () => {
	return <QuizzesFriend />;
};

QuizzesFriendPage.isOnlyUser = true;

export default QuizzesFriendPage;
