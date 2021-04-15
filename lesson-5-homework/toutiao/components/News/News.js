import styles from "./News.module.css"
import React, { useEffect, useState } from "react";
// import {PlusOutlined} from "@ant-design/icons"

export default function Nav() {
    const [state, setState] = useState({
        list: [],
      });
    
      useEffect(() => {
        fetch("/api/news").then(async (res) => {
          const resp = await res.json();
          setState({
            list: resp.data,
          });
        });
      }, []);
    
      return (
          <div className={styles.newsWrapper}>
                {state.list.map((i, index) => {
                    if (i.top) {
                        return (
                            <div className={styles.singleWrapper} key={index}>
                                <div className={styles.single}>
                                    <h2 className={styles.title}><a>{i.title}</a></h2>
                                    <ul className={styles.footbar}>
                                        <div className={styles.top}>置顶</div>
                                        <li><a>{i.media}&nbsp;</a></li>
                                        <li><a>评论{i.recommend}&nbsp;</a></li>
                                        <li><a>{i.time}</a></li>
                                    </ul>
                                </div>
                            </div>
                        );
                    } else if (i.mode === "single") {
                        return (
                            <div className={styles.singleWrapper} key={index}>
                                <div className={styles.single}>
                                    <h2 className={styles.title}><a>{i.title}</a></h2>
                                    <ul className={styles.footbar}>
                                        <li><a>{i.media}&nbsp;</a></li>
                                        <li><a>评论{i.recommend}&nbsp;</a></li>
                                        <li><a>{i.time}</a></li>
                                    </ul>
                                </div>
                            </div>
                        );
                    } else if (i.mode === "image-text") {
                        return (
                            <div className={styles.imageTextWrapper} key={index}>
                                <div className={styles.imageText}>
                                    <div className={styles.text}>
                                        <h2 className={styles.title}><a>{i.title}</a></h2>
                                        <ul className={styles.footbar}>
                                            <li><a>{i.media}&nbsp;</a></li>
                                            <li><a>评论{i.recommend}&nbsp;</a></li>
                                            <li><a>{i.time}</a></li>
                                        </ul>
                                    </div>
                                    <div className={styles.image}>
                                        <img src={i.img} alt=""/>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (i.mode === "image-list") {
                        return (
                            <div className={styles.imageListWrapper} key={index}>
                                <div className={styles.imageList}>
                                    <h2 className={styles.title}><a>{i.title}</a></h2>
                                    <ul className={styles.images}>
                                        <img src={i.img[0]} alt=""/>
                                        <img src={i.img[1]} alt=""/>
                                        <img src={i.img[2]} alt=""/>
                                    </ul>
                                    <ul className={styles.footbar}>
                                        <li><a>{i.media}&nbsp;</a></li>
                                        <li><a>评论{i.recommend}&nbsp;</a></li>
                                        <li><a>{i.time}</a></li>
                                    </ul>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div className={styles.imageFocusWrapper} key={index}>
                                <div className={styles.imageFocus}>
                                    <h2 className={styles.title}><a>{i.title}</a></h2>
                                    <img src={i.img} alt=""/>
                                    <ul className={styles.footbar}>
                                        <li><a>{i.media}&nbsp;</a></li>
                                        <li><a>评论{i.recommend}&nbsp;</a></li>
                                        <li><a>{i.time}</a></li>
                                    </ul>
                                </div>
                            </div>
                        );
                    }
                })}
          </div>
      );
}
