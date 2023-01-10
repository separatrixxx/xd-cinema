import { CommentsFormProps } from './CommentsForm.props';
import styles from './CommentsForm.module.css';
import { Htag } from '../Htag/Htag';
import { useEffect, useState } from 'react';
import { addComment } from '../../helpers/helpers_comment';
import axios from 'axios';
import { CommentsList } from '../CommentsList/CommentsList';

export const CommentsForm = ({ movie }: CommentsFormProps): JSX.Element => {
    const [userId, setUserId] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [comment, setComment] = useState<string>('');

	useEffect(() => {
        let id = localStorage.getItem('user_id');

        if (id) {
            setUserId(id);
        }
    }, [])

    if (userId) {
        let user = axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/user/get/?id=' + userId);
  
        user.then((response) => {
          setUserName(response.data.name);
        });
    }

    const CheckComment = () => {
		if (userId) {
            if (comment.length === 0) {
                alert('Введите комментарий');
            } else {
                addComment(comment, movie, userName, userId);
            }
        } else {
            alert('Вы должны войти в аккаунт, чтобы оставить комментарий');
        }
	};
    
	return (
        <div className={styles.commentsForm}>
            <CommentsList movieId={movie.id} />
            <Htag tag='l'>Написать комментарий</Htag>
            <textarea id="comment_text" className={styles.textarea}
                placeholder="Текст комментария"
                aria-label="Комментарий"
                value={comment}
                onChange={(e) => setComment(e.target.value)} />
            <button className={styles.button} onClick={CheckComment}>Прокомментировать</button>
        </div>
    );
};