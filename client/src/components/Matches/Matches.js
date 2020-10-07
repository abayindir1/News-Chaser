import React, { useEffect } from "react";
import axios from "axios";

export default function Matches() {
  useEffect(() => {
    axios.get("/api/scores").then((response)=>{
        console.log(response.data)
    })
  }, []);


  return (
    <div>
      <h1>matches</h1>
    </div>
  );
}
