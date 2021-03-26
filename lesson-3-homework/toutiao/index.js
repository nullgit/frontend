let center = document.getElementsByClassName("center")[0];
let newsNum = 1;

document.onscroll = function () {
    //滚动条滚动到底，增加新闻条目
    if (
        Math.abs(
            document.documentElement.scrollHeight -
            document.documentElement.scrollTop -
            document.documentElement.clientHeight
        ) < 1
    ) {
        let request = new XMLHttpRequest();
        let url = "http://localhost:3000/news";
        let news;

        request.onload = function () {
            console.log(request.status);
            if (request.status === 200) {
                news = JSON.parse(request.responseText);
            }

            for (let anew of news) {
                let VDOM;
                let time = new Date(anew["time"]).getTime()
                let curTime = new Date("3/26/2021 23:23:23").getTime()
                let dTime = curTime - time
                if (dTime < 60000) {
                    time = Number.parseInt(dTime/1000) + "秒"
                } else if (dTime < 3600000) {
                    time = Number.parseInt(dTime/60000) + "分种"
                } else if (dTime < 86400000) {
                    time = Number.parseInt(dTime/3600000) + "小时"
                } else {
                    time = Number.parseInt(dTime/86400000) + "天"
                }

                if (anew["type"] === "no-mode") {
                    VDOM = (
                        <div  className="no-mode">
                            <div  className="title-box">
                                <a  className="link" href="">{anew["link"]}</a>
                            </div>

                            <div  className="footer-bar">
                                <div  className="footer-bar-left">
                                    <a  className={"tag " + anew["tag-color"]} href="">{anew["tag"]}</a>
                                    <a  className="media" href=""><img src={anew["media"]} alt=""/></a>
                                    <a  className="source" href="">{" " + anew["source"] + " ⋅"}</a>
                                    <a  className="recommend" href="">{" " + anew["recommend"] + "评论 "}</a>
                                    <span  className="time">{"⋅ " + time + "前"}</span>
                                </div>
                                <div  className="footer-bar-right">
                                    <span  className="dislike">×</span>
                                </div>
                            </div>
                        </div>
                    )
                } else if (anew["type"] === "single-mode") {
                    VDOM = (
                        <div  className="single-mode">
                            <div  className="single-mode-lbox">
                                <a  className="img-wrap" href=""><img src={anew["img"]} /></a>
                            </div>

                            <div  className="single-mode-rbox">
                                <div  className="title-box"><a  className="link" href="">{anew["link"]}</a></div>

                                <div  className="footer-bar">
                                    <div  className="footer-bar-left">
                                        <a  className={"tag " + anew["tag-color"]} href="">{anew["tag"]}</a>
                                        <a  className="media" href=""><img src={anew["media"]} /></a>
                                        <a  className="source" href="">{" " + anew["source"] + " ⋅"}</a>
                                        <a  className="recommend" href="">{" " + anew["recommend"] + "评论 "}</a>
                                        <span  className="time">{"⋅ " + time + "前"}</span>
                                    </div>

                                    <div  className="footer-bar-right">
                                        <span  className="dislike">×</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                ReactDOM.render(VDOM, document.getElementsByClassName('news' + newsNum)[0]);
                let next = document.createElement("div")
                next.className = "news" + (++newsNum)
                center.appendChild(next)
            };

        }

        request.open("GET", url);
        request.send(null);
    }
};