import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hellow, raginee</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About, raginee</h1>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
})

