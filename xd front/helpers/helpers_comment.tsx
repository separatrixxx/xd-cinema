import axios from "axios";
import { MoviesItem } from "../interfaces/movies.interface";

export async function addComment(comment: string, movie: MoviesItem, userName: string, userId: string ) {
    let now = new Date();
    let commentDate = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
        + 'T' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

        await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/comment/create/', {
            movie_id: movie.id,
            user_id: userId,
            user_name: userName,
            text: comment,
            publication_date: commentDate,
        }).then(() => {            
            window.location.href = '/movie/' + movie.id;
        })
        .catch(function (error) {
            console.log("Ошибка HTTP при добавлении комментария: " + error);
        });
}