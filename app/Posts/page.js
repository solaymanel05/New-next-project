import Link from "next/link";
import Todo from "../New/page";

export default async function PostsPage() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // cache: "no-store"
    next: {
      revalidate: 120,
    },
  });
  const response = await result.json();
  const postsJsx = response.map((res, key) => {
    return (
      <Link href={`/Posts/${res.id}`}>
        <div
          key={key}
          style={{
            background: "white",
            color: "black",
            display: "flex",
            flexDirection: "column",
            marginTop: "40px",
            gap: "20px",
            padding: "30px",
            borderRadius: "50px",
          }}
        >
          <h3 style={{ textAlign: "center" }}>{res.title}</h3>
          <p style={{ textAlign: "center" }}>{res.body}</p>
        </div>
      </Link>
    );
  });
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontFamily: "cursive",
          backgroundColor: "white",
          color: "black",
          padding: "10px 0",
        }}
      >
        The new posts now
      </h1>
      <div
        style={{
          backgroundColor: "teal",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {postsJsx}
      </div>
    </div>
  );
}
