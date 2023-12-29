import User from "../models/userModel.js";

export const getUser = async(req, res) => {
    try {
        const response = await User.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserByid = async(req, res) => {
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const creatUser = async(req, res) => {
    try {
        await User.create(req.body)
        res.status(201).json({msg: "user created"})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = async(req, res) => {
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "user updated"})
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) => {
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "user deleted"})
    } catch (error) {
        console.log(error.message);
    }
}