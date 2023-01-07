import React, { useContext } from 'react';
import { AgeProps } from './Age.props';
import styles from './Age.module.css';

export const Age = ({ children }: AgeProps): JSX.Element => {
	return (
		<div className={styles.ageForm}>
			<p className={styles.ageText}>{children}</p>
		</div>
	);
};