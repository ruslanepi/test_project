import './styles/App.css';
import { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Заголовок 1', body: 'lorem lorem lorem1' },
    { id: 2, title: 'Заголовок 2', body: 'lorem lorem lorem2' },
    { id: 3, title: 'Заголовок 3', body: 'lorem lorem lorem3' },
  ]);

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', body: '' });
  };

  return (
    <div className="App">
      <form>
        {/*  Управляемый компонент */}
        <MyInput
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        {/*  Неуправляемый компонент */}
        <MyInput
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS1" />
    </div>
  );
}

export default App;
