import Head from 'next/head';
import { Page404 } from '../Page_Components/Page404/Page404';

export const PageNotFound = () => {
	return (
		<>
			<Head>
				<title>{'[xd] - 404'}</title>
			</Head>
			<Page404 />
		</>
	);
}

export default PageNotFound;