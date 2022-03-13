import { useMemo } from 'react'

//сортировка (usememo отрабатывает только в тех случаях, если изменились зависимости)
export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    console.log('Функция отработала')
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])

  return sortedPosts
}

//поиск (мы прокидываем наши данные через все  сортировки и фильтрации и только потом рендерим)
export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort)
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    )
  }, [query, sortedPosts])

  return sortedAndSearchedPosts
}
