import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${data}`)
    .then(response => {
      setData(response.data);
    });
  }, [data]);

  const handleChange = (e) => {
    e.preventDefault();
    setData("");
  };

  const onSearch = (e) => {
    e.preventDefault();
    setData(e.target.value);
  }

  return (
    <div>
      <h1>Countries</h1>
      <form onSubmit={onSearch}>
        <input type="text" value={data} onChange={handleChange} />
      </form>
      <ul>
        {data.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;