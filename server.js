const express = require("express");
const Pizza = require('./models/pizzaModel')
const app = express();
const db = require("./db"); 

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
app.use('/api/pizzas/' ,pizzasRoute)
app.use('/api/users/' , userRoute)
app.get("/" ,(req, res) =>{
    res.send("Server Working 🔥");
});

const port = process.env.PORT || 8000;
app.listen(port, () => `Server running on port port 🔥`)