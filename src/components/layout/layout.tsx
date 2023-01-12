import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { DisplayJoke } from "../joke/joke";

export const Layout: React.FC = () => {

	return (<div className="App flex flex-col" style={{ 'height': '100vh' }}>
		<Header />
		<main className='pt-6 px-4 bg-neutral-100 flex-grow'>
			<DisplayJoke />
		</main>
		<Footer />
	</div>);
}

