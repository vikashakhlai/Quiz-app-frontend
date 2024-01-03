import QuizList from '@/components/screens/quiz/QuizList';
import { NextPageAuth } from '@/shared/types/auth.types';

const QuizzesPage: NextPageAuth = () => {
	return <QuizList />;
};

QuizzesPage.isOnlyUser = true;

export default QuizzesPage;
