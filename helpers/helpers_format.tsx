export function formatDate(date: string): string {
	let year = date.slice(0, 4);
	let month = +date.slice(5, 7);
	let day = date.slice(8, 10);
	let firstNumberOfDay = date.slice(8, 9);
	let secondNumberOfDay = date.slice(9, 10);

	let dayNew;

	let monthNew = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа',
		'сентября', 'октября', 'ноября', 'декабря'][month - 1];

	(firstNumberOfDay === '0') ? dayNew = secondNumberOfDay : dayNew = day;

	return dayNew + ' ' + monthNew + ' ' + year + ' г.';
}

export function formatGenres(genres: string[]): string {
	let genresNew = '';

	for (let genre of genres) {
		if (genresNew === '') {
			genresNew = genre;
		} else {
			genresNew = genresNew + ', ' + genre;
		}
	}

	return genresNew;
}

export function formatCountry(country: string[]): string {
	let countryNew = '';

	for (let cnt of country) {
		if (countryNew === '') {
			countryNew = cnt;
		} else {
			countryNew = countryNew + ', ' + cnt;
		}
	}

	return countryNew;
}

export function formatDateReg(registration_date: string): string {
	let dayNew;

	let year = registration_date.slice(0, 4);
	let month = +(registration_date.slice(5, 7)) + 1;
	let day = registration_date.slice(8, 10);
	let firstNumberOfDay = registration_date.slice(8, 9);
	let secondNumberOfDay =  registration_date.slice(9, 10);
	let hours =  registration_date.slice(11, 16);

	let monthNew = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа',
		'сентября', 'октября', 'ноября', 'декабря'][month - 1]

	if (firstNumberOfDay === '0') {
		dayNew = secondNumberOfDay
	} else {
		dayNew = day
	}

	return 'Зарегистрирован ' + dayNew + ' ' + monthNew + ' ' + year + ' года в ' + hours;
}

export function formatDateComment(registration_date: string): string {
	let dayNew;

	let year = registration_date.slice(0, 4);
	let month = +(registration_date.slice(5, 7)) + 1;
	let day = registration_date.slice(8, 10);
	let firstNumberOfDay = registration_date.slice(8, 9);
	let secondNumberOfDay =  registration_date.slice(9, 10);
	let hours =  registration_date.slice(11, 16);

	let monthNew = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа',
		'сентября', 'октября', 'ноября', 'декабря'][month - 1]

	if (firstNumberOfDay === '0') {
		dayNew = secondNumberOfDay
	} else {
		dayNew = day
	}

	return dayNew + ' ' + monthNew + ' ' + year + ' в ' + hours;
}

export function formatSearch(search: string): string {
	if (search) {
		search = search.toLowerCase()
		return search.charAt(0).toUpperCase() + search.slice(1);
	}
	return '';
}