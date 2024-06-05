import prisma from "../DB/db.config.js";
import { PrismaClient } from "@prisma/client/extension";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
    const {name, email, password} = req.body

    const findUser = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if (findUser) {
        return res.json({status:400, message:"Email Already . please another email."})
    }

    const newUser = await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    })

    return res.json({status:200 , data:newUser , msg:"User Created"})
}

//=================//

export const Register = async (req,res) => {

    const {email, password, name} = req.body;

    let user = await prisma.user.findUnique({where: {email}})
    if (user) {
      return res.status(400).json({ msg: 'Email sudah terdaftar' });
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

     
    user = await prisma.user.create({
      data: {
        name:name,
        email:email, 
        password: hashPassword,
      }
    })
    return res.json({msg: 'Registrasi Berhasil' })    
    console.log(user)
}



export const Login = async (req, res) => {
    const user = await prisma.user.findUnique({
      where:{
          email: req.body.email
      }
    });

    if (!user) {
      return res.status(404).json({msg: "Email tidak ditemukan"});
    }

    const check = await bcrypt.compare(req.body.password, user.password);
    if (!check) {
        return res.status(400).json({msg: "Password salah"});
    }

    const userId = user.id;
    const name = user.name;
    const email = user.email;

    const token =  jwt.sign({sub: userId, name, email }, process.env.ACCECS_TOKEN_SECRET, {
      expiresIn: '720h',
    });
    const refreshToken = jwt.sign({sub: userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d',
    });

    await prisma.user.update({ 
        where: {
            id: userId
        },
        data: {
          refresh_token: refreshToken
        }
    });

    return res.json({token})
}

export const Logout = async (req, res) => {
  try {
    const refreshToken = req.headers['authorization']?.split(' ')[1] || req.body.refresh_token;

    if (!refreshToken) {
      return res.status(204); // No refresh token provided, return success (204 No Content)
    }

    const userId = req.user.id;

    await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        refresh_token: null
      }
    });

    return res.status(200).json({msg: "Berhasil Logout"}); // Logout successful, return success (204 No Content)
  } catch (error) {
    console.error('Error during logout:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getUsers = async(req,res)=>{
  try {
      const Users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          password: true,
          email: true
        }
      });
      res.json(Users);
  } catch (error) {
      console.log(error)
  }
}