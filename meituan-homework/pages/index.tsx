import Header from "../components/Home/Header";
import GoAPP from "../components/Home/GoAPP";
import Nav from "../components/Home/Nav";
import Like from "../components/Home/Like";
import Footer from "../components/Home/Footer";
import { globalStyle } from "../styles/globals";


function App({list}) {
    return (
        <div>
            <Header />
            <GoAPP />
            <Nav />
            <Like list={list}/>
            <Footer />
            <style jsx={true} global={true}>{globalStyle}</style>
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/likes");
    const json = await res.json();
    return {
        props: {
            list: json.data,
        }
    }
}

export default App;