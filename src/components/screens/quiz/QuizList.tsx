import Heading from '@/components/ui/heading/Heading';
import UserTable from '@/components/ui/user-table/UserTable';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useUserQuizzes } from './useUserQuizzes';

const QuizList: FC = () => {
	// const { handleSearch, isLoading, searchTerm, data, deleteAsync, table } =
	// 	useQuizzes();
	const { handleSearch, isLoading, searchTerm, data, deleteAsync, table } =
		useUserQuizzes();

	return (
		<Meta title="Quizzes">
			<Heading title="Quizzes" />
			<UserTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Status']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default QuizList;
