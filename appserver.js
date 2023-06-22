const express = require('express');
const fetch = require("node-fetch");
var cors = require('cors')



const app = express();
app.use(cors()) // Use this after the variable declaration

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

app.get('/', (req, res) => {
  res.send("Working");
});


app.get('/api/getProduct', async function(req, res)  {

var  final = await fetch('https://dummyjson.com/products/1')
   .then(res => res.json())
   .then(json => {return json})
   
console.log(final);

res.send(final);
});


async function getUsers() {
    let url = 'https://dummyjson.com/products/1';
    try {
        let res = await fetch(url);
        var data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

