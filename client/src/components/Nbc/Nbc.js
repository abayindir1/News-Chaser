import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Nbc() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  function getNews() {
    axios.get("/api/news/nbc").then((res) => {
      //   setNews(res.data);
      var items = res.data.slice(0, 11);
      setNews(items);
    });
  }
  return (
    <div>
      {news.length > 0 ? (
        news.map((el) => (
          <div className="new-card" key={el.title}>
            <div>
              <a href={el.link}>
                <img src={el.image} className="new-img" />
              </a>
            </div>
            <div className="new-content">
              <a href={el.link}>
                <h2>- {el.title}</h2>
              </a>
              <h3>{el.summary}</h3>
            </div>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
