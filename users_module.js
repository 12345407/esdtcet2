//Step 1: Database connection
const mongoose = require("mongoose");
//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet";
const conn_str = "mongodb+srv://root:root@cluster0.sw3wk.mongodb.net/esdtcet?retryWrites=true&w=majority";
mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected successfully..."))
.catch( (error) => console.log(error) );
//Step 2: Create Schema (Java Class)
const userSchema = new mongoose.Schema({
area: Number,
plants: Number,
type: String,
electricity: Number,
labour: Number,
transport: Number,
dealer: Number,
cycle: Number,
price: Number,
nutrition: String
})
//Step 3: Create collection Object (model)
// MAPPING
const userObject = new mongoose.model("users", userSchema);
exports.User = userObject;