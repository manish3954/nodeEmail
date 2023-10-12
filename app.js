const express = require("express");
const bodyParser = require('body-parser');

const app = express();
let PORT = 5000;

const sendMail = require("./controllers/sendMail");
app.use(bodyParser.urlencoded({ extended: true }));
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
