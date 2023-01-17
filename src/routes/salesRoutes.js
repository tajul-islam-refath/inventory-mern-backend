const express = require("express");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const SalesController = require("../controllers/Sales/SalesController");
const router = express.Router();

router.post("/CreateSales", AuthVerifyMiddleware, SalesController.CreateSales);
router.get(
  "/SalesList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  SalesController.SalesList
);
router.get("/SaleDelete/:id", AuthVerifyMiddleware, SalesController.SaleDelete);

module.exports = router;
