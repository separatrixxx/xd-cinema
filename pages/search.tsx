import axios, { AxiosResponse } from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MoviesItem } from '../interfaces/movies.interface';
import { withLayout } from '../layout/Layout';
import { SearchForm } from '../Page_Components/SearchForm/SearchForm';

export const Search = ({ movies }: MoviesProps) => {
	const router = useRouter();
	const { search } = router.query;

	if (search) {
		return (
			<>
				<Head>
					<title>{'[xd] - ' + search}</title>
				</Head>
				<SearchForm movies={movies} search={search} />
			</>
		);
	} else {
		return (
			<Head>
				<title>{'[xd] - Поиск'}</title>
			</Head>
		);
	}
}

export default Search;

export const getStaticProps: GetStaticProps<MoviesProps> = async () => {
	let { data: movies }: AxiosResponse<MoviesItem[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/movie/get/all');
	return {
	  props: {
		movies: movies.reverse(),
	  }
	};
  };
  
  interface MoviesProps extends Record<string, unknown> {
	movies: MoviesItem[];
  }