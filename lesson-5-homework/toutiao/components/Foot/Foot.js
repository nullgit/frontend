import styles from "./Foot.module.css"

export default function Foot() {
    return (
        <div className={styles.foot}>
            <img src="/logo.jfif"></img>
            <div className={styles.text}>今日头条</div>
            <div className={styles.download}>打开</div>
        </div>
    )
}


