import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import React, { FunctionComponent } from 'react';
import { AppContextProvider, IAppContext } from '../context/app.context';
import FilmForm1 from './FilmForm1/FilmForm1';
import FilmForm2 from './FilmForm2/FilmForm2';
import FilmForm3 from './FilmForm3/FilmForm3';
import { Htag } from '../Components/Htag/Htag';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { HookahIcon } from '../Components/HookahIcon/HookahIcon';
import TopFilmsForm from './TopFilmsForm/TopFilmsForm';
import { InfoIcon } from '../Components/InfoIcon/InfoIcon';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header searchInput={true} />
			<div className={styles.layoutContent}>
				<FilmForm1 />
				<Htag tag='l'>Жанры</Htag>
				<FilmForm3 />
				<Htag tag='l'>Топ 10 фильмов</Htag>
				<TopFilmsForm />
				<Htag tag='l'>Все фильмы и сериалы</Htag>
				<FilmForm2 />
				<InfoIcon />
				<HookahIcon />
				<Footer />
				<div className={styles.body}>
					{children}
				</div>
			</div>
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider movies={props.movies} topmovies={props.topmovies}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};