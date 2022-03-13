import './styles/App.css'
import { useState, useMemo } from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

import PostFilter from './components/PostFilter'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'По названию', body: 'ффффффф' },
    { id: 2, title: 'аголовок 2', body: 'ббббббб' },
    { id: 3, title: 'Заголовок 3', body: 'ааааааа' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  //сортировка (usememo отрабатывает только в тех случаях, если изменились зависимости)
  const sortedPosts = useMemo(() => {
    console.log('Функция отработала')
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    }
    return posts
  }, [filter.sort, posts])

  //поиск (мы прокидываем наши данные через все  сортировки и фильтрации и только потом рендерим)
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    )
  }, [filter.query, sortedPosts])

  //Создание поста
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //удаление поста
  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id != id))
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0px' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title='Посты про JS1'
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      )}
    </div>
  )
}

export default App
