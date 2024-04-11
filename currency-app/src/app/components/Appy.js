"use client"
import React, { useEffect, useState } from "react";

const App = () => {
    const [advice, setAdvice] = useState("");

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.slip.advice);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <p>{JSON.stringify(advice)}</p>
  );
};

export default App;