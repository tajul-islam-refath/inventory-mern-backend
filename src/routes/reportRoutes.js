const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const ReportController = require("../controllers/Report/ReportController");

router.post(
  "/ExpensesByDate",
  AuthVerifyMiddleware,
  ReportController.ExpensesByDate
);
router.post(
  "/ReturnByDate",
  AuthVerifyMiddleware,
  ReportController.ReturnByDate
);
router.post(
  "/PurchaseByDate",
  AuthVerifyMiddleware,
  ReportController.PurchaseByDate
);
router.post("/SalesByDate", AuthVerifyMiddleware, ReportController.SalesByDate);

module.exports = router;
