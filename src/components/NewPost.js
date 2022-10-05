import { useNavigate } from "react-router-dom";
import AddEditForm from "./AddEditForm";

const NewPost = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return <AddEditForm onClose={handleClose} onSuccess={handleClose} />;
};

export default NewPost;
