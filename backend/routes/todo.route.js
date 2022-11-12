const express=require("express")

const { todoModel } = require("../models/todomodel");
const todoRouter=express.Router();

todoRouter.post("/create", async (req, res) => {
  const {name}=req.body
  const new_Todo=new todoModel({name,status:false})
  await new_Todo.save()
  res.send({"message":"Todo Created"}) 
});

todoRouter.post("/list",async (req, res) => {
  const todolist=await todoModel.find()
  res.json(todolist) 
});

todoRouter.post("/mark-as-done",async (req, res) => {
  const {id}=req.body
  await todoModel.updateOne({_id:id},{status:true})
  res.send({"message":"Mark as done"}) 
});

todoRouter.post("/mark-as-not-done",async (req, res) => {
  const {id}=req.body
  await todoModel.updateOne({_id:id},{status:false})
  res.send({"message":"Mark as not done"}) 
});

todoRouter.post("/delete",async (req, res) => {
  const {id}=req.body
  await todoModel.deleteOne({_id:id})
  res.send({"message":"Delete todo"}) 
});
  
module.exports={todoRouter}