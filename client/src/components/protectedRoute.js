import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const protectedRoute = () => {
    const auth = localStorage.getItem('token');
  return (
    auth && auth !== null ? <> <Outlet/> </> : <Navigate replace to={'/login'} />
  )
}

export default protectedRoute