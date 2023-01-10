import React, { useContext } from 'react';
import { FilmForm2Props } from './FilmForm2.props';
import styles from './FilmForm2.module.css';
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import Link from 'next/link';


export const FilmForm2 = ({ className, ...props }: FilmForm2Props): JSX.Element => {
	let { movies } = useContext(AppContext);
	return (
		<div className={cn(className, styles.filmForm2)} {...props}>
			{
				movies.map(movie => (
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

export default FilmForm2;