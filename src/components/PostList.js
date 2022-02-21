import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          key={post.id}
          number={index + 1}
          post={post}
          remove={remove}
        />
      ))}
    </div>
  );
};
export default PostList;
