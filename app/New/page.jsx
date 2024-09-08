"use client";

import { useEffect, useState } from "react";
import Testing from "../components/Testing"
export default function Todo() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setValue(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
       {value ? ( value.map((val,key) => {
          return(
            <div key={key}>
              <h1>{val.name}</h1>
            </div>
          )
        })):(
          <h4>Looding...</h4>
        )}
        
    
      
      <h1>New thing</h1>
      <Testing/>
    </div>
  );
}

