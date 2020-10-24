import React, { useState } from "react";
import DailyMail from "../DailyMail/DailyMail";
import Matches from "../Matches/Matches";
import Nbc from "../Nbc/Nbc";
import SkySports from "../SkySports/SkySports";
import Table from "../Table/Table";

function Main() {
  const [isScores, setIsScores] = useState(true);
  const [status, setStatus] = useState("sky")

  return (
    <>
      <div className="main">
        <img src={require("../../images/logo.png")} id="logo" alt="logo" />
        <h1 className="title">
          Get the latest news of Premier League football
        </h1>
      </div>

      <div className="page-content">
        <div className="left-col">
          <div className="left-col-header">
            <h1>News</h1>
            <div className="news-buttons">
              <button className={status === "sky" ? "news-btn active" : "news-btn"}
                type="button"
                onClick={(e) => {
                  setStatus("sky");
                }}>Sky Sports</button>
              <button className={status === "nbc" ? "news-btn active" : "news-btn"}
                type="button"
                onClick={(e) => {
                  setStatus("nbc");
                }}>NBC</button>
              <button className={status === "dm" ? "news-btn active" : "news-btn"}
                type="button"
                onClick={(e) => {
                  setStatus("dm");
                }}>Daily Mail Sports</button>
            </div>
          </div>
          {status === 'sky' ? <SkySports/> : status === 'nbc' ? <Nbc/> : <DailyMail/>}
        </div>


        <div className="right-col">
          <div className="buttons">
            {isScores ? (
              <button
                className="btn"
                type="button"
                onClick={(e) => {
                  setIsScores(false);
                }}
              >
                <i className="fas fa-table"></i> Switch Table To Standings <i className="fas fa-table"></i>
              </button>
            ) : (
              <button
                className="btn"
                type="button"
                onClick={(e) => {
                  setIsScores(true);
                }}
              >
                <i className="fas fa-futbol"></i> Switch Table To Matches <i className="fas fa-futbol"></i>
              </button>
            )}
          </div>
          {isScores ? <Matches /> : <Table />}
        </div>
      </div>
    </>
  );
}

export default Main;
