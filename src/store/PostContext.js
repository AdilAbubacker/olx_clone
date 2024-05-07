import React, { createContext, useEffect, useState } from "react";

export const PostContext = createContext(null);

function Post({ children }) {
  
  const [postDetails, setPostDetails] = useState(() => {
    const storedPostDetails = localStorage.getItem("postDetails");
    return storedPostDetails ? JSON.parse(storedPostDetails) : null;
  });

  
  useEffect(() => {
    if (postDetails) {
      localStorage.setItem("postDetails", JSON.stringify(postDetails));
    } else {
     
      localStorage.removeItem("postDetails");
    }
  }, [postDetails]);

  return (
    <PostContext.Provider value={{ postDetails, setPostDetails }}>
      {children}
    </PostContext.Provider>
  );
}

export default Post;
