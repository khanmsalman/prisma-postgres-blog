import { Router } from "express";
import { fetchUsers, loginUser, userRegister } from "../controller/userController.js";

const router = Router();

router.post('/register',userRegister);
router.post('/login', loginUser)
router.get('/get', fetchUsers)


export default router;