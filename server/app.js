import express from "express";
const app = express();
app.use(express.json());

import cors from "cors"; //above all other import routes
app.use(cors()); // run frontend and backend on same localhost

import path from "path";
app.use(express.static(path.resolve("../client/public"))); // Serves my svelte.

//################# sessions
import session from "express-session";
app.use(session({
  secret: 'keyboard cat should not be pushed',
  resave: false, // variable. if its true every route will try to resave the session. false = if you are not updating dont try to resave it. 
  saveUninitialized: true, // means that even if you are not starting a session when a client contacts / makes a request. you want to create a session.
  // false means if we dont want to create that many sessions????
  cookie: { secure: false } // you have to make it false. true is https. we are doing http
}));

//################# rate-limit middleware
import rateLimit from 'express-rate-limit'

// const baseLimiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	max: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes)
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// });

// app.use(baseLimiter); // ddos prevention

//################# router
import userRouter from "./router/userRouter.js";
app.use(userRouter);

import memeProductRouter from "./router/memeProductRouter.js";
app.use(memeProductRouter);

//################# helmet middleware
// Helmet.js is a useful Node.js module that helps you secure HTTP headers returned by your Express apps.
// HTTP headers can leak sensitive information.
// A popular way Express apps leak information is through the X-Powered-By header.
// https://www.veracode.com/blog/secure-development/fasten-your-helmetjs-part-1-securing-your-express-http-headers
import helmet from "helmet"; // ECMAScript modules 
app.use('/api',helmet()); // adds security /  wrapper around 15 smaller middlewares

//################# nodemailer
import nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
// async function main() {


// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//   host: "kekpawtft@gmail.com",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   // auth: {
//   //   user: testAccount.user, // generated ethereal user
//   //   pass: testAccount.pass, // generated ethereal password
//   // },
// });

// // send mail with defined transport object
// let info = await transporter.sendMail({
//   from: '"Fred Foo 👻" <foo@example.com>', // sender address
//   to: "bar@example.com, baz@example.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>", // html body
// });

// console.log("Message sent: %s", info.messageId);
// }

// main().catch(console.error);



const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log("The server is running on port", PORT);
});
