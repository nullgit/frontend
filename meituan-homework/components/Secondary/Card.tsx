import { CheckCircleOutlined } from '@ant-design/icons';

export default function Card({ data }) {
    let starNum = Math.round(data.star);
    let star = [];
    for (let i = 0; i < starNum; ++i) {
        star.push("lightStar");
    }
    for (let i = starNum; i < 5; ++i) {
        star.push("darkStar");
    }

    return (
        <div className="wrapper">

            <img src={data.img} alt="" />

            <div className="title">{data.title}</div>

            <div className="saleWrapper">
                <div className="priceWrapper">
                    <div className="price">￥{data.price}</div>
                    <div className="marketPrice">门市价：{data.marketPrice}元</div>
                </div>

                <div className="sale">已售{data.sale}</div>
            </div>

            <ul className="info">{
                data.info.map((i, index) => {
                    return (
                        <li key={index}><CheckCircleOutlined style={{color: "#f90"}} />{i}</li>
                    );
                })
            }</ul>

            <div className="bottomBar">
                <ul className="score">
                    {
                        star.map((i, index) => {
                            return (<li key={index} className={i}>★</li>);
                        })
                    }
                    <li className="totalScore">{data.star}分</li>
                </ul>
                <div className="comment">{data.comment}条评论&gt;</div>
            </div>

            <style jsx>{`
                img{
                    height: 252px;
                    width: 100%;
                }

                .title{
                    margin-top: 14px;
                    font-size: 20px;
                    padding: 14px;
                }

                .saleWrapper{
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 14px;
                }

                .priceWrapper{
                    padding-left: 14px;
                    display: flex;
                    align-items: flex-end;
                }

                .price{
                    font-size: 23px;
                    color: #ff5353;
                    font-weight: 800;
                    padding-right: 14px;
                }

                .marketPrice{
                    font-size: 14px;
                    color: #999;
                }

                .sale{
                    padding-right: 14px;
                    color: #999;
                    font-size: 14px;
                    display: flex;
                    align-items: flex-end;
                }

                .info{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    padding: 14px;
                    background-color: #fbfbfb;
                }

                .info li {
                    font-size: 14px;
                    color: #666;
                    margin: 2px 14px;
                }

                .bottomBar{
                    display: flex;
                    padding: 14px;
                    justify-content: space-between;
                    border-bottom: #eee solid 14px;
                }

                .score{
                    display: flex;
                }

                .score li{
                    padding: 0px 5px;
                    font-size: 20px;
                }

                .lightStar,
                .totalScore{
                    color: #f90;
                }

                .darkStar{
                    color: #999;
                }

                .comment{
                    color: #ababab;
                    font-size: 18px;
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