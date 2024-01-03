import Quiz from '@/components/screens/quiz/Quiz';
import { useRouter } from 'next/router';
import { FC } from 'react';

const QuestionQuizPage: FC = () => {
	const { query } = useRouter();
	const id = Number(query.id);

	return <Quiz id={id} />;
};

export default QuestionQuizPage;
