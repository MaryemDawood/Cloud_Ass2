const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
    res.json({ message: "CORS and JSON middleware are working!" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
