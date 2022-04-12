import { Router } from "express";
import db from "../database/createConnection.js";

const router = Router();

// Login
router.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await db.get("SELECT * FROM users WHERE username = ?", [
    username,
  ]);

  if (!foundUser) {
    res.status(400);
    return res.send("Wrong username or password");
  }

  //&& !req.session.loggedIn // fjernet fra linje 22
  if (foundUser.password === password) {
    req.session.loggedIn = true;
    req.session.username = username;
    return res.send("You have been logged in to user: " + username);
  } 
  
  else {
    res.status(401);
    return res.send("you messed up");
  }

//   if (req.session.loggedIn) {
//     return res.send("You are already logged in");
//   }
});

// Signup
router.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;

  const { changes } = await db.run(
    `INSERT INTO users (username, password) VALUES (?, ?)`,
    [username, password]
  );

  if (changes === 1) {
    return res.send("You have been signed up");
  }

  res.send("Sign up failed");
});

// Logout
router.get("/api/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.loggedIn = false;
    const username = req.session.username;
    return res.send("You have been logged out from user: " + username);
  }

  res.send("You are not logged in");
});

// // Leg med admin login siden, virker såment fint
// router.post("/api/adminLogin", async (req, res) => {
//     const { username, password } = req.body
//     const foundUser = await db.get("SELECT * FROM users where username = ?", [username]);

//     if(!foundUser) {
//         return res.send("There is no such user bruh");
//     }

//     // Hvis jeg bruger res.send her, så bugger den og sender en ikke admin videre vil admin siden
//     if(foundUser.username === username && foundUser.isAdmin === 0) {
//         return console.log("Adgang nægtet, brugeren er ikke Admin")

//     }

//     if(foundUser.password === password && foundUser.isAdmin === 1) {
//         req.session.loggedIn = true;
//         req.session.username = username;
//         return res.send("You have been logged in as Admin user: " + username);
//     }
// });

// Logout
// router.get("/api/logout", (req, res) => {
//     if(req.session.loggedIn) {
//         req.session.loggedIn = false;
//         const username = req.session.username;
//         return res.send("You have been logged out from user: " + username);
//     }

//     res.send("You are not logged in")
// });

// // Get all users (til admin side)
// router.get("/api/users", async (req, res) => {
//     const users = await db.all(`SELECT * FROM users`);

//     res.send( { data: users } );
// });

export default router;
