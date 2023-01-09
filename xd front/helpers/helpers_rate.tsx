import axios, { AxiosResponse } from "axios";
import { RatingItem } from "../interfaces/movies.interface";

export async function rateMovie(movieId: number, userId: number, rate: number ) {
    let { data: userRatings }: AxiosResponse<RatingItem[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/user/rating/get/?id=' + userId);

    let check = false;

    if (userRatings[0]) {
        for (let r of userRatings) {
            if (r.movie_id === movieId) {
                check = true;
                break;
            }
        }
    }
    
    if (!check) {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/movie/rating/create/?id_user=' + userId 
            +'&id_movie=' + movieId 
            + '&rate=' + rate)
        .then(() => {       
            updateRating(movieId);     
        })
        .catch(function (error) {
            console.log("Ошибка HTTP при оценивании фильма: " + error);
        });
    } else {
        await axios.put(process.env.NEXT_PUBLIC_DOMAIN + '/user/update/rating/?id_user=' + userId 
            +'&id_movie=' + movieId 
            + '&rate=' + rate)
        .then(() => {           
            updateRating(movieId);  
        })
        .catch(function (error) {
            console.log("Ошибка HTTP при обновлении рейтинга фильма: " + error);
        });
    }
}

async function updateRating(movieId: number) {
    let { data: movieRatings }: AxiosResponse<RatingItem[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/movie/rating/get/?id=' + movieId);

    let ratingMovie = 0;

    if (movieRatings[0]) {
        for (let r of movieRatings) {
            ratingMovie += r.rate;
        }
    }

    await axios.put(process.env.NEXT_PUBLIC_DOMAIN + '/movie/update/popularity/?id=' + movieId + '&pop=' + ratingMovie)
        .then(() => {
            window.location.href = '/movie/' + movieId;
        })
        .catch(function (error) {
            console.log("Ошибка HTTP при обновлении рейтинга фильма: " + error);
        });
}