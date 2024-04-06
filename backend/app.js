const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./index');


const connectionString = "mongodb://mrigank94:GqtjZDKarka3wHps@todo-shard-00-02.iwjw6.mongodb.net:27017,todo-shard-00-00.iwjw6.mongodb.net:27017,todo-shard-00-01.iwjw6.mongodb.net:27017/me?authSource=admin&replicaSet=Todo-shard-0&ssl=true";

// MongoDB connection options
const mongoOptions = {
  useNewUrlParser: true, // Use new URL parser
  useUnifiedTopology: true, // Use new Server Discover and Monitoring engine
};

mongoose
  .connect(connectionString, mongoOptions)
  .then(() => console.log("Connected to db successfully"))
  .catch((ex) => console.log(ex));

const app = express();

const corsOptions = {
  exposedHeaders: ["x-auth-token", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/', routes);

app.listen(8000, '127.0.0.1');
