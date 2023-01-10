import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { ParsedUrlQuery } from 'node:querystring';
import { MoviesItem } from '../../interfaces/movies.interface';
import { MoviePage } from '../../Page_Components/MoviePage/MoviePage';

function MoviesPage({ movie, genres, country }: MoviesProps): JSX.Element {
	return (
		<MoviePage movie={movie} genres={genres} country={country} />
	);
}

export default MoviesPage;


export const getStaticPaths: GetStaticPaths = async () => {
	let { data: movies }: AxiosResponse<MoviesItem[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/movie/get/all');
	return {
		paths: movies.map(m => '/movie/' + m.id),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<MoviesProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	try {
		let { data: movie }: AxiosResponse<MoviesItem> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/movie/get/?id=' + params.movie);
		let { data: genres }: AxiosResponse<string[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/genre/get/movie/?movie_id=' + params.movie);
		let { data: country }: AxiosResponse<string[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/country/get/movie/?movie_id=' + params.movie);

		return {
			props: {
				movie,
				genres,
				country
			}
		};
	} catch {
		return {
			notFound: true
		};
	}

};

interface MoviesProps extends Record<string, unknown> {
	movie: MoviesItem;
	genres: string[];
	country: string[];
}