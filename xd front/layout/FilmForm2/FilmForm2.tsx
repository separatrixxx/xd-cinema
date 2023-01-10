import React, { useContext } from 'react';
import { FilmForm2Props } from './FilmForm2.props';
import styles from './FilmForm2.module.css';
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import Link from 'next/link';
import Image from 'next/image'


export const FilmForm2 = ({ className, ...props }: FilmForm2Props): JSX.Element => {
	let { movies } = useContext(AppContext);
	return (
		<div className={cn(className, styles.filmForm2)} {...props}>
			{
				movies.map(movie => (
					<Link key={movie.id} href={`/movie/${movie.id}`}>
						<div className={styles.movieCard}>
							<Image className={styles.movieCard}
								loader={() => movie.cover}
								src={movie.cover}
								alt={movie.title + " movie cover"}
								width={256}
								height={384}
							/>
						</div>
					</Link>
				))
			}
		</div>
	);
}

export default FilmForm2;