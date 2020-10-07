const express = require("express");
const router = express.Router();

var axios = require("axios");
var cheerio = require("cheerio");

router.get("/", (req, res) => {
  try {
      axios.get("https://www.premierleague.com/home").then(response =>{
        var $ = cheerio.load(response.data);
        var fArray =[]
        $(".matchAbridged").each((i, element) => {
            var result = new Object();
            
            result.team = $(element).find(".teamName").children("abbr").text().trim().replace(/\s/g, '');
            result.team = result.team.substr(0, 3) + " - " + result.team.substr(3)
            
            result.scores = $(element).find(".score").text()
            fArray.push(result)
          });
          res.json(fArray);
    
      })
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
