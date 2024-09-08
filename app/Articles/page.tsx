
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title:"Artical page",
}
export default function Article(){
  return (
    <div>
      <h1>go now soon!</h1>
      <Link href={"/Sports"}> <button>
        Go right Now to Sports page 
      </button></Link>
    
    </div>
  );
}


