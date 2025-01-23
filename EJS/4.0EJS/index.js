import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDate();

    let type = "A weekday";
    let adv = "It's time to work hard!";

    if (day==0 || day == 7) {
        type = "A weekend";
        adv = "It's time to have fun!";
    } 
    res.render("index.ejs", {
        dayType : type, 
        advice: adv
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});

