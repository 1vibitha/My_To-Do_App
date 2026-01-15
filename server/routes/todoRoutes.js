import express from 'express'
import { createTodos, deleteTodos, getTodos, updateTodos } from "../controllers/todoController.js"

const router = express.Router()

router.post('/add',createTodos)
router.get('/get',getTodos)
router.put('/update/:id',updateTodos)
router.delete('/delete/:id',deleteTodos)

export default router