const Footer: React.FC = () => {

	const demoCreated = 2022;

	const year = new Date().getFullYear();

	return (<footer className='bg-danger text-center p-3 text-white'>
		Cool footer here! 😎😎

		{/* We want to claim copyright over this important demo FOREVER 😁 
			So let's add a year range from the date we made it updating to the current year, whatever that is.		
			Note: This may or may not be legally relevant but it's fun to do it anyway.
		*/}

		<p>@ Us {demoCreated}
			{year !== demoCreated ? `—${year}` : ''}</p>
	</footer>)
}

export default Footer;