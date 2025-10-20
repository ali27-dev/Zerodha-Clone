const { Signup, Login } = require("../Controllers/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);
// router.post("/login", Login);
// router.get("/signup", (req, res) => {
//   res.send("form");
// });

module.exports = router;
