const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  console.log(process.env.USER)
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
  host: "send.one.com",
    port: 587,
    auth: {
     user: 'vicontactform@virtualinspect.se',
        pass: 'Vicf123456789'
    },
  });

  let info = await transporter.sendMail({
    from: 'NEW CONTACT 👻" ', // sender address
    to: "mggcse3954@gmail.com", // list of receivers
    subject: "VirtualInspect Has new contact have a look ", // Subject line
    text: "Name: manish", // plain text body
    html: "<b>Hello YT Thapa</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
