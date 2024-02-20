import prisma from '../database/db_connection.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const userRegister = async (req, res) => {
    const payload = req.body;
    try {
        
        // Check email existence
        const findUser = await prisma.user.findUnique({
            where: {
                email: payload.email
            } 
        })
        
        if (findUser) {
            return res.status(400).json({ msg: "User with this email Already exist" })
        }
        
        const salt = bcrypt.genSaltSync(10);
        payload.password = bcrypt.hashSync(payload.password, salt);
        
        const user = await prisma.user.create({
            data:payload
        })
        res.json({ user })
    } catch (error) {
        return res.status(400).json({ error:error.message }) 
    }
}

export const loginUser=async(req,res)=>{
    const payload = req.body;
    console.log(payload)
    try {
        const findUser = await prisma.user.findUnique({
            where:{
                email:payload.email
            }
        })
        if(!findUser){
            return res.status(400).json({msg:"User with this email not Found"})
        }
        if(!bcrypt.compareSync(payload.password, findUser.password)){
            return res.status(400).json({msg:"Invalid Credentials"})
        }

        const tokenData={
            id:findUser.id,
            name:findUser.name,
            email:findUser.email,
            profile:findUser.profile
        }

        const token = jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn:'10d'})

        return res.status(200).json({user:payload,token:`Bearer ${token}`})
        
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

export const fetchUsers=async(req,res)=>{
    try {
        const users = await prisma.user.findMany({
            include:{
                posts:true
            }
        })
        return res.status(200).json({users})        
    } catch (error) {
        return res.status(400).json({ error:error.message })         
    }
}