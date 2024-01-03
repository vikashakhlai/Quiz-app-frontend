import Button from '@/components/ui/form-elements/Button';
import Heading from '@/components/ui/heading/Heading';
import UserTable from '@/components/ui/user-table/UserTable';
import { NextPageAuth } from '@/shared/types/auth.types';
import Meta from '@/utils/meta/Meta';
import { useUserQuestions } from './useUserQuestions';

const QuestionList: NextPageAuth = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
		table,
	} = useUserQuestions();

	return (
		<Meta title="Questions">
			<Heading title="Questions" />
			<Button onClick={createAsync}>Create question</Button>
			<UserTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Quiz id', 'Question']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

QuestionList.isOnlyUser = true;

export default QuestionList;
