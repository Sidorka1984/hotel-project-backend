// const sgMail = require("@sendgrid/mail");
// require('dotenv').config;
// 
// const { SENDGRID_KEY } = process.env
// sgMail.setApiKey(SENDGRID_KEY);
// 
// const sendEmail = async (data) => {
    // const email = { ...data, from: "olga.ulyanchuk@pepsico.com" };
    // 
    // await sgMail.send(email);
// }
// 
// module.exports = sendEmail;
// 

// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const {EMAIL_PASSWORD} = process.env;

// const nodemailerConfig = {
    // host: "smtp.meta.ua",
    // port: 465,
    // secure: true,
    // auth: {
        // user: "ulyanchuk@meta.ua",
        // pass: EMAIL_PASSWORD
    // }
// }
// const transporter = nodemailer.createTransport(nodemailerConfig);

// const sendEmail = async (data) => {
    // const email = { ...data, from: "ulyanchuk@meta.ua" };
    // 
    // await transporter.sendMail(email);
// }

// module.exports = sendEmail;
// 
