const mongoose = require('mongoose');

const mongoURI ="mongodb+srv://kunalagra197:kunalagrawal@atlascluster.ttrq1f8.mongodb.net/Volunteer?retryWrites=true&w=majority"


const connectToMongo = ()=>{
    mongoose.set('strictQuery', false);
    
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
       }).then(() => console.log("Database connected!")).catch(err => console.log(err));
}
 
module.exports = connectToMongo;   