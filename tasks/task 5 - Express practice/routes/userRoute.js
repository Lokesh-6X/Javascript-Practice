const  express = require("express");
const router = express.Router();

router.get("/:name", (req,res) => {
    const userName = req.params.name;
    res.send(`Hello ${userName}`);
});

module.exports = router;