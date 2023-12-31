const express = require("express");
const app = express();
const cors = require("cors");
// const path = require('path');
//const dotenv = require("dotenv").config();
// const URL = process.env.DB2;
// const users_mail=require("./Routes/UsersMail")
// const login=require("./Routes/auth.js")
const crypto = require("./Routes/Cryptoconverter")
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

//app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use("/api",login)

app.use("/api",crypto)


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
});

app.listen(process.env.PORT || 5001,()=>{
console.log("api Running in 5001")
});

   

  