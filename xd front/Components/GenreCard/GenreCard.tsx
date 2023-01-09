import { GenreCardProps } from './GenreCard.props';
import styles from './GenreCard.module.css';
import { Htag } from '../Htag/Htag';
import Link from 'next/link';

export const GenreCard = ({ image, genreName, link }: GenreCardProps): JSX.Element => {
	return (
		<Link href={'/genres/' + link} className={styles.genreCard} style={{
			backgroundImage: `url(${image})`
		}}>
			<Htag tag='genre'>{genreName}</Htag>
		</Link>
	);
};