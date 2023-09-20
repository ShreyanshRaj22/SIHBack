const express = require('express')
const router = express.Router()

router.post('/displayGenderData',(req,res)=>{
    try {
        res.send(global.data_gender);
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports = router;