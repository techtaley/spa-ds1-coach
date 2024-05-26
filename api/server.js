//framework to spin up an api and web servers to build SPAs and MERN
const express = require('express');  
const app = express();

const port = process.env.PORT || 4000;
//We've included routes and instructions togehter. No need for CORS with proxy server

app.use(express.json())

// Set public folder as root
app.use(express.static(__dirname + '/public'));

// Allows front-end access to node_modules folder
app.use('/', express.static(`${__dirname}/node_modules/`))

//"C"REATE new post => .post(`/request`, payload) on FE
app.post('/api/results', async (req, res) => {
    try {
        const response = await fetch(`https://coachme-api.techtaleyportfolio.com/api/result?populate=deep`, config)
    } catch(error){
        res.status(500).json({error})
    }
})

app.get('/')

//"R"EQUEST/GET ALL - .get(`/posts`)   OR   //GET BY ID - .get(`/route/${id}`)
app.get("/api/results", async (req, res) => {  //fetch https://coach-api on route http://localhost:4000/api/results 
    try {        
        const response = await fetch(`https://coachme-api.techtaleyportfolio.com/api/result?populate=deep`)
        const data = await response.json()

        res.status(200).json(data) //make api from within BE and send to FE - Proxy Server
    } catch(error) {
        res.status(500).json({error})
    }
});

//"U"PDATE by id => .put(`/update/${id}`, payload)
app.put('/api/results:id', async (req, res) => {
    const config = {
        method: 'PUT',  //the format already exists in firebase as POST
        //body: JSON.stringify(newBug)   //another option

        body: JSON.stringify(req.body)
    };

    try {
        const response = await fetch(`https://coachme-api.techtaleyportfolio.com/api/result?populate=deep`, config)
    } catch(error){
        res.status(500).json({error})
    }
})

//"D"ELETE by id - .delete(`/delete/${id}`)    //DELETE ALL - .delete(`/route`) 
app.delete('/delete/:id', async (req, res) => {
    const config = {
        method: 'DELETE',  //the format already exists in firebase as POST
        body: JSON.stringify(req.body)
    };

    try {
        const response = await fetch(`https://coachme-api.techtaleyportfolio.com/api/result?populate=deep`, config)
    } catch(error){
        res.status(500).json({error})
    }
})

// Listen for HTTP requests on port 3000
app.listen(port, () => {
    console.log(`Server up and running on http://localhost:${port}/api/results`);
});

//MERN Explanation 
//need to install mongoose *to create database and schema and create routes
// //1.create Schema - *to send to db under a table and schema name
//in Models/Post create a schema - import mongoose, create a postSchema instance, export module as mongoose.model() for Mongo

// //2. creates routes/endpoint - to access posts route to create, update, delete, get
//in Routes/Post - import postSchema as Post, create a newPost instance 
//in Routes/posts create a route - import router, create a router instance, export module as router module

// //3.connect to database
// in server.js at top
// const mongoose = require('mongoose')  //modules to create, connect to,  and communicate with db 
// const postRoute =  require('./routes/posts')

// mongoose.connect(process.env.MONGODB_URI || dbURL, {  //connect to db using mongoose
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false        
//     })
//     .then(console.log("Connect to MongoDB"))
//     .catch((err) => console.log(err))

//app.use("/api/posts", postRoute);   //you need a schema and a route

//4. Export at bottom
//module.exports = router;  

