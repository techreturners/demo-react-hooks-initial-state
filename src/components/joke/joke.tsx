export interface Joke {
	setup: string;
	delivery: string;
}

export const DisplayJoke: React.FC = () => <article className='mt-3 text-center'>
	<div className='text-primary font-bold text-2xl'>I walked into a bar once.</div>
	<div className='text-primary text-2xl'>It really hurt my head.</div>
</article>;
