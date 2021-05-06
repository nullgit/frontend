export default function GoAPP() {
    const height = "52px";

    return (
        <div className="wrapper">
            <div className="leftWrapper">
                <img src="./img/meituan.png" alt="" />
                <div className="slogan">
                    <span className="slogan1">省钱利器 购物超划算</span>
                    <span className="slogan2">吃喝玩乐尽在美团</span>
                </div>
            </div>

            <div className="goAPP">去APP</div>
            
            <style jsx>{`
                .wrapper{
                    display: flex;
                    justify-content: space-between;
                    background-color: black;
                    color: white;
                    height: ${height};
                }

                .leftWrapper{
                    display: flex;
                }

                img {
                    width: 40px;
                    height: 40px;
                    margin: 6px 5px 6px 10px;
                }

                .slogan{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 40px;
                    margin: 6px 0px;
                    width: 200px;
                }

                .slogan1{
                    font-size: 13px;
                    padding-bottom: 5px;
                }

                .slogan2{
                    font-size: 12px;
                }

                .goAPP{
                    float: right;
                    background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
                    width: 55px;
                    height: 30px;
                    border-radius: 10px;
                    color: black;
                    line-height: 30px;
                    margin: 11px 10px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}