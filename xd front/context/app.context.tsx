import { createContext, PropsWithChildren, useState } from 'react';
import { MoviesItem } from '../interfaces/movies.interface';

export interface IAppContext {
	movies: MoviesItem[];
	topmovies: MoviesItem[];
}

export const AppContext = createContext<IAppContext>({ movies: [], topmovies: [] });

export const AppContextProvider = ({ movies, topmovies, children }: PropsWithChildren<IAppContext>): JSX.Element => {
	const [moviesState] = useState<MoviesItem[]>(movies);
	const [topmoviesState] = useState<MoviesItem[]>(topmovies);

	return <AppContext.Provider value={{ movies: moviesState, topmovies: topmoviesState }}>
		{children}
	</AppContext.Provider>;
};