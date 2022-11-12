const mongoose=require("mongoose");
const todoSchema= mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
})
const todoModel= mongoose.model("todo",todoSchema)
module.exports={
  todoModel
};