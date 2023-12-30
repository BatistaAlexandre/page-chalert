const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { email, selectedDate } = req.body;

  // Configure o transporte de e-mail usando nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seuemail@gmail.com',
      pass: 'suasenha',
    },
  });

  const mailOptions = {
    from: 'abatista223@gmail.com',
    to: 'abatista223@gmail.com',
    subject: 'Pedido de Visita',
    text: `Solicitação de visita para o dia ${selectedDate}. Email do usuário: ${email}`,
  };

  // Envie o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('E-mail enviado: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
