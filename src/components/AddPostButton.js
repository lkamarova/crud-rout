import { NavLink } from "react-router-dom";

const AddPostButton = () => {
  return (
    <div className="postWrap">
      <NavLink to="/posts/new">
        <button className="button addButton">Создать пост</button>
      </NavLink>
    </div>
  );
};

export default AddPostButton;
