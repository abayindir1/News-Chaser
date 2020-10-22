import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function Nbc() {
    const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  function getNews() {
    axios.get("/api/news/nbc").then((res) => {
    //   setNews(res.data);
    var items = res.data.slice(0, 15)
      setNews(items)
    });
  }
    return (
        <div>
            bum
        </div>
    )
}
