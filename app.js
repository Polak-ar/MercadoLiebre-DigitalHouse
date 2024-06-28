const express = require('express');
const app = express();
const path = require("node:path");

app.use(express.static("./public"));

let port =3030 || process.env.PORT;

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));

app.get('/', (req, res) => {
   res.sendFile(path.resolve("views/home.html"));
});

app.get('/login', (req, res) => {
   res.sendFile(path.resolve("views/login.html"));
});

app.get('/register', (req, res) => {
   res.sendFile(path.resolve("views/register.html"));
});











