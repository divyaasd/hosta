const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const empModel=require('./models/empModel')

const app=express()

app.use(express.json())

app.use(cors(
    {
        origin: 'hosta-dc2r.vercel.app', // Replace with your React app's Vercel URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],         
        credentials: true                                  
      }
))

mongoose.connect('mongodb+srv://divyaas340:dksO3oPDWw7UwXFP@cluster0.cauvy.mongodb.net/')

app.post('/register',(req,res)=>{
    empModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>console.log(err))

})

app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    empModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json('success')
            }
            else{
                res.json('password is incorrect')
            }
        }
        else{
            res.json('no records')
        }
    })
})

app.listen(3001,()=>{
    console.log('server is running');
    
})
