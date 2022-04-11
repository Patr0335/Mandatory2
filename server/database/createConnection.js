import sqlite3 from 'sqlite3'; // database driver
import { open } from 'sqlite';

// gitignore if passwords

const db = await open({
    filename: 'MemeShop.db',   // problem in using '/tmp/database.db' "tmp" because its temporary. 
                                    // tmp is in linux. this wont work on windows. 
    driver: sqlite3.Database
  })
  
export default db;


