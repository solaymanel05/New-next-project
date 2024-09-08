import React from 'react';

export const metadata = {
  title:"Artical page",
}
export default function layout({children}) {
  return (
    <div>
      <h1>this page of articles</h1>
      <div
      style={{width:"100%",padding:"20px",color:"white"}}>

        {children}
      </div>
    </div>
  );
}


