import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Table() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  function getMatches() {
    axios.get("/api/table").then((response) => {
      setTeams(response.data);
      console.log(response.data);
    });
  }

  return (
    <div className="table">
      <table id="scores-table">
        <tbody>
          <tr>
            <th>Club</th>
            <th>MP</th>
            <th>GF</th>
            <th>Pts</th>
          </tr>
          {teams.length > 0 ? (
            teams.map((team) => (
              <tr key={team.team}>
                <td>{team.team}</td>
                <td>{team.played}</td>
                <td>{team.difference}</td>
                <td>{team.points}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No teams found!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
