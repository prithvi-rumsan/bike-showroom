const router = require("express").Router();
const BikeController = require("./bike.controller");
const adminController = require("../admin/admin.controller");
//list all the bikes in the inventory
router.get("/", async (req, res, next) => {
  let start = req.query.start ? parseInt(req.query.start) : 1;
  let limit = req.query.limit ? parseInt(req.query.limit) : 5;
  let name = req.query.name ? req.query.name : null;
  let bikes = await BikeController.list(start, limit, name)
    .then(d => res.json(d))
    .catch(error => next(error));
});

//get specific bike details
router.get("/:id", (req, res, next) => {
  BikeController.getById(req.params.id)
    .then(d => res.json(d))
    .catch(e => next(e));
});

//Add new Bike
router.post("/", (req, res, next) => {
  let tokenCheck = adminController.tokenCheck(req.cookies.access_token);
  if (tokenCheck) {
    BikeController.create(req.body)
      .then(d => res.json(d))
      .catch(e => next(e));
  } else {
    return new Error("Access Denied");
  }
});

//Update the existing bike details
router.put("/:id", (req, res, next) => {
  let tokenCheck = adminController.tokenCheck(req.cookies.access_token);
  if (tokenCheck) {
    BikeController.updateById(req.params.id, req.body)
      .then(d => res.json(d))
      .catch(e => next(e));
  } else {
    return new Error("Access Denied");
  }
});

//Delete the bike from the inventory
router.delete("/:id", (req, res, next) => {
  let tokenCheck = adminController.tokenCheck(req.cookies.access_token);
  if (tokenCheck) {
    BikeController.remove(req.params.id)
      .then(d => res.json(d))
      .catch(e => next(e));
  } else {
    return new Error("Access Denied");
  }
});

module.exports = router;
