import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const EditPost = () => {
  const { postId } = useParams(); // Hämta postId från URL:en
  const { posts, setPosts } = useContext(BlogContext);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    // Hitta det valda inlägget baserat på postId
    const selectedPost = posts.find((post) => post.id === parseInt(postId));
    if (selectedPost) {
      setTitle(selectedPost.title);
      setText(selectedPost.text);
    }
  }, [postId, posts]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    const updatedPosts = posts.map((post) => {
      if (post.id === parseInt(postId)) {
        return {
          ...post,
          title: title,
          text: text,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={handleTitleChange} />
      <label>Text:</label>
      <textarea value={text} onChange={handleTextChange}></textarea>
      <button onClick={handleSave}>Save</button>
      <Link to="/home">Cancel</Link>
    </div>
  );
};

export default EditPost;
