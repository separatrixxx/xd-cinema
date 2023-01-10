import styles from './SearchForm.module.css';
import { Footer } from '../../layout/Footer/Footer';
import { Header } from '../../layout/Header/Header';
import { MovieSearchProps, MoviesItem } from '../../interfaces/movies.interface';
import Link from 'next/link';
import { Htag } from '../../Components/Htag/Htag';
import { formatSearch } from '../../helpers/helpers_format';

export const SearchForm = ({ movies, search }: MovieSearchProps): JSX.Element => {
	let moviesNew: MoviesItem[] = [];

	for (let item of movies) {
		if (typeof search === 'string') {
			if (item.title.startsWith(formatSearch(search))) {
				moviesNew.push(item);
			}
		}
	}

	if (moviesNew.length !== 0) {
		return (
			<div className={styles.wrapper}>
				<Header searchInput={true} />
				<div className={styles.wrapperContent}>
					<Htag tag='l'>{search}</Htag>
					<div className={styles.searchForm}>
					{
							moviesNew.map(movie => (
								<Link key={movie.id} href={`/movie/${movie.id}`}>
									<div className={styles.movieCard} style={{
										backgroundImage: `url(${movie.cover})`
									}}>
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
				<Header searchInput={true} />
				<div className={styles.wrapperContent}>
					<Htag tag='l'>{search}</Htag>
					<Htag tag='m'>Не найдено фильмов с таким названием</Htag>
					<Footer />
				</div>
			</div>
		);
	}
};