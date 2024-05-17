import { createContext, useState, useEffect } from "react";

export const ResponsContext = createContext();

export const CommentProvider = (props) => {
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments"))
  );

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <ResponsContext.Provider value={{ comments, setComments }}>
      {props.children}
    </ResponsContext.Provider>
  );
};
