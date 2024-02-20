import { Router } from "express";
import { createPost, fetchPosts } from "../controller/postController.js";

const router = Router();

router.post('/', createPost)
router.get('/get', fetchPosts)

export default router;