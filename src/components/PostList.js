import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PostItem from './PostItem'

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
  }

  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={200} classNames='post'>
            <PostItem
              key={post.id}
              number={index + 1}
              post={post}
              remove={remove}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}
export default PostList
