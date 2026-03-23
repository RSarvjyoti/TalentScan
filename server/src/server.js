const app = require("./app");
const { connectDB } = require("./config/db");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const DB_URL = process.env.DB_URL

app.listen(PORT, ()=> {
    console.log(`Server is runing at http://localhost:${PORT}  `);  
    connectDB(DB_URL);
})