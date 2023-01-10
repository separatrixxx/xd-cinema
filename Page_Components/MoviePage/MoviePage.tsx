import styles from './MoviePage.module.css';
import Head from 'next/head';
import { MovieMainInfo } from '../../Components/MovieMainInfo/MovieMainInfo';
import { Footer } from '../../layout/Footer/Footer';
import { Header } from '../../layout/Header/Header';
import { MovieInfoProps } from '../../interfaces/movies.interface';
import Script from 'next/script'
import { CommentsForm } from '../../Components/CommentsForm/CommentsForm';
import { RatingForm } from '../../Components/RatingForm/RatingForm';
import { Htag } from '../../Components/Htag/Htag';

export const MoviePage = ({ movie, genres, country }: MovieInfoProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Head>
				<title>{'[xd] - ' + movie.title}</title>
				<meta name='description' content={movie.description} />
				<meta property='og:title' content={'[xd] - ' + movie.title} />
				<meta property='og:description' content={movie.description} />
			</Head>
			<Header searchInput={false} />
			<div className={styles.wrapperContent}>
				<MovieMainInfo movie={movie} genres={genres} country={country} />
				<div id="yohoho" 
					data-kinopoisk={movie.id} 
					data-title={movie.title}
					className={styles.player}
					onClick={() => window.location.reload()}>
						<Htag tag='m'>Если загрузка не произошла, нажмите на плеер</Htag>
					</div>
				<Script src="https://yohoho.cc/yo.js"/>
				<RatingForm movie={movie} />
				<CommentsForm movie={movie} />
				<Footer />
			</div>
		</div>
	);
};