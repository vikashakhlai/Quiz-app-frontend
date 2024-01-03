import Heading from '@/components/ui/heading/Heading';
import { NextPageAuth } from '@/shared/types/auth.types';
import Meta from '@/utils/meta/Meta';

const questionId = 1;

const Home: NextPageAuth = () => {
	// console.log(data);
	const questionId = 1;

	return (
		<Meta title="quiz" description="quiz app">
			<Heading title="Quiz app" className="text-gray-300 mb-8 text-xl" />
			<h3>This Quiz app</h3>
		</Meta>
	);
};

Home.isOnlyUser = true;

export default Home;
