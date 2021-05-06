export default function Nav() {
    return (
        <div className="wrapper">
            <ul className="wrapper1">
                <li>
                    <div className="imgWrapper" style={{ backgroundColor: "#FE8C00" }}>
                        <img src="./img/meishi.png"></img>
                    </div>
                    <span>美食</span>
                </li>
                <li>
                    <div className="imgWrapper" style={{ backgroundColor: "#EE1B22" }}>
                        <img src="./img/maoyan.jfif"></img>
                    </div>
                    <span>猫眼电影</span>
                </li>
                <li>
                    <div className="imgWrapper" style={{ backgroundColor: "#8a90fa" }}>
                        <img src="./img/jiudian.png"></img>
                    </div>
                    <span>酒店</span>
                </li>
                <li>
                    <div className="imgWrapper" style={{ backgroundColor: "#fed030" }}>
                        <img src="./img/yule.png"></img>
                    </div>
                    <span>休闲娱乐</span>
                </li>
                <li>
                    <div className="imgWrapper" style={{ backgroundColor: "#fd9d21" }}>
                        <img src="./img/waimai.png"></img>
                    </div>
                    <span>外卖</span>
                </li>
            </ul>

            <ul className="wrapper2">
            <li>
                    <div className="imgWrapper" style={{ backgroundColor: "#fed030" }}>
                        <img src="./img/ktv.png"></img>
                    </div>
                    <span>KTV</span>
                </li>
                <li>
                    <div className="imgWrapper" style={{ backgroundColor: "#FE8C00" }}>
                        <img src="./img/lvyou.png"></img>
                    </div>
                    <span>周边游</span>
                </li>
                <li>
                    <div className="imgWrapper" style={{ backgroundColor: "#ff80c2" }}>
                        <img src="./img/liren.png"></img>
                    </div>
                    <span>丽人</span>
                </li>
                <li>
                    <div className="imgWrapper" style={{ backgroundColor: "#fd9d21" }}>
                        <img src="./img/xiaochi.png"></img>
                    </div>
                    <span>小吃快餐</span>
                </li>
                <li>
                    <div className="imgWrapper" style={{ backgroundColor: "#00d3be" }}>
                        <img src="./img/more.png"></img>
                    </div>
                    <span>全部分类</span>
                </li>
            </ul>

            <style jsx>{`
                .wrapper{
                    height: 178px;
                    /* background-color: aquamarine; */
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    font-size: 12px;
                    color: #666;
                    border-bottom: solid #F0EFED 12px;
                }

                .wrapper1,
                .wrapper2{
                    display: flex;
                    justify-content: space-around;
                }

                li{
                    width: 50px;
                    height: 60px;
                    text-align: center;
                }

                li span{
                    display: inline-block;
                    width: 50px;
                    white-space: nowrap;
                    text-align: center;
                    padding-top: 10px;
                }

                .imgWrapper{
                    width:40px;
                    height: 40px;
                    margin: 0px 5px;
                    border-radius: 20px;
                    display: flex;
                }

                img{
                    width: 32px;
                    height: 32px;
                    margin: auto auto;
                    border-radius: 30px;
                }
            `}</style>
        </div>
    )
}