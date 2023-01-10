import React, { useContext } from 'react';
import { TopFilmsFormProps } from './TopFilmsForm.props';
import styles from './TopFilmsForm.module.css';
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import Link from 'next/link';
import Image from 'next/image'


export const TopFilmsForm = ({ className, ...props }: TopFilmsFormProps): JSX.Element => {
	let { topmovies } = useContext(AppContext);
	return (
		<div className={cn(className, styles.filmForm2)} {...props}>
			{
				topmovies.map(movie => (
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

export default TopFilmsForm;