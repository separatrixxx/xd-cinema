import React from 'react';
import styles from './ArrowBack.module.css';
import {BsArrowLeft} from "react-icons/bs";
import Link from 'next/link';

export const ArrowBack = (): JSX.Element => {
	return (
		<Link href='/' className={styles.arrow}>
			<BsArrowLeft/>
		</Link>
	);
};