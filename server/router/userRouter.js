import { Router } from "express";
import db from "../database/createConnection.js";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

const saltRounds = 12;
const router = Router();

// Login
router.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const userFound = await db.get("SELECT * FROM users WHERE username = ?", [
    username,
  ]);

  if (!userFound) {
    res.status(400);
    return res.send("User doesnt exist");
  }

  const samePass = await bcrypt.compare(password, userFound.password);

  // if (userFound.password === password) {
    if(samePass && !req.session.loggedIn) {
    req.session.loggedIn = true;
    req.session.username = username;
    return res.send("Login: " + username);
  } 
  
  else {
    res.status(401);
    return res.send("you messed up");
  }

});

// Signup
router.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;

  const hashedPass = await bcrypt.hash(password, saltRounds);

  const { changes } = await db.run(
    `INSERT INTO users (username, password) VALUES (?, ?)`,
    [username, hashedPass]
  );

  if (changes === 1) {
    welcomeMail(username);
    return res.send("Signup successful");
  }

  res.send("Signup fail");
});

// Logout
router.get("/api/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.loggedIn = false;
    const username = req.session.username;
    return res.send("Logout: " + username);
  }

  res.send("You're not logged in");
});



function welcomeMail(username) {
  let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'patricksmemeshop@gmail.com',
          pass: 'solnedgang123'
      }
  });
    
  // Text = skal indeholde password
  let mailDetails = {
      from: 'patricksmemeshop@gmail.com',
      to: username,
      subject: 'Patricks Memeshop Newsletter!',
      html:'<p> You have sucessfully made an account on patricks Memeshop! </p>'
  };
    
  mailTransporter.sendMail(mailDetails, function(err, data) {
      if(err) {
          console.log('Error Occurs');
      } else {
          console.log('Email sent successfully');
      }
  });
}

export default router;
