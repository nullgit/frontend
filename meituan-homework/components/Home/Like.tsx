import Link from 'next/link';
import { RightOutlined } from '@ant-design/icons'

export default function Like({ list }) {
    return (
        <div className="wrapper">
            <div className="topBar">猜你喜欢</div>

            {list.map((i, index) => {
                return (
                    <Link href="/secondary" key={index}>
                        <a className="item" key={index}>
                            <div className="imgWrapper">
                                <img src={i.img}></img>
                            </div>

                            <div className="infoWrapper">
                                <div className="titleWrapper">
                                    <span className="title">{i.title}</span>
                                    <div className="subtitle">{i.subtitle}</div>
                                </div>

                                <div className="footer">
                                    <div className="priceWrapper">
                                        <div className="price">{i.price}元</div>
                                        <div className="marketPrice">门市价：{i.marketPrice}元</div>
                                    </div>

                                    <div className="sale">已售{i.sale}</div>
                                </div>
                            </div>
                        </a>
                    </Link>
                );
            })}

            <div className="all">
                查看全部团购
                <RightOutlined style={{fontSize: "12px", float: "right", height: "40px", padding: "14px 0px"}} />
            </div>

            <style jsx>{`
                a{
                    text-decoration: none;
                    color: black;
                }

                .topBar{
                    margin: 14px 10px 0px 10px;
                    padding: 0px 0px 10px 0px;
                    border-bottom: solid 2px #F0EFED;
                }

                .item{
                    display: block;
                    height: 92px;
                    margin: 8px 10px 0px 10px;
                    padding-bottom: 10px;
                    border-bottom: solid 2px #F0EFED;
                }

                .imgWrapper{
                    float: left;
                    width: 82px;
                    overflow: hidden;
                    margin-right: 5px;
                }

                img {
                    height: 82px;
                }

                .infoWrapper{
                    width: calc(100vw - 124px);
                    height: 82px;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    overflow: hidden;
                }

                .title,
                .subtitle{
                    width: calc(100vw - 115px);
                    display: inline-block;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                
                .title{
                    font-size: 15px;
                    margin: 5px 0px 6px 0px;
                }

                .subtitle{
                    font-size: 12px;
                    color: #666;
                }

                .footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }
                
                .priceWrapper{
                    display: flex;
                    align-items: flex-end;
                }

                .price{
                    font-size: 18px;
                    color: #f60;
                }

                .marketPrice{
                    padding-left: 4px;
                    font-size: 12px;
                    color: #666;
                }

                .sale{
                    font-size: 12px;
                    color: #666;
                }

                .all{
                    height: 40px;
                    line-height: 40px;
                    border-top: 2px solid #F0EFED;
                    border-bottom: 3px solid #F0EFED;
                    color: #FE8C00;
                    padding: 0px 10px;
                }

                @media (max-width: 375px) {
                    .infoWrapper,
                    .title,
                    .subtitle {
                        width: 263px;
                    }
                }
            `}</style>
        </div>
    );
}