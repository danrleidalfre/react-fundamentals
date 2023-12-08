import styles from './Post.module.css'
import {Comment} from "./Comment.jsx";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/danrleidalfre.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Danrlei</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="7 de dezembro de 2023 às 19:00" dateTime="2023-12-07 19:00:00">Published an hour ago</time>
            </header>

            <div className={styles.content}>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.
                </p>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <p>
                    <a href="#">#developer</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                    <a href="#">#react</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Comment this post</strong>

                <textarea />

                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}