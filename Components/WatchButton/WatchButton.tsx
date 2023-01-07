import React from 'react';
import styles from './WatchButton.module.css';
import { VscDebugStart } from "react-icons/vsc";
import Link from 'next/link';

export const WatchButton = (): JSX.Element => {
	return (
		<Link href='/movie/404900'>
			<button className={styles.watchButton}>
				<VscDebugStart />
				<p>Смотреть</p>
			</button>
		</Link>
	);
};