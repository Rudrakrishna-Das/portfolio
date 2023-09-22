const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "guddudas835@gmail.com",
    pass: "buitdktbaicpjdef",
  },
});

export default async (req, res) => {
  const mail = await transport.sendMail({
    to: "rudradas16996@gmail.com",
    from: req.body.email,
    subject: req.body.subject,
    html: `<html>
    <head></head>
    <body>
    <h1>Sender Name :- ${req.body.name}</h1>
    <h3>Sender Mail :- ${req.body.email}</h3>
    <p>about:- ${req.body.description}</p>
    </body>
    </html>`,
  });

  res.status(200).json({ message: "Thank You for Your mail." });
};
