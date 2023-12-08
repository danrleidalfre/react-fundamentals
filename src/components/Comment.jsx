import styles from './Commet.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.jsx";
import {useState} from "react";

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/danrleidalfre.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Danrlei</strong>
                            <time title="7 de dezembro de 2023 às 19:00" dateTime="2023-12-07 19:00:00">An hour ago</time>
                        </div>
    
                        <button onClick={handleDeleteComment} title="Delete comment">
                            <Trash size={24} />
                        </button>
                    </header>
    
                    <p>{content}</p>
                </div>
    
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Clap
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}