export default function Footer() {
    return (
        <div className="wrapper">

            <ul className="nav">
                <li className="item">首页</li>
                <span className="divide">|</span>
                <li className="item">我的</li>
                <span className="divide">|</span>
                <li className="item">美团下载</li>
                <span className="divide">|</span>
                <li className="item">电脑版</li>
                <span className="divide">|</span>
                <li className="item">帮助</li>
            </ul>

            <ul className="links">
                <li>友情链接：</li>
                <li>猫眼电影</li>
                <li>大众点评</li>
                <li>美团旅行</li>
                <li>榛果民宿</li>
                <li>大众点评下载</li>
                <li>美团收银官网</li>
                <li>美团大学·餐饮学院</li>
                <li>快驴进货</li>
                <li>商家合作</li>
            </ul>
            
            <div className="bottomLine"></div>

            <div className="bottom">
                @2021 美团网 京ICP证070791号
            </div>

            

            <style jsx>{`
                .wrapper {

                }

                .nav{
                    display: flex;
                    justify-content: space-around;
                    font-size: 12px;
                    color: #FE8C00;
                    padding: 9px 0px;
                }

                .item{
                    padding: 0px 10px;
                }

                .divide{
                    color: black;  
                }

                .links{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    color: #646464;
                    font-size: 12px;
                    padding: 20px 0px;
                }

                .links li {
                    padding: 5px 20px;
                }

                .bottomLine{
                    height: 1px;
                    background-color: #999;
                }

                .bottom{
                    color: #999;
                    background-color: white;
                    width: 200px;
                    padding: 0px 10px;
                    /* text-align: center; */
                    margin: 0px auto;
                    font-size: 12px;
                    /* overflow: hidden; */
                    position: relative;
                    top: -6px;
                }

                @media (max-width: 375px) {
                    .wrapper {
                        width: 375px;
                    }
                }
            `}</style>
        </div>
    )
}