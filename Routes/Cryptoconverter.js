const express = require("express");
const router = express.Router();
const Cryptoconverter=require("../Controllers/Cryptoconverter")

//api for get list of cryptocurrencies
router.get("/cryptocurrencies",Cryptoconverter.Cryptocurrencies)
// api for converting sourceCrypto into USD,BTC
router.post("/convert",Cryptoconverter.Convert_currencies)


module.exports=router