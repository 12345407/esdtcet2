const express = require("express");
const port = 8080;
const user_model = require("./users_module");
const User = user_model.User;
const app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hydrophonic Return on Investment (ROI) Calculator...");
});
app.get("/user", async (req, res) => {
    let data = await User.find().sort({ _id: -1 });
    res.send(data);
});
app.get("/user/:id", async (req, res) => {
    console.log(req.params.id);
    let data = await User.find({ "_id": req.params.id });
    res.send(data[0]);
});
app.post("/user", async (req, res) => {
    console.log(req.body)
    let u = await User(req.body);
    let result = u.save();
    res.send(req.body);
});
app.put("/user", async (req, res) => {
    console.log(req.body);
    //User.updateOne({where}, {set});
    let u_data = await User.updateOne({ "_id": req.body._id }, {
        "$set": {
            "area": req.body.area,
            "plants": req.body.plants,
            "type": req.body.type,
            "electricity": req.body.electricity,
            "labour": req.body.labour,
            "transport": req.body.transport,
            "dealer": req.body.dealer,
            "cycle": req.body.cycle,
            "price": req.body.price,
            "nutrition": req.body.nutrition
        }
    });
    res.send(u_data);
});
app.delete("/user", async (req, res) => {
    let d_data = await User.deleteOne({ "_id": req.body._id });
    res.send(d_data);
});
app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`);
});
// https://gmr1289.herokuapp.com/ | https://git.heroku.com/gmr1289.git
