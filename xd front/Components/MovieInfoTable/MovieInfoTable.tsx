import React from 'react';
import styles from './MovieInfoTable.module.css';
import { Tr } from '../Tr/Tr';
import { formatDate, formatGenres, formatCountry } from '../../helpers/helpers_format';
import { MovieInfoProps } from '../../interfaces/movies.interface';

export const MovieInfoTable = ({ movie, genres, country }: MovieInfoProps): JSX.Element => {
	return (
		<table className={styles.table}>
			<tbody>
				<Tr date={formatDate(movie.premiere_date)}>Дата премьеры</Tr>
				<Tr country={formatCountry(country)}>Страна</Tr>
				<Tr genres={formatGenres(genres)}>Жанр</Tr>
				<Tr producer={movie.producer}>Режиссёр</Tr>
			</tbody>
		</table>
	);
};