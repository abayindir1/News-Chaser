const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

const news = require("./routes/api/news")
const fixtures = require("./routes/api/fixtures")

app.use('/api/news', news)
app.use('/api/fixtures', fixtures)

app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Serve static assets in production
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))

    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(PORT, ()=>{
    console.log("Server listening on " + PORT);
})