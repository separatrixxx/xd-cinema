import { CommentsListProps } from './CommentsList.props';
import styles from './CommentsList.module.css';
import axios from 'axios';
import { useState } from 'react';
import { CommentItem } from '../../interfaces/movies.interface';
import { formatDateComment } from '../../helpers/helpers_format';
import { Htag } from '../Htag/Htag';
import ScrollIntoView from "react-scroll-into-view";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const CommentsList = ({movieId}: CommentsListProps): JSX.Element => {
    const [comments] = useState<CommentItem[]>([]);

    axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/comment/get/movie/?id=' + movieId)
        .then((response) => {
            if (response.data[1]) {
                for (let item of response.data) {
                    if (comments.length < response.data.length) {
                        comments.unshift(item);
                    }
                }
            }
        });

	return (
		<>
            <Htag tag='xl'>Комментарии <span className={styles.commentCount}> {comments.length}</span></Htag>
            <ScrollIntoView selector="#comment_text">
                <div className={styles.addComment}>
                    <AiOutlinePlusCircle />
                    <p>Написать комментарий</p>
                </div>
            </ScrollIntoView>
            {
                comments.map(comment => (
                    <div key={comment.id} className={styles.comment}>
                        <h1 className={styles.commentUserName}>{comment.user_name}</h1>
                        <p className={styles.commentText}>{comment.text}</p>
                        <p className={styles.commentDate}>{formatDateComment(comment.publication_date)}</p>
                    </div>
                ))
            }
        </>
	);
}