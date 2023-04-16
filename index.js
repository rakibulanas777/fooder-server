const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const orderRoute = require("./routes/order");
const foodRoute = require("./routes/foods");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
dotenv.config();
const port = process.env.PORT || 8000;
app.use(cors());
app.get("/", (req, res) => {
	res.send("Hello world ");
});

//connect with database
const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGODB);
		console.log("Connected");
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on("disconnected", () => {
	console.log("disconnected");
});
mongoose.connection.on("connected", () => {
	console.log("connected");
});

//middlewares
app.use(express.json());

app.use("/order", orderRoute);
app.use("/users", userRoute);
// app.use("/register", authRoute);
app.use("/foods", foodRoute);
// default error handler
app.use((err, req, res, next) => {
	if (err) {
		if (err instanceof multer.MulterError) {
			res.status(500).send("There was an upload error!");
		} else {
			res.status(500).send(err.message);
		}
	} else {
		res.send("success");
	}
});

app.listen(port, () => {
	connect();
	console.log(`LIstening on port ${port}`);
});
