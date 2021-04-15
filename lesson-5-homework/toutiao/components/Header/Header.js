import styles from "./Header.module.css"
import { MessageOutlined, SearchOutlined} from '@ant-design/icons'

export default function Header() {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header}>
                <a className={styles.message}>
                    <MessageOutlined className={styles.messageIcon} />
                </a>
                
                <a>
                    <h1 className={styles.headline}>今日头条</h1>
                </a>

                <a className={styles.search}>
                    <SearchOutlined className={styles.searchIcon} />
                </a>
            </div>
        </div>
    )
}