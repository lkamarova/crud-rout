const ChangeDeleteFooter = ({ handleDelete, id, handleEdit }) => {
  return (
    <div className="footerWrap">
      <button className="button" onClick={() => handleEdit()}>
        Изменить
      </button>
      <button className="button delete" onClick={() => handleDelete()}>
        Удалить
      </button>
    </div>
  );
};

export default ChangeDeleteFooter;
