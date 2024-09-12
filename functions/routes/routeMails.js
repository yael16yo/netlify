const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const router = express.Router();

router.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Utilisation des variables d'environnement
        pass: process.env.EMAIL_PASS,
    }
});

router.post('/sendemail', (req, res) => {
    const { name, from, subject, text } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER, // Utilisation des variables d'environnement
        replyTo: from,
        to: process.env.EMAIL_USER,
        subject: subject,
        html: 'Message provenant de : ' + name + `<br/><br/>` + text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Une erreur a empêché l\'envoi du mail, veuillez réessayer.');
        } else {
            console.log('Email sent:', info.response);
            return res.status(200).send('Votre email a bien été envoyé.');
        }
    });
});

module.exports = router;