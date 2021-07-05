const router = require("express").Router()
const path = require('path');


router.get("/",async (req,res)=>{
    res.sendFile(__dirname + "../documentaion/index.html");
});


module.exports = router;