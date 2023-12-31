import Heading from '@/components/ui/heading/Heading';
import Meta from '@/utils/meta/Meta';
import { IHome } from './home.interface';

const Home: IHome = () => {
	return (
		<Meta title="quiz" description="quiz app">
			<Heading title="Quiz app" className="text-gray-300 mb-8 text-xl" />
			{/* <button onClick={() => toastr.success('Auth', 'You have success!')}>
				Show message
			</button> */}
		</Meta>
	);
};

export default Home;
