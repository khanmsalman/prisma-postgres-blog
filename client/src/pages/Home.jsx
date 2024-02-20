import React, { useEffect, useState } from 'react'
import { getPosts } from '../services/api'

const Home = () => {
    const [posts, setPosts] = useState()

    useEffect(()=>{
        fetchPosts();
    },[])

    const fetchPosts =async ()=>{
        const allPosts = await getPosts();
        if(allPosts){
            setPosts(allPosts.posts)
        }
    }

    console.log(posts)
  return (
    <div className='p-10 mt-5'>
        <div className="flex justify-start flex-wrap gap-10">
            {posts && posts.map((post)=>(
                <div className=" border shadow p-3 flex w-[25%] h-48 rounded-md flex-col justify-between" key={post.id}>
                    <span className='text-3xl font-semibold'>{post.title}</span>
                    <div className="text-md mt-5 text-gray-600">{post.description}</div>
                    <div className="bg-fuchsia-700 w-fit px-4 py-2 text-white shadow-xl rounded-md ">Created by {post.user.name}</div>
                </div>
            ))
            }
        </div>        
    </div>
  )
}

export default Home