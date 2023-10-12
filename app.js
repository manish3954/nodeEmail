const express = require("express");
const bodyParser = require('body-parser');

const app = express();
let PORT = 5000;

const enforceHttps = (req, res, next) => {
 
  if (req.connection.encrypted) {
    // If the request is already over HTTPS, proceed to the next middleware
    next();
  } else {
    // If the request is over HTTP, redirect to the HTTPS version
    res.send("Bad Request");
  }
};

const sendMail = require("./controllers/sendMail");
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(enforceHttps);


app.get("/", (req, res) => {
  res.send("I am a server");
});

app.post("/mail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am live in port no.  ${PORT}`);
    });
  } catch (error) {}
};

start();
