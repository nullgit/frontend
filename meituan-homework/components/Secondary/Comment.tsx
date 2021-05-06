// import { LeftOutlined, ShareAltOutlined, StarOutlined } from '@ant-design/icons';

export default function Comment({data}) {
    return (
        <div className="wrapper">
            
            <div className="topBar">用户评价（{data.num}）</div>

            <ul className="list">{
                data.list.map((i, index) => {
                    let starNum = i.star;
                    let star = [];
                    for (let k = 0; k < starNum; ++k) {
                        star.push("lightStar");
                    }
                    for (let k = starNum; k < 5; ++k) {
                        star.push("darkStar");
                    }

                    return (
                        <li key={index} className="item">
                            <div className="imgWrapper">
                                <img src={i.img} alt="" />
                            </div>

                            <div className="rightWrapper">
                                <div className="nameWrapper">
                                    <div className="name">{i.name}</div>
                                    <div className="time">{i.time}</div>
                                </div>

                                <ul className="starBar">
                                    <span className="text">打分</span>
                                    {
                                        star.map((j, index2) => {
                                            return (<li key={index2} className={j}>★</li>);
                                        })
                                    }
                                </ul>

                                <div className="content">{i.content}</div>
                            </div>
                        </li>
                    );
                })
            }</ul>

            <div className="bottomBar">查看全部{data.num}条评价v</div>

            <style jsx>{`
                .wrapper{

                }

                .topBar{
                    font-size: 18px;
                    height: 52px;
                    line-height: 52px;
                    border-bottom: 2px solid #eee;
                    padding-left: 14px;
                }

                .bottomBar{
                    font-size: 18px;
                    height: 40px;
                    text-align: center;
                    border-bottom: 14px solid #eee;
                    color: #999;
                }

                .item{
                    display: flex;
                    margin: 14px;
                    padding-bottom: 20px; 
                    border-bottom: #eee solid 2px;
                }

                .imgWrapper{
                    padding-right: 5px;
                }

                img{
                    width: 60px;
                }

                .rightWrapper{
                    width: calc(100vw - 93px);
                }

                .nameWrapper{
                    display: flex;
                    justify-content: space-between;
                }

                .time{
                    color: #999;
                }

                .name{
                    font-size: 18px;
                    /* margin-bottom: 14px; */
                    padding: 14px;
                    padding-left: 5px;
                }

                .starBar{
                    display: flex;
                    padding-bottom: 14px;
                }

                .starBar .text{
                    font-size: 14px;
                }

                .starBar > * {
                    padding: 0px 5px;
                }

                .lightStar{
                    color: #f90;
                }

                .darkStar{
                    color: #999;
                }

                .content{
                    font-size: 16px;
                    line-height: 20px;
                }

                @media (max-width: 375px) {
                    .wrapper {
                        width: 375px;
                    }

                    .rightWrapper{
                        width: 282px;
                    }
                }
            `}</style>
        </div>
    )
}