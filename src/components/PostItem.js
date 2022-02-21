const PostItem = ({ number, post }) => {
  const { id, title, body } = post;

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {title}
        </strong>

        <div>{body}</div>
      </div>
      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
};
export default PostItem;
