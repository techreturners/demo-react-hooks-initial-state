import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Joke } from "../joke/joke";

export const Layout: React.FC = () => <div className="App flex flex-col" style={{ 'height': '100vh' }}>
	<Header />
	<main className='pt-6 px-4 bg-neutral-100 flex-grow'>
		<Joke />
	</main>
	<Footer />
</div>;

