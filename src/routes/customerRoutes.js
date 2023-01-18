const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const CustomersController = require("../controllers/Customers/CustomersController");

router.post(
  "/Customer/CreateCustomers",
  AuthVerifyMiddleware,
  CustomersController.CreateCustomers
);
router.post(
  "/Customer/UpdateCustomers/:id",
  AuthVerifyMiddleware,
  CustomersController.UpdateCustomers
);
router.get(
  "/Customer/CustomersList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  CustomersController.CustomersList
);
router.get(
  "/Customer/CustomersDropDown",
  AuthVerifyMiddleware,
  CustomersController.CustomersDropDown
);
router.get(
  "/Customer/CustomersDetailsByID/:id",
  AuthVerifyMiddleware,
  CustomersController.CustomersDetailsByID
);

router.get(
  "/Customer/DeleteCustomer/:id",
  AuthVerifyMiddleware,
  CustomersController.DeleteCustomer
);

module.exports = router;
