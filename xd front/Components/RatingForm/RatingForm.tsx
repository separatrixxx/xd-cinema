import { RatingFormProps } from './RatingForm.props';
import styles from './RatingForm.module.css';
import { useEffect, useState } from 'react';
import { Htag } from '../Htag/Htag';
import axios from 'axios';
import { rateMovie } from '../../helpers/helpers_rate';


export const RatingForm = ({ movie }: RatingFormProps): JSX.Element => {
    const [userId, setUserId] = useState<string>('');
    const [userRating, setUserRating] = useState<number>(0);
    const [totalRatingCount, setTotalRatingCount] = useState<number>(0);
    const [totalRating, setTotalRating] = useState<number>(0);

	useEffect(() => {
        let id = localStorage.getItem('user_id');

        if (id) {
            setUserId(id);
        }

        if ((document.getElementById('rate' + userRating) as HTMLBaseElement) !== null) {
            if (userRating <= 4) {
                (document.getElementById('rate' + userRating) as HTMLBaseElement).style.color = 'rgb(239 68 68)';
            } else if (userRating > 4 && userRating <= 6) {
                (document.getElementById('rate' + userRating) as HTMLBaseElement).style.color = 'rgb(64 64 64)';
            } else {
                (document.getElementById('rate' + userRating) as HTMLBaseElement).style.color = 'rgb(22 163 74)';
            }
        }
    }, [userRating])

    if (userId) {
        axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/user/rating/get/?id=' + userId)
            .then((response) => {
                for (let r of response.data) {
                    if (r.movie_id === movie.id) {
                        setUserRating(r.rate);
                        break;
                    }
                }
            })
    }

    axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/movie/rating/get/?id=' + movie.id)
        .then((response) => {
            if (response.data.length) {
                setTotalRatingCount(response.data.length);

                let total = 0;

                for (let r of response.data) {
                    total += r.rate;
                }

                setTotalRating(total);
            }
        });

    const CheckRating = (r: number) => {
        if (!userId) {
            alert('Вы должны войти в аккаунт, чтобы оценить фильм')
        } else {
            rateMovie(movie.id, +userId, r);
        }
    }

    const ratingArr = Array.from({length: 10}, (_, index) => index + 1);
    
	if (totalRatingCount) {
        return (
            <div className={styles.ratingForm}>
                <Htag tag='xl'>{(Math.floor((totalRating / totalRatingCount) * 10) / 10 )}/10</Htag>
                <Htag tag='s'>Оценили фильм <span className={styles.ratingCount}>{totalRatingCount}</span></Htag>
                <div className={styles.ratingBody}>
                    {ratingArr.map(r => (
                        <h1 key={r} id={'rate' + r} onClick={() => CheckRating(r)}>{r}</h1>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.ratingForm}>
                <Htag tag='xl'>Фильм ещё никто не оценил</Htag>
                <Htag tag='s'>Оценили фильм <span className={styles.ratingCount}>{totalRatingCount}</span></Htag>
                <div className={styles.ratingBody}>
                    {ratingArr.map(r => (
                        <h1 key={r} id={'rate' + r} onClick={() => CheckRating(r)}>{r}</h1>
                    ))}
                </div>
            </div>
        );
    }
};