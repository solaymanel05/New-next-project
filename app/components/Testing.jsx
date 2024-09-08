"use Client";

import React, { useEffect, useState } from "react";

export default function Testing() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const response = await result.json();
        setData([response]);
      } catch (error) {
        console.log("error your code try again");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        data.map((val, key) => {
          return (
            <div key={key}>
              <h1>{val.title}</h1>
            </div>
          );
        })
      ) : (
        <h4>Looding...</h4>
      )}
    </div>
  );
}
