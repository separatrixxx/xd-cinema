import styles from './Page404.module.css';
import Link from 'next/link';
import { Htag } from '../../Components/Htag/Htag';

export const Page404 = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Link href='/' className={styles.link1}>
				<Htag tag='notFound'>{'Упс... Похоже, такой страницы не существует :('}</Htag>
			</Link>
		</div>
	);
};