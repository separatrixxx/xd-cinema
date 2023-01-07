import styles from './SearchForm.module.css';
import { Footer } from '../../layout/Footer/Footer';
import { Header } from '../../layout/Header/Header';
import { MovieSearchProps } from '../../interfaces/movies.interface';
import Link from 'next/link';
import { Htag } from '../../Components/Htag/Htag';

export const SearchForm = ({ movies, search }: MovieSearchProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header searchInput={true} />
			<div className={styles.wrapperContent}>
				<Htag tag='l'>{search}</Htag>
				<div className={styles.searchForm}>
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
				<Footer />
			</div>
		</div>
	);
};