import Head from 'next/head';
import { Page500 } from '../Page_Components/Page500/Page500';

export const PageNotFound = () => {
	return (
		<>
			<Head>
				<title>{'[xd] - 500'}</title>
			</Head>
			<Page500 />
		</>
	);
}

export default PageNotFound;