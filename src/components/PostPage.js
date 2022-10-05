import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChangeDeleteFooter from "./ChangeDeleteFooter";
import Post from "./Post";
import AddEditForm from "./AddEditForm";
import { deletePost, getPost } from "../utils";

const PostPage = () => {
  const { postId } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [post, setPost] = useState();
  const isLoaded = !!post;
  const postIdNum = Number(postId);
  const navigate = useNavigate();

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const res = await getPost(postIdNum);
    setPost(res);
  };

  const handleDelete = async () => {
    try {
      await deletePost(postIdNum);
      loadPost();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditCompleted = async () => {
    await loadPost();
    setEditMode(false);
  };

  return (
    <div className="postsPage">
      {isLoaded && editMode && (
        <AddEditForm
          postId={postIdNum}
          defaultValue={post.content}
          onSuccess={handleEditCompleted}
          onClose={() => setEditMode(false)}
        />
      )}
      {isLoaded && !editMode && (
        <Post
          post={post}
          footer={
            <ChangeDeleteFooter
              id={postIdNum}
              handleDelete={() =>handleDelete(postIdNum)}
              handleEdit={() => setEditMode(true)}
            />
          }
        />
      )}
    </div>
  );
};

export default PostPage;
