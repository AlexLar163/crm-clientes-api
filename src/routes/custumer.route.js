const router = require("express").Router();
const {
  getCustumer,
  createCustumer,
  updateCustumer,
  deleteCustumer,
} = require("../controllers/custumer.controler");

router.get("/", getCustumer);
router.post("/create-custumer", createCustumer);
router.put("/update-custumer", updateCustumer);
router.delete("/delete-custumer", deleteCustumer);

module.exports = router;
