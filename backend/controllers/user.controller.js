import { User } from "../models/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, password, role } = req.body;
        
        if(!fullName || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                success: false,
                message: "Above fields are required"
            });
        };

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                success: false,
                message: "User is already exist with this email"
            });
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullName,
            email, 
            phoneNumber, 
            password: hashedPassword, 
            role,

        });

        return res.status(201).json({
            success: true,
            message: "Account created successfully!"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if(!email || !password || !role){
            return res.status(400).json({
                success: false,
                message: "Login credential missing"
            })
        }

        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password"
            });
        };

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if(!isPasswordMatch){
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password"
            });
        };

        if(role !== user.role){
            return res.status(400).json({
                success: false,
                message: "Account doesn't exist with current role"
            })
        };

        const tokenData = {
            userId: user._id,
            role: user.role
        }

        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn: '1d'});

        user = {
            _id : user._id,
            fullName : user.fullName,
            phoneNumber : user.phoneNumber,
            email : user.email,
            role : user.role,
            profile : user.profile
        }
        return res.status(200).cookie("token", token, {
            maxAge : 1*24*60*60*1000, 
            httpOnly: true, 
            sameSite: 'strict'
        }).json({
            success: true,
            message: `Welcome back ${user.fullName}`,
            user            
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export const logout = async(req, res) => {
    try {
        return res.status(200).cookie("token", "", {
            maxAge: 0, 
            httpOnly: true, 
            sameSite: "strict"
        }).json({
            success: true,
            message: "Logged out successfully"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export const updateProfile = async(req, res) => {
    try {
        const { fullName, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;

        const userId = req.id; // middleware authentication
        let user = await User.findById(userId)

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        if(fullName) user.fullName = fullName
        if(email) user.email = email
        if(phoneNumber) user.phoneNumber = phoneNumber

        if(!user.profile) user.profile = {}
        if(bio) user.profile.bio = bio
        if(skills){
            user.profile.skills = skills.split(",").map(skill => skill.trim())
        }

        // cloudinary here 
        if(file){

        }


        //resume here later


        await user.save()

        const safeUser = {
            _id : user._id,
            fullName : user.fullName,
            phoneNumber : user.phoneNumber,
            email : user.email,
            role : user.role,
            profile : user.profile
        }

        return res.status(200).json({
            success: true,
            message: "Profile updated succesfully",
            user: safeUser
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}