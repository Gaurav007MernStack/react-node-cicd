import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const getNames = async () => {
    const response = await axios.get("/names");
    console.log("resoponse", response.data);
    setUserName(response.data);
  };
  useEffect(() => {
    getNames();
  }, []);

  return (
    <>
      <h1>My Frontend</h1>
      <h2>{userName}</h2>
    </>
  );
}

export default App;
