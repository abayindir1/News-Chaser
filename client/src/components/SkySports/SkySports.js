import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SkySports() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  function getNews(){
      axios.get("/api/news/sky-sports").then(res =>{
          setNews(res.data)
          console.log(res.data)
      })
  };


  return (
  <div>
      {news.length > 0 ? (
           news.map((el) => (
            <h3>{el.title}</h3>
          ))
      ):(
          <h1>No News Found!</h1>
      )}
  </div>
  );
}
