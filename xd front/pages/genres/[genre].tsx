import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios, { AxiosResponse } from 'axios';
import { MoviesItem } from '../../interfaces/movies.interface';
import { ParsedUrlQuery } from 'node:querystring';
import { genresLink, genreToRus } from '../../helpers/helpers_genres';
import { GenreForm } from '../../Page_Components/GenreForm/GenreForm';

const GenrePage = ({ movies, genre }: MoviesProps) => {
	let notFound = false;

	if (movies[0]) {
		notFound = true;
	}

	return (
		<GenreForm movies={movies} genre={genre} notFound={notFound} />
	);
}

export default GenrePage;

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { genre: genresLink[0] } }, { params: { genre: genresLink[1] } }, { params: { genre: genresLink[2] } }, { params: { genre: genresLink[3] } },
		{ params: { genre: genresLink[4] } }, { params: { genre: genresLink[5] } }, { params: { genre: genresLink[6] } }, { params: { genre: genresLink[7] } },
		{ params: { genre: genresLink[8] } }, { params: { genre: genresLink[9] } }, { params: { genre: genresLink[10] } }, { params: { genre: genresLink[11] } },
		{ params: { genre: genresLink[12] } }, { params: { genre: genresLink[13] } }, { params: { genre: genresLink[14] } }, { params: { genre: genresLink[15] } },
		{ params: { genre: genresLink[16] } }, { params: { genre: genresLink[17] } }, { params: { genre: genresLink[18] } }, { params: { genre: genresLink[19] } },
		{ params: { genre: genresLink[20] } }, { params: { genre: genresLink[21] } }, { params: { genre: genresLink[22] } }],
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<MoviesProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}

	let genre = '';
	if (typeof params.genre == 'string') {
		genre = genreToRus(params.genre);
	}

	try {
		let { data: movies }: AxiosResponse<MoviesItem[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/movie/get/genre/?genre=' + genre);

		return {
			props: {
				movies,
				genre: genre
			}
		};
	} catch {
		return {
			notFound: true
		};
	}

};

interface MoviesProps extends Record<string, unknown> {
	movies: MoviesItem[];
	genre: string;
}