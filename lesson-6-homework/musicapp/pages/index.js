import Header from "../components/Header/Header"
import Body from "../components/Body/Body"
import Footer from "../components/Footer/Footer"
import styles from "../styles/Home.module.css"


export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Body />
      <Footer/>
    </div>
  )
}
