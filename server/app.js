const express = require('express');
const app = express();

const mongoose = require('mongoose');
const {MONGO_URI} = require('./keys');

const PORT = 5000;



mongoose.connect(MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB")
})
mongoose.connection.on('error',(err)=>{
    console.log("Error while connecting MongoDB",err)
})


require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))



app.listen(PORT,()=>{
    console.log("Server is Running on",PORT);
})
