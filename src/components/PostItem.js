import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'
const PostItem = ({ number, post, remove }) => {
  const { id, title, body } = post

  const navigate = useNavigate()
  console.log(navigate)
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {post.id}. {title}
        </strong>

        <div>{body}</div>
      </div>
      <div className='post__btns'>
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => remove(id)}>Удалить</MyButton>
      </div>
    </div>
  )
}
export default PostItem
