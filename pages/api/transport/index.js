import nodemailer from "nodemailer";

export default function handler(req, res) {
  const { name, email, message } = req.body;
  const feedback = `${message}\n${name} (${email})`;
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
      if (error) console.log(`Error connecting to mail service: ${error}`);
    });
  };

  try {
    verify();
    transporter.sendMail(mail, (err, data) => {
      if (err) return res.status(500).json({ data: err });
      return res.status(200).json({ data: data, mail: mail });
    });
  } catch (err) {
    return res.status(400).json(err);
  }
}
