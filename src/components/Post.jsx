import styles from './Post.module.css'
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";
import {format, formatDistanceToNow} from "date-fns";
import {ptBR} from "date-fns/locale";
import {useState} from "react";

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={ publishedAtFormatted } dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if (item.type === 'paragraph') {
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p key={item.content}><a href="#">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Comment this post</strong>

                <textarea onChange={handleNewCommentChange} value={newCommentText} name="comment" />

                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} />
                })}
            </div>
        </article>
    )
}