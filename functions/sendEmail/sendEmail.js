const sgMail = require("@sendgrid/mail");
import {Handler} from "@netlify/functions"

exports.handler = async (event, context) => {
  console.log("cliccccck");
  try {
    const { phone } = JSON.parse(event.body);

    sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

    const message = {
      to: "olevova1983@gmail.com", // Вкажіть власну поштову скриньку
      from: "olevova1983@gmail.com", // Вкажіть вашу поштову скриньку
      subject: "Нова підписка",
      text: `Нова підписка з номером телефону: ${phone}`,
    };

    await sgMail.send(message);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};