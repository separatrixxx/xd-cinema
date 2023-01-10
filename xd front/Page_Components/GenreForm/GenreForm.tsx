import styles from './GenreForm.module.css';
import Head from 'next/head';
import { Footer } from '../../layout/Footer/Footer';
import { Header } from '../../layout/Header/Header';
import { MovieGenreProps } from '../../interfaces/movies.interface';
import { genreEdToMn } from '../../helpers/helpers_genres';
import Link from 'next/link';
import { Htag } from '../../Components/Htag/Htag';
import Image from 'next/image'

export const GenreForm = ({ movies, genre, notFound }: MovieGenreProps): JSX.Element => {
	if (notFound) {
		return (
			<div className={styles.wrapper}>
				<Head>
					<title>{'[xd] - ' + genreEdToMn(genre)}</title>
					<meta name='description' content={'Фильмы в жанре ' + genreEdToMn(genre)} />
					<meta property='og:title' content={'[xd] - ' + genreEdToMn(genre)} />
					<meta property='og:description' content={'Фильмы в жанре ' + genreEdToMn(genre)} />
				</Head>
				<Header searchInput={false} />
				<div className={styles.wrapperContent}>
					<Htag tag='l'>{genreEdToMn(genre)}</Htag>
					<div className={styles.genreForm}>
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
					<Footer />
				</div>
			</div>
		);
	} else {
		return (
			<div className={styles.wrapper}>
				<Head>
					<title>{'[xd] - ' + genreEdToMn(genre)}</title>
				</Head>
				<Header searchInput={false} />
				<div className={styles.wrapperContent}>
					<Htag tag='l'>{genreEdToMn(genre)}</Htag>
					<Htag tag='m'>Не найдено фильмов в выбранной категории</Htag>
				</div>
			</div>
		);
	}
};