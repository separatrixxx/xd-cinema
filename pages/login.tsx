import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AuthPage } from '../Page_Components/AuthPage/AuthPage';

function Login(): JSX.Element {
	const router = useRouter();
	
	useEffect(() => {
        let id = localStorage.getItem('user_id');

        if (id) {
            router.push('/user');
        }
    })
	
	return (
		<>
			<Head>
				<title>{'[xd] - Авторизация'}</title>
			</Head>
			<AuthPage type='login' />
		</>
	);
}

export default Login;