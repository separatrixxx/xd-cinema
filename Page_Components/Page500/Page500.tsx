import styles from './Page500.module.css';
import Link from 'next/link';
import { Htag } from '../../Components/Htag/Htag';

export const Page500 = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Link href='/' className={styles.link1}>
				<Htag tag='notFound'>{'Упс... Похоже, на сервере произошла ошибка :('}</Htag>
			</Link>
		</div>
	);
};