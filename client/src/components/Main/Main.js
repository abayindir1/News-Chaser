import React, { Component } from "react";
import DailyMail from "../DailyMail/DailyMail";
import Matches from "../Matches/Matches";
import Nbc from "../Nbc/Nbc";
import SkySports from "../SkySports/SkySports";
import Table from "../Table/Table";

class Main extends Component {
  state = {
    isScore: "matches",
    status: "sky",
  };

  render() {
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
              <div className="news-buttons">
                <button
                  className={
                    this.state.status === "sky" ? "active" : "news-btn"
                  }
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({
                      status: "sky",
                    });
                  }}
                >
                  Sky Sports
                </button>
                <button
                  className={
                    this.state.status === "nbc" ? "active" : "news-btn"
                  }
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({
                      status: "nbc",
                    });
                  }}
                >
                  NBC
                </button>
                <button
                  className={this.state.status === "dm" ? "active" : "news-btn"}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({
                      status: "dm",
                    });
                  }}
                >
                  Daily Mail Sports
                </button>
              </div>
            </div>
            {this.state.status === "sky" ? (
              <SkySports />
            ) : this.state.status === "nbc" ? (
              <Nbc />
            ) : (
              <DailyMail />
            )}
          </div>

          <div className="right-col">
            <div className="league-table">
              <h1 className="header">League Standings</h1>
            <Table/>
            </div>
              
              <div className="matches">
              <h1 className="header">Scores This Week</h1>
            <Matches/>
              </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
