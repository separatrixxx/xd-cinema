import styles from './MovieMainInfo.module.css';
import { Htag } from '../Htag/Htag';
import { MovieInfoTable } from '../MovieInfoTable/MovieInfoTable';
import { MovieInfoProps } from '../../interfaces/movies.interface';
import { Age } from '../Age/Age';
import Image from 'next/image'

export const MovieMainInfo = ({ movie, genres, country }: MovieInfoProps): JSX.Element => {
	return (
		<div className={styles.movieMainInfo}>
			<div className={styles.cover}>
				<Image className={styles.cover}
					loader={() => movie.cover}
					src={movie.cover}
					alt={movie.title + " movie cover"}
					width={288}
					height={416}
				/>
			</div>
			<div className={styles.info}>
				<Htag tag='xl'>{movie.title}</Htag>
				<p className={styles.description}>{movie.description}</p>
				<MovieInfoTable movie={movie} genres={genres} country={country} />
				<Age>{movie.age + '+'}</Age>
			</div>
		</div>
	);
};