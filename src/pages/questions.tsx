import QuestionList from '@/components/screens/question/QuestionList';
import { NextPageAuth } from '@/shared/types/auth.types';

const QuestionsPage: NextPageAuth = () => {
	return <QuestionList />;
};

QuestionsPage.isOnlyUser = true;

export default QuestionsPage;
