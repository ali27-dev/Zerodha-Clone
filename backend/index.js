require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
// const { Signup, Login } = require("./Controllers/AuthController");

const { PositionsModel } = require("./model/PositionsModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const { OrdersModel } = require("./model/OrdersModel");
const User = require("./model/UsersModel");
const authRouter = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;
const SECRET = process.env.SECRET;

const app = express();

const sessionOptions = {
  secret: SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

// Middlewares
app.use(
  cors({
    // origin: ["http://localhost:3002"],
    // methods: ["GET", "POST", "PUT", "DELETE"],
    // credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected!"))
  .catch((err) => console.error(err));
/*
app.get("/addPositions", async (req, res) => {
  const temPositions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  temPositions.forEach((item) => {
    let newPositions = new PositionsModel({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss,
    });

    newPositions.save();
  });
  res.send("done");
});
*/

/////// Auth-Middleware //////
app.use("/", authRouter);

/////// Demo User ////////
app.get("/demouser", async (req, res) => {
  let fakeUser = new User({
    email: "demo@gmail.com",
    username: "Demo_User",
  });
  let newRegistered = await User.register(fakeUser, "heeloworld");
  res.send(newRegistered);
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order Saved!");
});

app.listen(PORT, () => {
  console.log("App is listening at 3002");
  mongoose.connect(URL);
  console.log("DB is Connected");
});
