import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Officel",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{width:"100%", height:"40px", background:"teal", color:"white", display:"flex", justifyContent:"space-between", padding:"0 30px", alignItems:"center",gap:"15px",textTransform:"uppercase"}}>
            <h1>Officel</h1>
           <div style={{display:'flex', gap:"20px"}}>
           <Link href={"/Sports"}>Sports</Link>
           <Link href={"/Posts"}>New Posts</Link>
           <Link href={"/Articles"}>Articles</Link>
           <Link href={"/New"}>Appliction</Link>
           </div>
           
        
        
        </nav>
    
        {children}</body>
    </html>
  );
}
