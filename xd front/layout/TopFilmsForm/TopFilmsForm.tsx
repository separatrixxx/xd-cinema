import React, { useContext } from 'react';
import { TopFilmsFormProps } from './TopFilmsForm.props';
import styles from './TopFilmsForm.module.css';
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import Link from 'next/link';


export const TopFilmsForm = ({ className, ...props }: TopFilmsFormProps): JSX.Element => {
	let { topmovies } = useContext(AppContext);
	return (
		<div className={cn(className, styles.filmForm2)} {...props}>
			{
				topmovies.map(movie => (
					<Link key={movie.id} href={`/movie/${movie.id}`}>
						<div className={styles.movieCard} style={{
							backgroundImage: `url(${movie.cover})`
						}}>
						</div>
					</Link>
				))
			}
		</div>
	);
}

export default TopFilmsForm;