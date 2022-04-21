import db from "./createConnection.js";
import bcrypt from "bcrypt";

const isInDeleteMode = true;
const saltRounds = 12;
const admin = await bcrypt.hash("1234", saltRounds);

if(isInDeleteMode) {
    await db.exec(`DROP TABLE IF EXISTS users;`);
    await db.exec(`DROP TABLE IF EXISTS memeproducts;`);
}


await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(80),
    password VARCHAR(150)
    
);`);

await db.exec(`CREATE TABLE IF NOT EXISTS memeproducts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(80),
    price DOUBLE,
    description VARCHAR(120)
);`);

// seed
if(isInDeleteMode) {
    await db.run(`INSERT INTO memeproducts (name, price, description) VALUES ('9gag', 50, 'Hot Page meme!')`);
    await db.run(`INSERT INTO memeproducts (name, price, description) VALUES ('Roast', 50, 'Roast your friends')`);
    await db.run(`INSERT INTO memeproducts (name, price, description) VALUES ('RageComic', 75, 'Reeeeee')`);
    await db.run(`INSERT INTO memeproducts (name, price, description) VALUES ('Meme Lesson', 100, 'History meme lesson')`);
    await db.run(`INSERT INTO memeproducts (name, price, description) VALUES ('RedditMeme', 75, 'Personalized subreddit meme')`);
    await db.run(`INSERT INTO memeproducts (name, price, description) VALUES ('Donation', 25, 'Donation to Ukraine')`);
    await db.run(`INSERT INTO users (username, password) VALUES ('patrickherfolge@gmail.com', '${admin}')`);
    

};

db.close();