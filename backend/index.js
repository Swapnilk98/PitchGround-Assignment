const express = require("express");
const cors=require("cors")
require("dotenv").config();
const {connection} = require("./config/db");
const app = express();
const { todoRouter } = require("./routes/todo.route");

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
  res.send("Welcome Todo app ")
})

app.use("/todo-item",todoRouter)

const PORT=process.env.PORT||8080
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connect to database successfully");
  } 
  catch (err) {
    console.log("Failed to connect database");
    console.log(err);
  }
  console.log(`Server running on ${PORT}`);
});
