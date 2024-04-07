require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

const mongoDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        let fetched_data = await mongoose.connection.db.collection("sample")
        let caste_data = await mongoose.connection.db.collection("dataCaste")
        let gender_data = await mongoose.connection.db.collection("dataGender")
        let districtData = await fetched_data.find({}).toArray();
        let casteData = await caste_data.find({}).toArray();
        let genderData = await gender_data.find({}).toArray();
        global.data_district = districtData;
        global.data_caste = casteData;
        global.data_gender = genderData;
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
}

module.exports = mongoDB;