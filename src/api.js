export const fetchPosts = () =>
  fetch("http://localhost:7777/posts", { method: "GET" }).then((res) =>
    res.json()
  );

export const removePost = (postId) =>
  fetch(`http://localhost:7777/posts/${postId}`, { method: "DELETE" });
