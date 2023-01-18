const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const ExpensesController = require("../controllers/Expenses/ExpensesController");

router.post(
  "/CreateExpenses",
  AuthVerifyMiddleware,
  ExpensesController.CreateExpenses
);
router.post(
  "/UpdateExpenses/:id",
  AuthVerifyMiddleware,
  ExpensesController.UpdateExpenses
);
router.get(
  "/ExpensesList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  ExpensesController.ExpensesList
);

router.get(
  "/ExpenseDetailsByID/:id",
  AuthVerifyMiddleware,
  ExpensesController.ExpenseDetailsByID
);

router.get(
  "/DeleteExpense/:id",
  AuthVerifyMiddleware,
  ExpensesController.DeleteExpense
);

module.exports = router;
