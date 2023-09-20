const express = require("express");
const mongoDB = require("./db")
mongoDB();
const app = express();
const cors = require("cors");
const port = 5000 || process.env.PORT

app.use(cors())
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");// react app address
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();
})

app.get("/",(req,res)=>{
    res.send('The server is now live.')
});
app.use(express.json());
app.use('/api', require("./Routes/displayData"));
app.use('/api', require("./Routes/displayCasteData"));
app.use('/api', require("./Routes/displayGenderData"));
app.use('/api', require("./Routes/displayDistrictData"));

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});