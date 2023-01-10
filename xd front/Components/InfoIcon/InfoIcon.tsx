import styles from './InfoIcon.module.css';
import Link from 'next/link';
import { TbInfoCircle } from 'react-icons/tb';

export const InfoIcon = (): JSX.Element => {
	return (
		<Link href='/about' className={styles.info}>
            <TbInfoCircle />
        </Link>
	);
};