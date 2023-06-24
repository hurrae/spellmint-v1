import connectMongo from "../../../connect/DBconnect";
const sgMail = require("@sendgrid/mail");
import Users from "../../../model/UserSchema";
const crypto = require("crypto");

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { method } = req;

  if (method == "POST") {
    let user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ error: "User not found! Please Signup." });
    }
    if (!user.password) {
      return res.status(404).json({ error: "Please Sign In with Google" });
    }
    // console.log("USer in forget: ", user);
    // console.log("Working Fine");

    const resetToken = crypto.randomBytes(8).toString("hex");
    console.log("reset Token: ", resetToken);
    // Hashing and adding resetPasswordToken to userSchema
    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    user
      .save()
      .then(() => {})
      .catch((err) => console.log(err));
    console.log("reset pass Token: ", user.resetPasswordToken);

    const resetPasswordUrl = `http://${req.headers.host}/reset/${resetToken}`;
    console.log("reset url: ", resetPasswordUrl);

    const msg = {
      to: req.body.email, // Change to your recipient
      from: "developer@spellmint.com", // Change to your verified sender
      subject: "Spellmint - Password Reset Mail",
      text: "Click here to reset your Password",
      html: `<div><strong>Reset Password</strong><p>A password reset event has been triggered. The password reset window is limited to 15 minutes. If you do not reset your password within two hours, you will need to submit a new request. To complete the password reset process, visit the following link: <a href=${resetPasswordUrl}>${resetPasswordUrl}</a> </p></div>`,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    res.status(201).json({ status: "OK", msg: "Email Sent Successfully" });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
