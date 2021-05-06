// import { LeftOutlined, ShareAltOutlined, StarOutlined } from '@ant-design/icons';

export default function Footer({data}) {
    return (
        <div className="wrapper">

            <div className="priceWrapper">
                <div className="price">￥{data.price}</div>
                <div className="marketPrice">门市价：{data.marketPrice}</div>
            </div>

            <div className="button">在线预订</div>

            <style jsx>{`
                .wrapper{
                    position: sticky;
                    bottom: 0px;
                    background-color: white;
                    display: flex;
                    justify-content: space-between;
                    height: 62px;
                }

                .priceWrapper{
                    height: 62px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    padding-left: 14px;
                }

                .price{
                    font-size: 23px;
                    color: #ff5353;
                    font-weight: 800;
                }

                .marketPrice{
                    font-size: 14px;
                    color: #999;
                }

                .button{
                    width: 144px;
                    background-color: #f90;
                    color: white;
                    font-size: 20px;
                    text-align: center;
                    height: 62px;
                    line-height: 62px;
                    /* text */
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