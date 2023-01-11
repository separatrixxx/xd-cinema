export const genresLink: Array<string> = ['comedy', 'cartoons', 'horrors', 'sci-fi', 'thrillers', 'actions', 'romance', 'detectives',
	'adventures', 'fantasy', 'war', 'family', 'anime', 'historical', 'drama', 'children', 'crime', 'biography', 'westerns',
	'noir', 'musicals', 'music', 'sport'];

export const genresRusMn: Array<string> = ['Комедии', 'Мультфильмы', 'Ужасы', 'Фантастика', 'Триллеры', 'Боевики', 'Мелодрамы', 'Детективы',
	'Приключения', 'Фэнтези', 'Военные', 'Семейные', 'Аниме', 'Исторические', 'Драмы', 'Детские', 'Криминал', 'Биографии', 'Вестерны',
	'Фильмы-нуар', 'Мюзиклы', 'Музыкальные', 'Спортивные'];

export const genresRusEd: Array<string> = ['комедия', 'мультфильм', 'ужасы', 'фантастика', 'триллер', 'боевик', 'мелодрама', 'детектив',
	'приключения', 'фэнтези', 'военный', 'семейный', 'аниме', 'исторический', 'драма', 'детский', 'криминал', 'биография', 'вестерн',
	'фильм-нуар', 'мюзкл', 'музыкальный', 'спортивный'];

export const genresImg: Array<string> = ['https://cdnn21.img.ria.ru/images/155627/11/1556271137_22:0:982:720_1920x0_80_0_0_a7614cfbf3dbf665ec2e6ccc0d6e09da.jpg',
	'https://img.championat.com/s/735x490/news/big/k/c/beskonechnost-ne-predel-bazz-lajter-uzhasno-startoval-v-ssha_16555675022107704441.jpg',
	'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1374145/9dfb7659e7ec6168c2d7dcc147e6826a/960x540',
	'https://icdn.lenta.ru/images/2019/09/13/18/20190913181133317/detail_e8a6eb07f921f09e7b8eb4539b0be516.jpg',
	'https://upload.wikimedia.org/wikipedia/ru/archive/b/bb/20090515084019%21The_shining_heres_johnny.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/john-wick-chapter-2-movie-wide_0.jpg',
	'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/movies/frames/1630138-1578169.jpeg',
	'https://cdnstatic.rg.ru/uploads/images/gallery/8e486c98/1_b6fe1618.jpg',
	'https://99px.ru/sstorage/53/2017/05/tmb_200648_1245.jpg',
	'https://static1-repo.aif.ru/1/29/297955/c7fdeff35f873be96e7267eded43fdb8.jpg',
	'https://avatars.mds.yandex.net/get-kinopoisk-blog-post-thumb/39785/53da085cdddade477f399e4401766d64/1200x630',
	'https://cdn.smartfacts.ru/170501/meri-poppins-vozvrashchaetsya_0.jpg',
	'https://nelgu.ru/images/easyblog_articles/77/b2ap3_amp_EBSOG7iWsAErEWL1.jpg',
	'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1374145/2dae65f5efe4e5aa652374972b95a9ed/960x540',
	'https://geo.pro/upload/others/the-exclusive-nsk/62a079f05c72ff4871ec21f3-1900x.jpeg',
	'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/ed16fff6-fdbd-4cee-baaa-fa8068b6b9f1/1920x',
	'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/137cf388-98b7-4cd4-b8f2-305e12373650/1920x',
	'https://www.kino-teatr.ru/art/4156/54752.jpg',
	'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/34144/438346cf0515eca628f6d9ea18c483e7/orig',
	'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/whr4le.jpg',
	'https://bigpicture.ru/wp-content/uploads/2017/03/zaglav.jpg',
	'https://media.kg-portal.ru/production/bohemianrhapsody/bohemianrhapsody_2.jpg',
	'https://www.interessant.ru/data/files/3/film-dvizhieniie-vvierkh/dvizhieniie%20vvierkh.jpg'];


export function genreToLink(genrRus: string): string[] {
	let index = genresRusMn.findIndex(el => el === genrRus);

	return [genresLink[index], genresImg[index]];
}

export function genreToRus(genreLink: string): string {
	let index = genresLink.findIndex(el => el === genreLink);

	return genresRusEd[index];
}

export function genreEdToMn(genreEn: string): string {
	let index = genresRusEd.findIndex(el => el === genreEn);

	return genresRusMn[index];
}