import { FlapperSpinner } from "react-spinners-kit";

const LoadingIndicator: React.FC = () => <div className='flex items-center justify-center pt-8'>
	<FlapperSpinner size={200} />
</div>;

export default LoadingIndicator;