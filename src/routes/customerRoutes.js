const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const CustomersController = require("../controllers/Customers/CustomersController");

router.post(
  "/CreateCustomers",
  AuthVerifyMiddleware,
  CustomersController.CreateCustomers
);
router.post(
  "/UpdateCustomers/:id",
  AuthVerifyMiddleware,
  CustomersController.UpdateCustomers
);
router.get(
  "/CustomersList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  CustomersController.CustomersList
);
router.get(
  "/CustomersDropDown",
  AuthVerifyMiddleware,
  CustomersController.CustomersDropDown
);
router.get(
  "/CustomersDetailsByID/:id",
  AuthVerifyMiddleware,
  CustomersController.CustomersDetailsByID
);

router.get(
  "/Customer/DeleteCustomer/:id",
  AuthVerifyMiddleware,
  CustomersController.DeleteCustomer
);

module.exports = router;
