import TodoModel from "../models/Task.js";

export const createTodos = async(req, res) => {

    const task = req.body.task;
    const creatTodo = await TodoModel.create({
        task: task
    })
    res.json(creatTodo)

} 

export const getTodos = async(req, res) => {

    const all_todos = await TodoModel.find()
    res.json(all_todos)

}

export const updateTodos = async(req , res) => {

    const {id} = req.params;
    const update_todo = await TodoModel.findById(id)
    const updated = await TodoModel.findByIdAndUpdate({_id:id},{done : !update_todo.done})
    res.json(updated)

}

export const deleteTodos = async(req, res) => {

    const {id} = req.params
    const deleted = await TodoModel.findByIdAndDelete(id)
    res.json(deleted)
}