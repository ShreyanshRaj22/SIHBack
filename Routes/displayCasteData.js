const express = require('express')
const router = express.Router()

router.post('/displayCasteData',(req,res)=>{
    try {
        res.send(global.data_caste);
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports = router;