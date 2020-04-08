const express = require("express");

const app=express();

const mongoose = require("mongoose");
const config = require("./utils/config");
const middleware = require("./utils/middleware");

// IMPORT ALL CONTROLLERS HERE
const userController = require("./controllers/user.controller");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/users",userController);

app.get("/",(req,res) => {
	res.status(200).json({
		"hello": "world"
	});
});

app.use(middleware.MongooseErrorHandler);
app.use(middleware.unknownEndpoint);

app.listen(config.PORT,(err) => {
	if(err) console.error(err)
	else {
		console.log(`Server started at ${config.PORT}`);
		mongoose.connect(config.DB_URI,{ 
			useNewUrlParser: true, 
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true 
		},(error) => {
			if(error) console.error(error);
			else console.log(`Connected to mongodb uri: ${config.DB_URI}`);
		});
	}
});