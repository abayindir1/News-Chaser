import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  function getMatches() {
    axios.get("/api/scores").then((response) => {
      setMatches(response.data);
    });
  }
  return (
    <div className="table">
      <table id="scores-table">
        <tbody>
          <tr>
            <th>Match Between</th>
            <th>Scores</th>
          </tr>
          {matches.length > 0 && !matches.forEach(element => element !== " ") ? (
            matches.map((match) => (
              <tr key={match.team}>
                <td>{match.team}</td>
                <td>{match.scores === "" ? "Not Played" : match.scores}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No matches found!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
