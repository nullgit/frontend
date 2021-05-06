import Header from "../components/Secondary/Header";
import Card from '../components/Secondary/Card';
import Notice from '../components/Secondary/Notice';
import Location from '../components/Secondary/Location';
import Comment from '../components/Secondary/Comment';
import Footer from '../components/Secondary/Footer';

import { globalStyle } from "../styles/globals";


function App({card, notice, location, comment}) {
    return (
        <div>
            <Header />
            <Card data={card} />
            <Notice data={notice} />
            <Location data={location} />
            <Comment data={comment} />
            <Footer data={card}/>
            <style jsx={true} global={true}>{globalStyle}</style>
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/secondary");
    const json = await res.json();
    return {
        props: {
            card: json.card,
            notice: json.notice,
            location: json.location,
            comment: json.comment
        }
    }
}

export default App;