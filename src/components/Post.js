import avatar from "../avatar.png";

const Post = ({ post, footer }) => {
  const current = new Date(1664876031502);
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="postWrap">
      <div className="infoUser">
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="nameWrap">
          <div className="name">Lilija Kamarova</div>
          <div className="label">
            основатель группы <span className="time">{date}</span>
          </div>
        </div>
        <span className="material-icons ">keyboard_arrow_down</span>
      </div>

      <div className="textPost">{post?.content}</div>

      <hr />

      <div className="likeWrap">
        <div>
          <span className="material-icons">favorite_border</span> Нравится
        </div>
        <div>
          <span className="material-icons">chat_bubble_outline</span>{" "}
          Комментировать
        </div>
      </div>

      <hr className="lineComment" />

      {footer}
    </div>
  );
};

export default Post;
