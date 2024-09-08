import React from 'react';

export default  function  ShowArticle(props) {
  console.log(props)

  return (
    <div>
      <h1>this is my articles</h1>
      <p>please enjoy with us </p>
      <h1>{props.params.title}</h1>
      
    </div>
  );
}

