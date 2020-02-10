const router = require("express").Router();

const BikeRouter = require("../modules/bike/bike.routes.ui");
const AdminRouter = require("../modules/admin/admin.routes.ui");
let AdminController = require("../modules/admin/admin.controller");

router.get("/admin", (req, res, next) => {
  res.render("admin/index");
});

router.get("/logout", (req, res, next) => {
  res.clearCookie("access_token");
  res.clearCookie("user");
  res.render("admin/login");
});

router.get("/login", (req, res, next) => {
  res.render("admin/login");
});

router.post("/login", (req, res, next) => {
  try {
    let user = AdminController.validation(req.body);
    res.cookie("access_token", user.token);
    res.cookie("user", user.name);
    res.json(user);
  } catch (e) {
    let msg = new Error("Wrong Username or Password");
    next(msg);
  }
});

router.use("/", BikeRouter);
router.use("/admin", AdminRouter);

module.exports = router;
