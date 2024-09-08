// pages/posts/[postId].js


import React, { Suspense } from 'react';
import PostDetails from "../../components/PostDetails"
export default async function PostTime({ params }) {

  const postid = params.postId

  const loadingJsx = (
    <h3>
      Loading..
    </h3>
  )
  return (
    <div>
      <h1>Post :</h1>
      <Suspense fallback={loadingJsx}>
      <PostDetails postId={postid}/>
      </Suspense>
      
    </div>
  );
}

