import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: '', body: '' });
  };
  return (
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
  );
};

export default PostForm;
