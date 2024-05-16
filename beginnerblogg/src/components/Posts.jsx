import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Posts = () => {
  const { posts } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  /*   const handleEdit = (postId) => {
    console.log("Edit post with id:", postId);
    <Link to={`/edit/${post.id}`}>Edit</Link>;
  }; */

  return (
    <div>
      {posts.map((post) => {
        const isCurrentUserAuthor = post.author === currentUser.email;
        return (
          <div key={post.id}>
            <p>{post.author}</p>
            <h3>{post.title}</h3>
            <p>{post.text}</p>

            {isCurrentUserAuthor && (
              <div>
                <Link to={`/edit/${post.id}`}>Edit</Link>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
