import { FC, useState } from 'react';

const Quiz: FC = ({ data }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [point, setPoint] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const maxSize = data.length;

	const handleAnswerClick = (choice: string) => {
		if (data[currentQuestion].answer === choice) {
			const thisPoints = point;
			setPoint(point + 1);
		}
		const next = currentQuestion + 1;
		next < maxSize ? setCurrentQuestion(next) : setShowResult(true);
	};

	return (
		<div>
			{showResult ? (
				<span>
					You get {point} points of {maxSize}
				</span>
			) : (
				<>
					<h3>
						Question {currentQuestion + 1}/{data.length}
					</h3>
					<span>{data[currentQuestion].question}</span>
					<div>
						{data[currentQuestion].choices.map((choice: string) => (
							<button onClick={() => handleAnswerClick(choice)}>
								{choice}
							</button>
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
	);
};

export default Quiz;
