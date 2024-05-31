const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/Posts");
const router =  express.Router();
const path = require("path");

dotenv.config();

// mongoose.connect (process.env.MONGO_URL, 
//     { userNewUrlParser: true, useUnifiedTopology: true}, () => {
//         console.log("Connected to MongoDB");
//     }
// );

async function connectDB () {
    try{
        await mongoose.connect(process.env.MONGO_URL,
            { userNewUrlParser: true, useUnifiedTopology: true

            });
            console.log("Mongose Connected");
        }catch(err) {
            console.error("error in connection");
        }
    }

    connectDB();

app.use("/image", express.static(path.join(__dirname, "public/image")));

//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploaded successfully");
    }   catch (error) {
        console.error(error);
    }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(5500, () => {
    console.log("Backend server is running!");
});