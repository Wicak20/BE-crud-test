import express from "express";
import { getUser, getUserByid, creatUser, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router()

router.get('/users', getUser)
router.get('/users/:id', getUserByid)
router.post('/users', creatUser)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router