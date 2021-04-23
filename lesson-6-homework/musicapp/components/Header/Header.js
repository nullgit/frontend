import styles from "./Header.module.css"
// npm install --save @ant-design/icons
import {Button} from "antd"
import { HeartOutlined } from "@ant-design/icons"
import "antd/dist/antd.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img className={styles.logo} src="/logo.png" />
                <div className={styles.appName}>Catty Music</div>
            </div>

            <div className={styles.headerRight}>
                <HeartOutlined className={styles.like} />
                <Button type="primary" className={styles.signUp}>Sign Up</Button>
                <Button type="primary" className={styles.logIn}>Log in</Button>
            </div>
        </div>
    )
}