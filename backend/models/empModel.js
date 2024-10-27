const mongoose=require('mongoose')

const EmployeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const employeeModel=mongoose.model('signup',EmployeeSchema)

module.exports=employeeModel
