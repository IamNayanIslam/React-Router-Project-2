import { useLoaderData } from "react-router-dom";
import "./Posts.css";

export default function Posts() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div className="posts-wrap">
      <h1>Read all the latest posts here</h1>

      <div className="posts">
        {posts.slice(1, 16).map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>
              {post.body} {post.body} {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
