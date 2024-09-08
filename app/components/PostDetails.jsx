// pages/posts/[postId].js


import React from 'react';

export default async function PostDetails({postId }) {
  await new Promise((resolve) => {
   setTimeout(() => {
     resolve()
   },5000)
  })
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
    next:{
      revalidate:120,
    }
  })
  const result = await response.json()


  return (
    <div>
      <h1>Post :</h1>
      <h3>{result.id}</h3>
      <h2>{result.title}</h2>
      <p>{result.body}</p>
    </div>
  );
}
