import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../api";
import AddPostButton from "./AddPostButton";
import Comment from "./Comment";
import Post from "./Post";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isCanselled = false;
    const getPosts = () => {
      fetchPosts().then(
        (posts) => {
          if (!isCanselled) {
            setPosts(posts);
            setLoading(true);
            console.log("posts", posts);
          }
        },

        (error) => {
          console.log(error);
        }
      );
    };

    getPosts();

    return () => {
      isCanselled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="postsPage">
        <AddPostButton />
        {posts.map((post) => (
          <div
            className="postClick"
            key={post.id}
            onClick={() => navigate(`/posts/${post.id}`)}
          >
            <Post post={post} footer={<Comment />} />
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default PostsPage;
