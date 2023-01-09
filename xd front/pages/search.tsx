import axios, { AxiosResponse } from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { formatSearch } from '../helpers/helpers_format';
import { MoviesItem } from '../interfaces/movies.interface';
import { SearchForm } from '../Page_Components/SearchForm/SearchForm';

export const Search = () => {
	const router = useRouter();
	const { search } = router.query;
	
	let [movies] = useState<MoviesItem[]>([]);

    axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/movie/get/title/?name=' + formatSearch(search as string))
        .then((response) => {
            if (response.data[0]) {
                for (let item of response.data) {
                    movies.push(item);
                }
            }
        });

	console.log(movies)

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