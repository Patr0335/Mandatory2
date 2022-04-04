import {Router} from "express";
const router = Router();

router.get("/login", (req, res) => {
    req.session.pageName = "isLoggedIn"
    const loggedIn = req.session.isLoggedIn;
    req.session.isLoggedIn = true;
    res.send({ message: `You are logged in: ${loggedIn}`});
});

// for logout we could use:
//req.session.destroy(function(err) {
// cannot access here
//});

router.get("/logout", (req, res) => {
    const loggedIn = req.session.isLoggedIn;
    req.session.isLoggedIn = false;
    res.send({ message: `You are logged out: ${loggedIn}.`});
});


export default router;