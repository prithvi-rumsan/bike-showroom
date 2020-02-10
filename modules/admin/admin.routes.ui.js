const router = require("express").Router();

//admin Page
router.get("/", (req, res, next) => {
  res.render("admin/login");
});

router.get("/create", (req, res, next) => {
  res.render("admin/create");
});

router.get("/update", (req, res, next) => {
  res.render("admin/update");
});

router.get("/delete", (req, res, next) => {
  res.render("admin/delete");
});

module.exports = router;
