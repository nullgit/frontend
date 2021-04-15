import styles from "./Nav.module.css"
import {PlusOutlined} from "@ant-design/icons"

export default function Nav() {
    return (
        <div className={styles.navWrapper}>
            <ul className={styles.nav}>
                <li><a className={styles.first}>推荐</a></li>
                <li><a>视频</a></li>
                <li><a>热点</a></li>
                <li><a>社会</a></li>
                <li><a>娱乐</a></li>
                <li><a>军事</a></li>
                <li><a>科技</a></li>
                <li><a>汽车</a></li>
                <li><a>房产</a></li>
                <li><a>家居</a></li>
                <li><a>体育</a></li>
                <li><a>财经</a></li>
            </ul>

            <div className={styles.addWrapper}>
                <a className={styles.add}>
                    <PlusOutlined className={styles.addIcon} />
                </a>
            </div>
        </div>
    )
}