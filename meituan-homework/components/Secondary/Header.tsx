import { LeftOutlined, ShareAltOutlined, StarOutlined } from '@ant-design/icons';

export default function Header() {
    const iconStyle = { fontSize: "25px", height: "52px", lineHeight: "52px", margin: "10px", marginTop:"5px" };
    return (
        <div className="wrapper">
            <LeftOutlined style={iconStyle} />

            <span>产品详情</span>

            <div className="share">
                <ShareAltOutlined style={iconStyle} />
                <StarOutlined style={iconStyle} />
            </div>

            <style jsx>{`
                .wrapper{
                    height: 52px;
                    background-color: #ffc300;
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                }

                span{
                    font-size: 20px;
                    height: 52px;
                    line-height: 52px;
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