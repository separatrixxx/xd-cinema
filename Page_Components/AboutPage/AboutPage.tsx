import { Htag } from '../../Components/Htag/Htag';
import { Footer } from '../../layout/Footer/Footer';
import { Header } from '../../layout/Header/Header';
import styles from './AboutPage.module.css';

export const AboutPage = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header searchInput={false} />
            <div className={styles.wrapperContent}>
                <Htag tag='xl'>Возможности [xd]:</Htag>
                <div className={styles.list}>
                    <Htag tag='m'>1. Регистрация и авторизация</Htag>
                    <Htag tag='m'>2. Просмотр фильмов</Htag>
                    <Htag tag='m'>3. Комментирование фильмов</Htag>
                    <Htag tag='m'>4. Оценивание фильмов</Htag>
                    <Htag tag='m'>5. Сортировка по жанрам</Htag>
                    <Htag tag='m'>6. Кальянная</Htag>
                </div>
                <Htag tag='xl'>Что пока не реализовано:</Htag>
                <div className={styles.list}>
                    <Htag tag='m'>1. Сортировка фильмов по популярности</Htag>
                    <Htag tag='m'>2. Инфомация о режиссёрах</Htag>
                    <Htag tag='m'>3. Изображение профиля</Htag>
                </div>
                <Htag tag='xl'>Что стоит знать (данные Google Lighthouse):</Htag>
                <div className={styles.list}>
                    <Htag tag='m'>1. Производительность на ПК 89-91 из 100</Htag>
                    <Htag tag='m'>2. Производительность на мобильных устройствах 67-70 из 100</Htag>
                    <Htag tag='m'>3. Специальные возможности реализованы на 95 из 100</Htag>
                    <Htag tag='m'>4. Поисковая оптимизация 100 из 100</Htag>
                    <Htag tag='m'>5. Благодаря SSR производительность выросла на 40 пунктов</Htag>
                </div>
                <Htag tag='xl'>Участники проекта:</Htag>
                <div className={styles.list}>
                    <Htag tag='m'>Frontend - Лохматов Никита</Htag>
                    <Htag tag='m'>Backend - Синюков Антон</Htag>
                </div>
                <Footer />
            </div>
		</div>
	);
};