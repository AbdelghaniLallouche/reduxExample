const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {UsersRoute} = require('./Routes/UserRoutes');
const port = 5000;
const products = require('./products');


app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/products', (req, res) => {
    res.send(products);
}
);

app.use('/' , UsersRoute)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const uri = "mongodb+srv://ghani:ghani123@cluster0.yeewcim.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to mongodb")
}).catch((err) => {
    console.log(err)
})
