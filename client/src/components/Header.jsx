import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.clear();
        navigate('/login')
    }
    return (
        <div className='flex items-center justify-between px-12 py-6'>
            <h1 className="text-lg font-bold">Logo</h1>
            <ul className='flex items-center justify-between gap-6 text-fuchsia-800'>
                <li className="text-lg   cursor-pointer font-bold ">
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li className="text-lg  cursor-pointer font-bold ">
                    <NavLink to={'/addpost'}>Add Post</NavLink>
                </li>
            </ul>
            <div className=" flex items-center gap-3">
                {
                    !token ? (<>
                        <Link to={'/login'} className='p-2 px-4 cursor-pointer rounded-md text-white bg-purple-700'>Login</Link>
                        <Link to={'/signup'} className='p-2 px-4 cursor-pointer rounded-md text-white bg-purple-700'>Signup</Link>
                    </>
                    ) : (
                        <a onClick={handleLogout} className='p-2 px-4 cursor-pointer rounded-md text-white bg-purple-700'>Logout</a>
                    )
                }
            </div>
        </div>
    )
}

export default Header