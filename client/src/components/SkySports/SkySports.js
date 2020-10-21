import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SkySports() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  function getNews() {
    axios.get("/api/news/sky-sports").then((res) => {
      setNews(res.data);
      console.log(res.data);
    });
  }

  return (
    <div>
      {news.length > 0 ? (
        news.map((el) => (
          <div className="sky-new-card">
            <div>
              <a href={el.link}>
                <img src={el.image} className="sky-new-img" />
              </a>
            </div>
            <div className="sky-new-content">
              <a href={el.link}>
                <h2>- {el.title}</h2>
              </a>
              <h3>{el.summary}</h3>
              <p className="sky-new-date">{el.date}</p>
            </div>
          </div>
        ))
      ) : (
        <h1>No News Found!</h1>
      )}
    </div>
  );
}
