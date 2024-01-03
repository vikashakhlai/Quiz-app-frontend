import { QuestionService } from '@/services/question.service';
import { FC, useEffect, useState } from 'react';
import { IQuestion } from '../question/question.interface';
// import { data } from './quiz.data'
import Button from '@/components/ui/form-elements/Button';
import { QuizService } from '@/services/quiz.service';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';
import styles from './Quiz.module.scss';
// import { data } from './quiz.data.ts';

// const questionId = 1;

const Quiz: FC<id> = ({ id }) => {
	// const { data, isLoading } = useQuizData(questionId);

	const [result, setResult] = useState<IQuestion[]>([]);

	useEffect(() => {
		if (!id) return;

		const fData = async () => {
			const data = await QuizService.updatePassed(id);
			return data;
		};

		fData();
	}, []);

	useEffect(() => {
		if (!id) return;

		const fetchData = async () => {
			const data = await QuestionService.getQuizQuestions(id);

			setResult(data.data);
		};

		fetchData();
	}, []);

	// console.log(data);
	const questionId = 1;

	// return <QuizQuestionList items={data || []} isLoading={isLoading} />;

	// const data: IQuiz = JSON.parse(q);
	// console.log(data);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [point, setPoint] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const { push } = useRouter();
	const pathname = usePathname();
	const maxSize = result.length;

	const handleAnswerClick = (choice: string) => {
		if (result[currentQuestion].answer[0] === choice) {
			const thisPoints = point;
			setPoint(point + 1);
		}
		const next = currentQuestion + 1;
		next < maxSize ? setCurrentQuestion(next) : setShowResult(true);
	};

	return (
		<div className={styles.container}>
			{showResult ? (
				<div className={styles.result}>
					<h3>
						You get {point} points of {maxSize}
					</h3>
					<Button onClick={() => push('/')}>Go home</Button>
				</div>
			) : (
				<>
					<h3>
						Question {currentQuestion + 1}/{result.length}
					</h3>
					{result[currentQuestion]?.image && (
						<Image
							src={result[currentQuestion]?.image || ''}
							height={40}
							width={200}
							alt=""
						/>
					)}
					{result[currentQuestion]?.video && (
						<>
							<ReactPlayer
								src={result[currentQuestion]?.video}
								width="500px"
								height="400px"
								controls={true}
								// light is usefull incase of dark mode
								light={false}
								// picture in picture
								pip={true}
							/>
							<source src={result[currentQuestion]?.video} type="video/mp4" />
						</>
					)}
					<span className={styles.question}>
						{result[currentQuestion]?.question}
					</span>
					<div className={styles.buttons}>
						{result[currentQuestion]?.answer_options
							?.sort(function () {
								return 0.5 - Math.random();
							})
							.map((choice: string) => (
								<Button onClick={() => handleAnswerClick(choice)}>
									{choice}
								</Button>
							))}
					</div>
				</>
			)}
			{/* {data.map((question) => (
				<QuizItem
					question={question.question}
					choices={question.choices}
					answer={question.answer}
				/>
			))} */}
		</div>
		// );
	);
};

export default Quiz;
