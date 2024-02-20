import React, { useState } from 'react'
import { userLogin } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [input, setInput] = useState({
       email:'',password:''
    })
    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const res =await userLogin(input);
        if(res){
            localStorage.setItem('user', JSON.stringify(res.user));
            localStorage.setItem('token',res.token)
        }
        navigate('/')
        setInput({email:'',password:''})
    }
  return (
    <div className='mt-5 '>
      <form onSubmit={handleSubmit} className='w-1/3 min-h-[80vh] mx-auto border shadow-2xl rounded-lg p-3 flex justify-start gap-2 flex-col items-start'>
      <h2 className='text-center w-full text-3xl font-semibold'>Login</h2>

        <label className='text-lg mt-4'>Email</label>
        <input type="email" value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} placeholder='enter email' name="email" className='bg-slate-200 focus:border-b-2 outline-none border-fuchsia-700 w-full p-2 rounded-md ' />

        <label className="text-lg mt-4">Password</label>
        <input type="password" value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} placeholder='enter password' name="password" className='bg-slate-200 focus:border-b-2 outline-none border-fuchsia-700 w-full p-2 rounded-md ' />

        <input type="submit" value="Login" className='cursor-pointer bg-fuchsia-800 text-white mt-3 p-2 rounded px-4' />
    </form>
</div>
  )
}

export default Login