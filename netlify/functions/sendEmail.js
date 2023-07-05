const sgMail = require("@sendgrid/mail");

exports.handler = async (event, context) => {
  try {
    const { phone } = JSON.parse(event.body);

    sgMail.setApiKey('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');

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