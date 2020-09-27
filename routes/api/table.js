const express = require("express");
const router = express.Router();

var axios = require("axios");
var cheerio = require("cheerio");

router.get("/table", (req, res) => {
    try {
        axios.get("https://www.skysports.com/premier-league-table").then(response =>{
          var $ = cheerio.load(response.data);
          var tArray =[]
          $(".standing-table__row").each((i, element) => {
              var result = new Object();
              result.team = $(element).find(".standing-table__cell--name-link").text()
              
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