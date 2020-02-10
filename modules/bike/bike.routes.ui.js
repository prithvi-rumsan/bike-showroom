const router = require("express").Router();
const BikeAPI = require("./bike.routes.api");
//list all the bikes in the inventory
router.get("/", async (req, res, next) => {
  res.render("bike/index");
});

//list the bikes with the particular id form the inventory
router.get("/bikes/:id", async (req, res, next) => {
  res.render("bike/details", { id: req.params.id });
});

module.exports = router;
