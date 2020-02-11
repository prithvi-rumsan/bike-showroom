const adminController = require("./admin.controller");
const BikeController = require("../bike/bike.controller");
const router = require("express").Router();

//const BikeRouter = require("../modules/bike/bike.routes.ui");

//admin Page
router.get("/", (req, res, next) => {
  res.render("admin/login");
});

router.get("/create", (req, res, next) => {
  res.render("admin/create");
});

router.post("/create", (req, res, next) => {
  console.log("yes post request in /admin/create");
  let tokenCheck = adminController.tokenCheck(req.cookies.access_token);
  if (tokenCheck) {
    console.log(req.body);
    BikeController.create(req.body)
      .then(d => res.render("admin/create"))
      .catch(e => next(e));
  } else {
    return new Error("Access Denied");
  }
});

router.get("/update", (req, res, next) => {
  res.render("admin/update");
});

router.post("/update", (req, res, next) => {
  console.log("yes post request in /admin/update");
  let tokenCheck = adminController.tokenCheck(req.cookies.access_token);
  if (tokenCheck) {
    console.log(req.body);
    let bikeid = req.body.bikeid;
    console.log(bikeid);
    //delete req.body.bikeid;
    BikeController.updateById(bikeid, req.body)
      .then(d => res.render("admin/update"))
      .catch(e => next(e));
  } else {
    return new Error("Access Denied");
  }
});

router.get("/delete", (req, res, next) => {
  res.render("admin/delete");
});

router.post("/delete", (req, res, next) => {
  console.log("yes post request in /admin/delete");
  let tokenCheck = adminController.tokenCheck(req.cookies.access_token);
  if (tokenCheck) {
    console.log(req.body);
    let bikeid = req.body.bikeid;
    console.log(bikeid);
    BikeController.remove(bikeid)
      .then(d => res.render("admin/delete"))
      .catch(e => next(e));
  } else {
    return new Error("Access Denied");
  }
});

module.exports = router;
