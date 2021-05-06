import { DownOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';

export default function Header() {
    const height = "50.5px";

    return (
        <div className="wrapper">
            <div className="city">
                <span>上海 <DownOutlined style={{ margin: "auto 0px", fontSize:"10px" }}/></span>
            </div>

            <div className="searchWrapper">
                <SearchOutlined style={{ margin: "auto 0px", color: "#A39E89", padding:"5px", paddingLeft:"10px" }}/>
                <input type="text" defaultValue="请输入商家名、品类，或者商圈" />
            </div>

            <UserOutlined style={{ fontSize: "25px", margin: "auto 0px", paddingRight: "10px" }}/>

            <style jsx>{`
                .wrapper{
                    display: flex;
                    justify-content: space-between;
                    background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
                    height: ${height};
                }

                .city{
                    display: flex;
                    flex-direction: row;
                    margin: auto 0px;
                }

                .city span{
                    font-size: 14px;
                    margin-left: 20px; 
                }

                .searchWrapper{
                    display: flex;
                    align-content: space-around;
                    margin: auto 0px;
                    background-color: #FFF9E5;
                    border-radius: 10px; 
                }
                
                input {
                    width: calc(100vw - 150px);
                    height: 32px;
                    background-color: #FFF9E5;
                    border: none;
                    color: #A39E89; 
                    border-radius: 10px; 
                }

                @media (max-width: 375px) {
                    input {
                        width: 225px;
                    }
                }
            `}</style>
        </div>
    )
}