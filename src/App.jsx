import {Header} from "./components/Header.jsx";

import  styles from './App.module.css'

import './global.css'
import {Sidebar} from "./components/Sidebar.jsx";

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
            </div>
        </div>
    )
}
