import React from 'react';
import styles from './Tr.module.css';
import cn from 'classnames';
import { TrProps } from './Tr.props';

export const Tr = ({ date, country, genres, producer, children }: TrProps): JSX.Element => {
	if (date) {
		return (
			<tr className={styles.tr}>
				<td className={styles.td}>
					<p className={styles.text1}>{children}</p>
				</td>
				<td className={styles.td}>
					<p className={styles.text2}>{date}</p>
				</td>
			</tr>
		);
	} else if (country) {
		return (
			<tr className={styles.tr}>
				<td className={styles.td}>
					<p className={styles.text1}>{children}</p>
				</td>
				<td className={styles.td}>
					<p className={styles.text2}>{country}</p>
				</td>
			</tr>
		);
	} else if (genres) {
		return (
			<tr className={styles.tr}>
				<td className={styles.td}>
					<p className={styles.text1}>{children}</p>
				</td>
				<td className={styles.td}>
					<p className={styles.text2}>{genres}</p>
				</td>
			</tr>
		);
	} else {
		return (
			<tr className={styles.tr}>
				<td className={styles.td}>
					<p className={styles.text1}>{children}</p>
				</td>
				<td className={styles.td}>
					<p className={styles.text2}>{producer}</p>
				</td>
			</tr>
		);
	}
};