const express = require('express')
const app = express();
const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')
const path = require('path');
const connectDB = require('./db/connectDB');





app.set("views",path.join(__dirname, 'views'));
app.set('view engine','hbs' )
app.use(express.static('public'));


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/user', userRoutes)
app.use('/admin',adminRoutes)



connectDB();

app.listen(8080,()=>{

    console.log('Running at 8080');
    
})