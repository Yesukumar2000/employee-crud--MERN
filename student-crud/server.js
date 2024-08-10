const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
const connectToMongoDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/employeeDatabase");
    await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://DBUser:DBUser@taskcluster.botpc04.mongodb.net/?retryWrites=true&w=majority&appName=taskCluster");
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

connectToMongoDB();

// Employee Schema and Model
const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  mobileNo: Number,
  gender: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

// Routes
app.post("/api/employees", async (req, res) => {
  try {
    const { firstName, lastName, age, mobileNo, gender } = req.body;
    const newEmployee = new Employee({ firstName, lastName, age, mobileNo, gender });
    await newEmployee.save();
    res.json(newEmployee);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.get("/api/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.get("/api/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.put("/api/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, age, mobileNo, gender } = req.body;
    await Employee.findByIdAndUpdate(id, { firstName, lastName, age, mobileNo, gender });
    res.json({ status: "success", msg: "Employee updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.delete("/api/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.json({ status: "success", msg: "Employee deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// Start the server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// // step 1 import  libraries
// const mongoose = require("mongoose");
// const express = require("express");
// let cors = require("cors");

// // step2 : use express app
// let app = express();

// //step3: cofigure the mddleware
// app.use(express.json());
// app.use(cors());

// //step4: connected To MongoDB
// let connectToMongoDB = async (req, res) => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/studentDataBase");
//     // await mongoose.connect(
//     //   "mongodb+srv://kumaryesu2000:dbpassword@cluster0.ey7ty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//     // );
//     console.log("succesfully connected the mongoDB");
//   } catch (error) {
//     console.log(error);
//   }
// };

// //step5: schema
// let UserSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   age: Number,
//   mobileNo: Number,
//   gender: String,
// });

// //step 6: model
// let User = mongoose.model("user", UserSchema);

// //step7: rest api's
// // POST API
// app.post("/post/student", async(req, res) => {
//   try {
//     let {firstName, lastName, age, mobileNo, gender} = req.body;
//     let newStudent = new User({firstName, lastName, age, mobileNo, gender});
//     await newStudent.save();
//     res.json(newStudent);
//   } catch (error) {
//     console.log(error);
//   }
// });
// //GET API
// app.get("/get/student", async(req,res)=>{
//   try{
//     let students = await User.find();
//     res.json(students);
//   }catch(error){
//     console.log(error);
//   }
// });
// //get single user bu Id api
// app.get("/get/student/:id", async(req,res)=>{
//   try{
//     let {id}= req.params;
//     let student = await User.findById(id);
//     res.json(student);
//   }catch(error){
//     console.log(error);
//   }
// });
// // update api 
// app.put("/update/student/:id", async(req,res)=>{
//   try{
//     let {id} = req.body;
//     let {firstName, lastName, age, mobileNo, gender} = req.body;
//     await User.findByIdAndUpdate(id,{firstName, lastName, age, mobileNo, gender});
//     res.json({status:"success",msg:"student updated succesfully"});
//   }catch(error){
//     console.log(error);
//   }
// });
// //delete api
//  app.delete("/delete/student/:id", async(req,res)=>{
//   try{
//     let {id}= req.params;
//     await User.findByIdAndDelete(id);
//     res.json({status:"success",msg:"student deleted succesfully"});
//   }catch(error){
//     console.log(error);
//   }
// });

// //step8: connectToMongoDB Function call
// connectToMongoDB();

// //step9: listen port
// app.listen(7999, console.log("listen port is 7999"));
