import React from 'react';
import { FilmForm1Props } from './FilmForm1.props';
import styles from './FilmForm1.module.css';
import cn from 'classnames';
import { Htag } from '../../Components/Htag/Htag';
import { WatchButton } from '../../Components/WatchButton/WatchButton';


export const FilmForm1 = ({ className, ...props }: FilmForm1Props): JSX.Element => {
	return (
		<div className={cn(className, styles.filmForm1)} {...props}>
			<div className={styles.filmForm1_block}>
				<Htag tag='m'>Во все тяжкие</Htag>
				<WatchButton />
			</div>
		</div>
	);
}

export default FilmForm1;