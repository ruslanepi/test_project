import './styles/App.css'
import { useState } from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'По названию', body: 'ффффффф' },
    { id: 2, title: 'аголовок 2', body: 'ббббббб' },
    { id: 3, title: 'Заголовок 3', body: 'ааааааа' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  //Создание поста
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  //удаление поста
  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id))
  }

  return (
    <div className='App'>
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0px' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title='Посты про JS'
      />
    </div>
  )
}

export default App
