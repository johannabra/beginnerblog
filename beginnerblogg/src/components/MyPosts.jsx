import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const MyPosts = () => {
  const { posts, setPosts } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };
  const myPosts = posts.filter((post) => post.author === currentUser.email);

  return (
    <div className="flex flex-col">
      {myPosts.map((post) => {
        const isCurrentUserAuthor = post.author === currentUser.email;
        return (
          <div key={post.id} className=" bg-slate-200 border-solid m-2 px-8">
            <p className="text-blue-700 font-bold">{post.author}</p>
            <h3>{post.title}</h3>
            <p>{post.text}</p>

            {isCurrentUserAuthor && (
              <div>
                <button aria-label="edit">
                  <Link to={`/edit/${post.id}`}>Edit</Link>
                </button>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MyPosts;
