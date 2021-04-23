import styles from "./Body.module.css"
import { MenuOutlined, HomeOutlined, SearchOutlined, SoundOutlined, UserOutlined, SettingOutlined} from "@ant-design/icons"
import { PlayCircleOutlined, FileAddOutlined, MoreOutlined } from "@ant-design/icons"
export default function Body() {
    let music = [
        {
            name: "One Dance",
            artist: "Crake feat CatKid & Cyla",
            time: "2:54"
        },
        {
            name: "Panda",
            artist: "Cattee",
            time: "4:06"
        },
        {
            name: "Can't Stop the Feeling!",
            artist: "Catin Cimberlake",
            time: "3:56"
        },
        {
            name: "Work From Home",
            artist: "Cat Harmony feat Colla",
            time: "3:34"
        },
        {
            name: "One Dance",
            artist: "Crake feat CatKid & Cyla",
            time: "2:54"
        },
        {
            name: "Panda",
            artist: "Cattee",
            time: "4:06"
        },
        {
            name: "Can't Stop the Feeling!",
            artist: "Catin Cimberlake",
            time: "3:56"
        },
        {
            name: "Work From Home",
            artist: "Cat Harmony feat Colla",
            time: "3:34"
        },
    ]

    return (
        <div className={styles.bodyWrapper}>
            <div className={styles.hiddenTop}></div>

            <div className={styles.appBody}>

                <div className={styles.navLeft}>
                    <MenuOutlined className={styles.icon} />
                    <HomeOutlined className={styles.icon} />
                    <SearchOutlined className={styles.icon} />
                    <SoundOutlined className={styles.icon} />
                    <UserOutlined className={styles.icon} />
                    <SettingOutlined className={styles.icon} />
                </div>

                <div className={styles.hiddenLeft}></div>

                <div className={styles.bodyBox}>
                    <div className={styles.musicBox}>
                        <div className={styles.musicCover}>
                            <div className={styles.imgWrapper}>
                                <img className={styles.image} src="img/cover.jpg" />
                            </div>

                            <div className={styles.musicInfo}>
                                <div className={styles.musicName}>CattyBoard Top 100 Single Charts (11.06.36)</div>
                                <div className={styles.musicArtist}>Unknown Artist</div>
                                <div className={styles.otherInfo}>2016 . Charts . 100 songs</div>
                            </div>
                        </div>

                        <ul className={styles.musicBoxFooter}>
                            <li><PlayCircleOutlined />Play all</li>
                            <li><FileAddOutlined />Add to</li>
                            <li><MoreOutlined />More</li>
                        </ul>
                    </div>

                    <ul className={styles.musicList}>
                        {music.map((i, index) => {
                            return (
                                <li key={index}>
                                    <span className={styles.musicName}>{i.name}</span>
                                    <span className={styles.artist}>{i.artist}</span>
                                    <span className={styles.time}>{i.time}</span>
                                    <div className={styles.sync}>
                                        <span>CATTY CLOUD SYNC</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}