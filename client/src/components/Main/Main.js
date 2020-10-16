import React, { useState } from "react";
import Matches from "../Matches/Matches";
import Table from "../Table/Table";

function Main() {
  const [isScores, setIsScores] = useState(true);

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
          <h1>left col</h1>
        </div>
        <div className="right-col">
          <div className="buttons">
            {isScores ? (
              <button
                class="btn"
                onClick={() => {
                  setIsScores(false);
                }}
              >
                <i class="fas fa-table"></i> Switch Table To Standings <i class="fas fa-table"></i>
              </button>
            ) : (
              <button
                class="btn"
                onClick={() => {
                  setIsScores(true);
                }}
              >
                <i class="fas fa-futbol"></i> Switch Table To Matches <i class="fas fa-futbol"></i>
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
