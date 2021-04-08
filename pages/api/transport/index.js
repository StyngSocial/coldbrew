import nodemailer from "nodemailer";

export default function handler(req, res) {
  const { message, user } = req.body;
  let feedback = `User: ${user}\n\nMessage: ${message}`;
  var mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_BEN,
    subject: "New feedback message from Cold Brew",
    text: feedback,
  };
  const transport = {
    host: "mail.privateemail.com",
    port: "465",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  };
  const transporter = nodemailer.createTransport(transport);
  const verify = () => {
    transporter.verify((error, success) => {
      if (error)
        return console.log(`Error connecting to mail service: ${error}`);
    });
    return;
  };

  verify();

  return new Promise((resolve, reject) => {
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.status(400).json(err);
        reject();
      }
      res.status(200).json({ data: data, mail: mail });
      resolve();
    });
  });
}
