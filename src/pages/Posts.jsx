import { useEffect, useRef } from 'react'
import { useState } from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/UI/modal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import MySelect from '../components/UI/select/MySelect'
import { usePosts } from '../hooks/usePosts'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'
import { getPagesCount } from '../components/utils/pages'
import Pagination from '../components/UI/pagination/Pagination'
import { useObserver } from '../hooks/useObserver'

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastElement = useRef()

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page)
      setPosts([...posts, ...response.data])
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPagesCount(totalCount, limit))
    }
  )

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])

  //Создание поста
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  //удаление поста
  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className='App'>
      <button onClick={fetchPosts}> Кнопка </button>
      <MyButton
        style={{
          marginTop: '30px',
        }}
        onClick={() => setModal(true)}
      >
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr
        style={{
          margin: '15px 0px',
        }}
      />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue='кол-во эл-от на странице'
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Показать все' },
        ]}
      />
      {postError && <h1> Произошла ошибка ${postError} </h1>}
      {isPostsLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      )}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title='Посты про JS'
      />
      <div ref={lastElement} style={{ height: 20 }} />

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  )
}

export default Posts
