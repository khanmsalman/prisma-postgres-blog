import prisma from "../database/db_connection.js";

export const createPost=async(req,res)=>{
    const payload = req.body;
    console.log(payload)
    try {
        
        const post = await prisma.post.create({
            data:{
                user_id:Number(payload.user_id),
                title:payload.title,
                description:payload.description
            }
        })
        return res.status(201).json({msg:"success", post})
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

export const fetchPosts=async(req,res)=>{
    try {
        const posts = await prisma.post.findMany({
            include:{
                user:true
            }
        })

        return res.status(200).json({posts})
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}