import Head from 'next/head';
import { Header } from '../layout/Header/Header';
import { HookahForm } from '../Page_Components/HookahForm/HookahForm';

function Hookah(): JSX.Element {	
	return (
		<>
			<Head>
				<title>{'[xd] - Кальянная'}</title>
			</Head>
			<HookahForm />
		</>
	);
}

export default Hookah;