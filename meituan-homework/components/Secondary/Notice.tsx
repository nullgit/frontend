import { } from '@ant-design/icons';

export default function Notice({ data }) {
    // console.log(data);
    return (
        <div className="wrapper">
            
            <div className="topBar">购买需知</div>

            <ul className="list">
                {data.map((i, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="title">{i.title}</div>
                            <ul >
                                {i.list.map((j, index2) => {
                                    return (<li key={index2} className="detail">{j}</li>);
                                })}
                            </ul>
                        </div>
                    );
                })}
            </ul>

            <style jsx>{`
                .wrapper{
                    border-bottom: #eee solid 14px;
                }

                .topBar{
                    font-size: 18px;
                    height: 52px;
                    line-height: 52px;
                    padding-left: 14px;
                    border-bottom: 2px solid #eee;
                }

                .list{
                    padding: 14px;
                    padding-bottom: 0px;
                }

                .item{
                    padding-bottom: 14px;
                }

                .title{
                    font-size: 18px;
                    color: #f90;
                    padding-bottom: 14px;
                }

                .detail{
                    font-size: 17px;
                    line-height: 23px;
                }

                .detail::before{
                    content: "·";
                    font-size: 20px;
                    font-weight: 1000px;
                    color: #999;
                    padding-right: 18px;
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