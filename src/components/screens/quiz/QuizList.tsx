import Button from '@/components/ui/form-elements/Button';
import Heading from '@/components/ui/heading/Heading';
import UserTable from '@/components/ui/user-table/UserTable';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useUserQuizzes } from './useUserQuizzes';

const QuizList: FC = () => {
	// const { handleSearch, isLoading, searchTerm, data, deleteAsync, table } =
	// 	useQuizzes();
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
		table,
	} = useUserQuizzes();

	return (
		<Meta title="Quizzes">
			<Heading title="Quizzes" />
			<Button onClick={createAsync}>Create Quiz</Button>
			<UserTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Id', 'Name', 'Day unblocked', 'IsPassed']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default QuizList;
