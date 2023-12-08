import {Header} from "./components/Header.jsx";

import  styles from './App.module.css'

import './global.css'
import {Sidebar} from "./components/Sidebar.jsx";
import {Post} from "./components/Post.jsx";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/danrleidalfre.png',
            name: 'Danrlei',
            role: 'Web Developer'
        },
        content: [
            { type: 'paragraph', content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.' },
            { type: 'link', content: '#developer' }
        ],
        publishedAt: new Date('2023-12-01 10:00:00')
    }
]

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}
