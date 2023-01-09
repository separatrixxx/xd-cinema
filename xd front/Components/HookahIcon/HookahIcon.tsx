import styles from './HookahIcon.module.css';
import Link from 'next/link';
import { TbSofa } from 'react-icons/tb';

export const HookahIcon = (): JSX.Element => {
	return (
		<Link href='/hookah' className={styles.hookah}>
            <TbSofa />
        </Link>
	);
};