const express = require('express')
const router = express.Router();



router.get('/login', (req,res)=>{
    
    res.send('From admin login')

})


module.exports = router