export interface MoviesItem {
	id: number,
	title: string,
	description: string,
	cover: string,
	premiere_date: string,
	producer: string,
	popularity: number,
	age: number,
}

export interface MovieInfoProps {
	movie: MoviesItem;
	genres: string[];
	country: string[];
}

export interface MovieGenreProps {
	movies: MoviesItem[];
	genre: string;
	notFound: boolean;
}

export interface MovieSearchProps {
	movies: MoviesItem[];
	search: string | string[];
}

export interface UserItem {
	id: number,
	name: string,
	email: string,
	registration_date: string,
	hashpass: string,
}

export interface CommentItem {
	id: number,
	movie_id: number,
	user_id: number,
	user_name: string,
	text: string,
	publication_date: string
}

export interface RatingItem {
	movie_id: number,
	user_id: number,
	rate: number,
}
