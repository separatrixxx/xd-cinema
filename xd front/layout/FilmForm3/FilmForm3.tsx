import React from 'react';
import { FilmForm3Props } from './FilmForm3.props';
import styles from './FilmForm3.module.css';
import cn from 'classnames';
import { GenreCard } from '../../Components/GenreCard/GenreCard';
import { genreToLink } from '../../helpers/helpers_genres';


export const FilmForm3 = ({ className, ...props }: FilmForm3Props): JSX.Element => {
	let genres = ['Комедии', 'Мультфильмы', 'Ужасы', 'Фантастика', 'Триллеры', 'Боевики', 'Мелодрамы', 'Детективы', 'Приключения',
		'Фэнтези', 'Военные', 'Семейные', 'Аниме', 'Исторические', 'Драмы', 'Детские', 'Криминал', 'Биографии', 'Вестерны', 'Фильмы-нуар',
		'Мюзиклы', 'Музыкальные', 'Спортивные'];

	return (
		<div className={styles.wrapper}>
			<div className={cn(className, styles.filmForm3)} {...props} >
				{genres.map(g => (
					<GenreCard key={g} image={genreToLink(g)[1]} genreName={g} link={genreToLink(g)[0]} />
				))}
			</div>
		</div>
	);
}

export default FilmForm3;