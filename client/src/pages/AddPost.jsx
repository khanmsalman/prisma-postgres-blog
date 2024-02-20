import React, { useState } from 'react'
import { savePost } from '../services/api';

const AddPost = () => {
    const [input, setInput] = useState({
        title:'',description:'',user_id:'1'
    })

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const res = await savePost(input);
        if(res){
            setInput({title:'',description:''});
        }
    }
  return (
    <div className='mt-5 '>
        <form onSubmit={handleSubmit} className='w-1/3 min-h-[80vh] mx-auto border shadow-2xl rounded-lg p-3 flex justify-start gap-2 flex-col items-start'>
            <label className='text-lg' >Title</label>
            <input type="text" value={input.title} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} placeholder='add title' name="title" className='bg-slate-200 focus:border-b-2 outline-none border-fuchsia-700 w-full p-2 rounded-md ' />
            <label className='text-lg mt-4'>Description</label>
            <textarea name="description" value={input.description} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} placeholder='add description' cols="30" rows="10" className='bg-slate-200 outline-none focus:border-b-2 border-fuchsia-700 w-full p-2 rounded-md'/>
            <input type="submit" value="Add Post" className='cursor-pointer bg-fuchsia-800 text-white mt-3 p-2 rounded px-4' />
        </form>
    </div>
  )
}

export default AddPost