import Header from "../components/Header/Header";
import { globalStyle } from "../styles/globals"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DownOutlined} from "@ant-design/icons";


function App({ list }) {
    return (
        <div>
            <div>{list.name}</div>
            <style jsx>{`
                .i{
                    font-size:10px;
                }
            `}</style>
        </div>
        
    )
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/hello");
    const data = await res.json();
    return {
        props: {
            list: data,
        }
    }
}

export default App;