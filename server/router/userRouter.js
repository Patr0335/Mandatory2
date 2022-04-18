import { Router } from "express";
import db from "../database/createConnection.js";
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
  
  // && !req.session.loggedIn taget fra linje 25

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

export default router;
