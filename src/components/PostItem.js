import MyButton from './UI/button/MyButton';

const PostItem = ({ number, post, remove }) => {
  const { id, title, body } = post;

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {title}
        </strong>

        <div>{body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(id)}>Удалить</MyButton>
      </div>
    </div>
  );
};
export default PostItem;
