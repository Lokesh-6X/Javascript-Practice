const  express = require("express");
const router = express.Router();

router.get("/:name", (req,res) => {
    const userName = req.params.name;
    res.send(`Hello ${userName}`);
});

router.post("/", (req,res) => {
    const data = req.body;
    res.json(data);
})

module.exports = router;