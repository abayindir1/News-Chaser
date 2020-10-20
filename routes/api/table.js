const express = require("express");
const router = express.Router();

var axios = require("axios");
var cheerio = require("cheerio");

router.get("/", (req, res) => {
    try {
        axios.get("https://www.goal.com/en-us/premier-league/table/2kwbbcootiqqgmrzs6o5inle5").then(response =>{
          var $ = cheerio.load(response.data);
          var tArray =[]
          $(".p0c-competition-tables__row").each((i, element) => {
              var result = new Object();
              result.team = $(element).find(".p0c-competition-tables__link").text().trim()
              result.points = $(element).find(".p0c-competition-tables__pts").text().trim()
              result.played = $(element).find(".p0c-competition-tables__matches-played").text().trim()
              result.difference = $(element).find(".p0c-competition-tables__goals-diff").text().trim()
              tArray.push(result)
            });
            res.json(tArray);
      
        })
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  });

module.exports = router;