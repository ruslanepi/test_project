import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Posts from '../pages/Posts'

import { publicRoutes, privateRoutes } from '../router/routes'

const AppRouter = () => {
  const isAuth = false
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  )
}

export default AppRouter
