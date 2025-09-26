const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3300;
const users = [];
// Parse JSON body
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Hello world");
});

// Get all users
app.get("/users", (req, res) => {
    res.json({ users });
});

// Register a new user
app.post("/users", (req, res) => {
    const newUserPseudo = req.body.userPseudo;

    console.log("Reçu du client :", req.body); // Pour debug

    if (!newUserPseudo) {
        return res.status(400).send("Missing user Pseudo");
    }

    if (users.includes(newUserPseudo)) {
        return res.status(400).send("User pseudo already exists");
    }

    users.push(newUserPseudo);
    return res.status(200).send("User registered");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
