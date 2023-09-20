require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
// In your code, before using MONGO_URI
console.log('MONGO_URI:', process.env.MONGO_URI);

const mongoDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        // to fetch data from mongoDB Atlas existing collection food_items
        let fetched_data = await mongoose.connection.db.collection("sample")
        let caste_data = await mongoose.connection.db.collection("dataCaste")
        let gender_data = await mongoose.connection.db.collection("dataGender")
        // using .find() and giving empty object we fetch all entries 
        //and then convert them to an array using toArray()
        let districtData = await fetched_data.find({}).toArray();
        let casteData = await caste_data.find({}).toArray();
        let genderData = await gender_data.find({}).toArray();
        global.data_district = districtData;
        global.data_caste = casteData;
        global.data_gender = genderData;
        // food_items is a variable now that can be accessed from any file
        //it is the array of all the food items in the database


    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
}

module.exports = mongoDB;