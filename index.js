const express=require('express')
const path=require('path')

const app=express();

app.use(express.static("public"))
app.get('/',(req,res)=>{
   res.sendFile(path.resolve('public/index.html'))
});

app.listen(process.env.APP_PORT)