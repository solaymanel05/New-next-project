import React from 'react';
import Link from 'next/link';
import Testing from '../components/Testing';


export const metadata = {
  title:"Sports",
}
export default function SportNews(){
  return (
    <>
    <div>
       <p>Lorem ipsum dolor  Aliquam delectus eum voluptatibus nihil pariatur, totam natus, quaerat consequuntur ab dolores tenetur corporis. Reiciendis nisi obcaecati accusantium quo debitis exercitationem perferendis.</p>
    </div>
     <Link href={"/Posts"}>
      <button>New posts</button>
     </Link>
     <div>
      
     </div>
     
    </>
    

  );
}


