const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  console.log(process.env.USER)
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
     user: 'xander.beahan@ethereal.email',
        pass: 'MvCNdTCBVE1usw2Qvz'
    },
  });

  let info = await transporter.sendMail({
    from: '"Vinod Thapa 👻" <thapa@gmail.com>', // sender address
    to: "mggcse3954@gmail.com", // list of receivers
    subject: "Hello Thapa", // Subject line
    text: "Hello YT Thapa", // plain text body
    html: "<b>Hello YT Thapa</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
