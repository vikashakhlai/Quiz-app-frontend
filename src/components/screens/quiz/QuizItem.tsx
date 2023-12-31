import { FC } from 'react';

const QuizItem: FC = ({ answer, choices, question }) => {
	return (
		<div>
			<h3>{question}</h3>
			{choices.map((choi) => (
				<span>{choi}</span>
			))}
		</div>
	);
};

export default QuizItem;
