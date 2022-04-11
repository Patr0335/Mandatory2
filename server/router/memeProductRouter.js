import { Router } from "express";
import db from "../database/createConnection.js";

const router = Router();

router.get("/api/memeproducts", async (req, res) => {
    const memeproducts = await db.all("SELECT * FROM memeproducts;");

    res.send({ data: memeproducts });
});


export default router;