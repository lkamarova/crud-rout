import { useState } from "react";
import avatar from "../avatar.png";
import { addPost } from "../utils";

const AddEditForm = ({ postId, defaultValue, onSuccess, onClose }) => {
  const [dataForm, setDataForm] = useState(defaultValue || "");

  const handleChange = (value) => {
    setDataForm(value);
  };

  const handleSubmit = async () => {
    const obj = {
      id: postId || 0,
      content: dataForm,
    };

    try {
      await addPost(obj);
      onSuccess();
    } catch (err) {
      console.error(err);
    }

    setDataForm("");
  };

  return (
    <div className="formWrap">
      <div className="commentWrap">
        <img src={avatar} alt="avatar" className="avatar" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={dataForm}
            placeholder="Что у вас нового..."
            onChange={(ev) => handleChange(ev.target.value)}
          ></input>
        </form>
        <span className="material-icons close" onClick={onClose}>
          close
        </span>
      </div>

      <hr />

      <button className="button" onClick={handleSubmit}>
        Опубликовать
      </button>
    </div>
  );
};

export default AddEditForm;
