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

    const resetPasswordUrl = `https://spellmint.com/reset/${resetToken}`;
    console.log("reset url: ", resetPasswordUrl);

    const msg = {
      to: req.body.email, // Change to your recipient
      from: "support@spellmint.com", // Change to your verified sender
      subject: "Spellmint - Password Reset Request for Your Spellmint Account",
      text: "Click here to reset your Password",
      html: `<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" /><!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=Edge" /><!--<![endif]-->
          <!--[if (gte mso 9)|(IE)]>
          <xml>
          <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          <!--[if (gte mso 9)|(IE)]>
          <style type="text/css">
            body {width: 600px;margin: 0 auto;}
            table {border-collapse: collapse;}
            table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
            img {-ms-interpolation-mode: bicubic;}
          </style>
          <![endif]-->
      
          <style type="text/css">
            body, p, div {
              font-family: helvetica,arial,sans-serif;
              font-size: 14px;
            }
            body {
              color: #111829;
            }
            body a {
              color: #7371EE;
              text-decoration: none;
            }
            p { margin: 0; padding: 0; }
            table.wrapper {
              width:100% !important;
              table-layout: fixed;
              -webkit-font-smoothing: antialiased;
              -webkit-text-size-adjust: 100%;
              -moz-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            img.max-width {
              max-width: 100% !important;
            }
            .column.of-2 {
              width: 50%;
            }
            .column.of-3 {
              width: 33.333%;
            }
            .column.of-4 {
              width: 25%;
            }
            @media screen and (max-width:480px) {
              .preheader .rightColumnContent,
              .footer .rightColumnContent {
                  text-align: left !important;
              }
              .preheader .rightColumnContent div,
              .preheader .rightColumnContent span,
              .footer .rightColumnContent div,
              .footer .rightColumnContent span {
                text-align: left !important;
              }
              .preheader .rightColumnContent,
              .preheader .leftColumnContent {
                font-size: 80% !important;
                padding: 5px 0;
              }
              table.wrapper-mobile {
                width: 100% !important;
                table-layout: fixed;
              }
              img.max-width {
                height: auto !important;
                max-width: 480px !important;
              }
              a.bulletproof-button {
                display: block !important;
                width: auto !important;
                font-size: 80%;
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
              .columns {
                width: 100% !important;
              }
              .column {
                display: block !important;
                width: 100% !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
              }
            }
          </style>
          <!--user entered Head Start-->
          
           <!--End Head user entered-->
        </head>
        <body>
          <center class="wrapper" data-link-color="#7371EE" data-body-style="font-size: 14px; font-family: helvetica,arial,sans-serif; color: #111829; background-color: #ffffff;">
            <div class="webkit">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#ffffff">
                <tr>
                  <td valign="top" bgcolor="#ffffff" width="100%">
                    <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="100%">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td>
                                <!--[if mso]>
                                <center>
                                <table><tr><td width="600">
                                <![endif]-->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width:600px;" align="center">
                                  <tr>
                                    <td role="modules-container" style="padding: 0px 0px 0px 0px; color: #111829; text-align: left;" bgcolor="#ffffff" width="100%" align="left">
                                      
          <table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%"
                 style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
            <tr>
              <td role="module-content">
                <p>We received a request to reset the password for your Spellmint account.</p>
              </td>
            </tr>
          </table>
        
          <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
            <tr>
              <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px;" valign="top" align="center">
                <a href="https://spellmint.com/"><img class="max-width" border="0" style="display:block;color:#000000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;max-width:100% !important;width:100%;height:auto !important;" src="https://d375w6nzl58bw0.cloudfront.net/uploads/d066ed734d9e43058a8523339bd29e9cd80edf53887142eec0dcc78c1fc3dfef.png" alt="Spellmint" width="600"></a>
              </td>
            </tr>
          </table>
        
          <table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
            <tr>
              <td style="padding:18px 0px 18px 0px;line-height:22px;text-align:inherit;"
                  height="100%"
                  valign="top"
                  bgcolor="">
                  <div>
      <div>Hey ${user.name},</div>
      
      <div>&nbsp;</div>
      
      <div>We received a request to reset the password for your Spellmint account. We understand that these things happen, and we&#39;re here to help you regain access quickly and securely.</div>
      
      <div>&nbsp;</div>
      
      <div>To reset your password, please click the link below:<br />
      <a href=${resetPasswordUrl}>${resetPasswordUrl}</a>
      </div>
      
      <div>&nbsp;</div>
      
      <div>This link will expire in 24 hours for your security. If you didn&#39;t request a password reset, please ignore this email or contact us if you have any concerns.</div>
      
      <div>&nbsp;</div>
      
      <div>
      <div>Remember, Spellmint representatives will never ask for your password. Protect your information by never sharing your password with anyone.</div>
      
      <div>&nbsp;</div>
      
      <div>If you need further assistance, don&#39;t hesitate to reach out to us at <a href="mailto:support@spellmint.com">support@spellmint.com</a>.</div>
      
      <div>&nbsp;</div>
      
      <div>Best Regards,</div>
      
      <div>The Spellmint Team</div>
      </div>
      </div>
      
              </td>
            </tr>
          </table>
        <div data-role="module-unsubscribe" class="module unsubscribe-css__unsubscribe___2CDlR" role="module" data-type="unsubscribe" style="color:#444444;font-size:12px;line-height:20px;padding:16px 16px 16px 16px;text-align:center"><p style="font-family:Arial,Helvetica, sans-serif;font-size:12px;line-height:20px"><a class="Unsubscribe--unsubscribeLink" href="<%asm_group_unsubscribe_raw_url%>">Unsubscribe</a></p></div>
                                    </td>
                                  </tr>
                                </table>
                                <!--[if mso]>
                                </td></tr></table>
                                </center>
                                <![endif]-->
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </center>
        </body>
      </html>`,
    };
    const sgres = await sgMail.send(msg);
    console.log("Sgres: ", sgres);
    res.status(201).json({ status: "OK", msg: "Email Sent Successfully" });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
