import avatar from "../avatar.png";

const Comment = () => {
  return (
    <div className="commentWrap">
      <img src={avatar} alt="avatar" className="avatarComment" />
      <input type="text" placeholder="Напишите комментарий..."></input>
    </div>
  );
};

export default Comment;
