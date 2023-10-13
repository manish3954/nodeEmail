const express = require("express");
const bodyParser = require('body-parser');

const app = express();
let PORT = 5000;



const sendMail = require("./controllers/sendMail");
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get("/", (req, res) => {
  res.send("I am a server");
});
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });
app.post("/mail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am live in port no.  ${PORT}`);
    });
  } catch (error) {}
};

start();
