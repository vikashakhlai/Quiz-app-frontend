import Heading from '@/components/ui/heading/Heading';
import { QuestionService } from '@/services/question.service';
import Meta from '@/utils/meta/Meta';
import { useEffect, useState } from 'react';
import { IHome } from './home.interface';

const questionId = 1;

const Home: IHome = () => {
	const [result, setResult] = useState([]);

	useEffect(() => {
		if (!questionId) return;

		const fetchData = async () => {
			const data = await QuestionService.getQuizQuestions(questionId);

			setResult(data.data);
		};

		fetchData();
	}, []);

	// console.log(data);
	const questionId = 1;

	return (
		<Meta title="quiz" description="quiz app">
			<Heading title="Quiz app" className="text-gray-300 mb-8 text-xl" />
			{/* <QuizQuestionList /> */}
			{/* <div>{String(result.length)}</div> */}
			<h3>This Quiz app</h3>
		</Meta>
	);
};

export default Home;
