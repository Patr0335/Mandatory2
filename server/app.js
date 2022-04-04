import express from "express";
const app = express();
app.use(express.json());

import cors from "cors"; //above all other import routes
app.use(cors()); // run frontend and backend on same localhost

import path from "path";
app.use(express.static(path.resolve("../client/public"))); // den her server min svelte.

// import loginPage from "./router/loginPage.js";
// app.use(loginPage);

// import welcomePage from "./router/welcomePage.js";
// app.use(welcomePage);

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get("*", (req, res) => {
    console.log(__dirname)
  res.sendFile(path.resolve("../client/public/index.html"));
});

// import helmet from "helmet"; // for security. adds security
// app.use(helmet());

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log("The server is running on port", PORT);
});
