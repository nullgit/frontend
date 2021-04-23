import styles from "./Footer.module.css"
import {StepBackwardOutlined, PauseOutlined, StepForwardOutlined, RedoOutlined, UnorderedListOutlined} from "@ant-design/icons"

export default function Header() {
    return (
        <div className={styles.footer}>
            <div className={styles.musicCover}>
                <div className={styles.imgWrapper}>
                    <img src="/img/song.jpg" />
                </div>
                <div className={styles.musicInfo}>
                    <div>
                        <div className={styles.musicName}>If It Ain't Love</div>
                        <div className={styles.artist}>Catson Derulo</div>
                    </div>
                </div>
            </div>

            <div className={styles.control}>
                <StepBackwardOutlined className={styles.icon} />
                <PauseOutlined className={styles.icon} />
                <StepForwardOutlined className={styles.icon} />
                <RedoOutlined className={styles.icon} />
                <UnorderedListOutlined className={styles.icon} />
            </div>
        </div>
    )
}