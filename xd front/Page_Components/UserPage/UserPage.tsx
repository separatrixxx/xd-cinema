import { UserProps } from './UserPage.props';
import styles from './UserPage.module.css';
import { Header } from '../../layout/Header/Header';
import Head from 'next/head';
import { Htag } from '../../Components/Htag/Htag';
import { formatDateReg } from '../../helpers/helpers_format';
import { useRouter } from 'next/router';

export const UserPage = ({ userName, userDate }: UserProps): JSX.Element => {
    const router = useRouter();

	return (
       <>
        <Head>
			<title>{'[xd] - ' + userName}</title>
		</Head>
        <Header searchInput={false} />
		<div className={styles.wrapper}>
            <Htag tag='xl'>{userName}</Htag>
            <p className={styles.regDate}>{formatDateReg(userDate)}</p>
            <p className={styles.exit} onClick={() => {
                localStorage.clear();
                router.push('/');
            }}>Выйти</p>
		</div>
       </>
	);
};