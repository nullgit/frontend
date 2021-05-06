import { PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

export default function Location({data}) {
    return (
        <div className="wrapper">

            <div className="topBar">
                <div className="name">{data.name}</div>
                <div className="addressWrapper">
                    <EnvironmentOutlined />
                    <div className="distance">{data.distance}</div>
                    <div>|</div>
                    <div className="address">{data.address}</div>
                </div>
            </div>

            <div className="bottomBar">
                <div className="supplierWrapper">
                    <div className="supplier">
                        <span className="text">供应商：</span>
                        {data.supplier}
                    </div>
                    <div className="time">
                        <span className="text">服务时间：</span>
                        {data.time}
                    </div>
                </div>
                <PhoneOutlined style={{fontSize:"25px", marginTop: "8px", paddingLeft:"8px" ,borderLeft: "#eee 2px solid"}} />
            </div>
            
            <style jsx>{`
                .wrapper{
                    border-bottom: 14px solid #eee;
                }

                .topBar{
                    padding: 14px;
                    border-bottom: 2px solid #eee;
                }

                .name{
                    font-size: 18px;
                    margin-bottom: 14px;
                }

                .addressWrapper{
                    display: flex;
                    color: #999;
                }

                .addressWrapper > * {
                    padding: 0px 8px;
                    line-height: 18px;
                }

                .distance{
                    font-size: 12px;
                }

                .address{
                    font-size: 18px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                .bottomBar{
                    padding: 14px;
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                }

                .supplierWrapper{
                    width: 330px;
                }

                .supplier{
                    margin-bottom: 14px;
                }

                .text{
                    color: #999;
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