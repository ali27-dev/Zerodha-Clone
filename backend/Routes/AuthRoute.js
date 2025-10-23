const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

// router.get("/signup", Signup);
router.get("/signup", (req, res) => {
  res.send("form");
});
router.post("/login", Login);
// router.post("/", userVerification);
// router.get("/signup", (req, res) => {
//   res.send("form");
// });

module.exports = router;
