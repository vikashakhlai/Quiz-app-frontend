import Heading from '@/components/ui/heading/Heading';
import UserTable from '@/components/ui/user-table/UserTable';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useQuizzesFriends } from './useQuizzesFriends';

const QuizzesFriend: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
		table,
	} = useQuizzesFriends();

	return (
		<Meta title="Quizzes friends">
			<Heading title="Quizzes friends" />
			<UserTable
				isLoading={isLoading}
				headerItems={['Id', 'Name', 'Day unblocked', 'IsPassed']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default QuizzesFriend;
