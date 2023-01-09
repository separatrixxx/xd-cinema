import Head from "next/head";
import { AboutPage } from "../Page_Components/AboutPage/AboutPage";

function About(): JSX.Element {	
	return (
		<>
			<Head>
				<title>{'[xd] - О нас'}</title>
			</Head>
			<AboutPage />
		</>
	);
}

export default About;