import React, { useState, useEffect } from "react";
import { fetchAllCharacters } from "./lotr_api";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchAllCharacters()
      .then((result) => {
        setCharacters(result.docs);
        setError("");
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const renderCharacterRow = (c) => (
    <tr key={c._id}>
      <td>{c.name}</td>
      <td>{c.race}</td>
      <td>
        <a href={c.wikiUrl} rel="noopener noreferrer" target="_blank">
          wiki
        </a>
      </td>
      <td>{c.gender}</td>
      <td>{c.birth}</td>
      <td>{c.death}</td>
    </tr>
  );
  let status = "";
  if (error.length > 0) {
    status = error;
  } else if (isLoading) {
    status = "Loading...";
  } else {
    status = `${characters.length} characters found`;
  }
  return (
    <div>
      <h1>LOTR Characters DB</h1>
      <p><strong>Status:</strong> {status}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Race</th>
            <th>Wiki</th>
            <th>Gender</th>
            <th>Birth</th>
            <th>Death</th>
          </tr>
        </thead>
        <tbody>{characters.map(renderCharacterRow)}</tbody>
      </table>
    </div>
  );
}

export default App;
