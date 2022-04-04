import {Router} from "express";
const router = Router();

router.get('/loginPage', (req, res) => {
    req.session.pageName = "isLoggedIn"
    const loggedIn = req.session.isLoggedIn;
    req.session.isLoggedIn = true;
    res.send({ message: `You are logged in: ${loggedIn}`});
});



export default router;