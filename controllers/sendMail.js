const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
if(!req.body.n || req.body.e ||  req.body.p ){
res.send("Invalid details");
  return;
}
const name = req.body.n;
const email = req.body.e;
const phone = req.body.p;
  

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
  host: "send.one.com",
   port: 465, // or 587 if you use STARTTLS instead of SSL/TLS
  secure: true, 
    auth: {
     user: 'vicontactform@virtualinspect.se',
        pass: 'Vicf123456789'
    },
  });

  let info = await transporter.sendMail({
    from: 'NEW CONTACT 👻"<vicontactform@virtualinspect.se> ', // sender address
    to: "mggcse3954@gmail.com", // list of receivers
    subject: "VirtualInspect Has new contact have a look ", // Subject line
    text: `Name: manish`, // plain text body
    html: `<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>(555) 123-4567</td>
            </tr>
          
        </tbody>
      </table>`, 
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info.messageId);
  
};

module.exports = sendMail;
