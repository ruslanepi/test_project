import './styles/App.css';
import { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Заголовок 1', body: 'lorem lorem lorem1' },
    { id: 2, title: 'Заголовок 2', body: 'lorem lorem lorem2' },
    { id: 3, title: 'Заголовок 3', body: 'lorem lorem lorem3' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id != id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Посты про JS1" />
    </div>
  );
}

export default App;
