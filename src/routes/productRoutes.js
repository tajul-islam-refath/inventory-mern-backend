const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const ProductsController = require("../controllers/Products/ProductsController");

router.post(
  "/CreateProducts",
  AuthVerifyMiddleware,
  ProductsController.CreateProducts
);
router.post(
  "/UpdateProducts/:id",
  AuthVerifyMiddleware,
  ProductsController.UpdateProducts
);
router.get(
  "/ProductsList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  ProductsController.ProductsList
);
router.get(
  "/DeleteProduct/:id",
  AuthVerifyMiddleware,
  ProductsController.DeleteProduct
);
router.get(
  "/ProductsDetailsByID/:id",
  AuthVerifyMiddleware,
  ProductsController.ProductsDetailsByID
);
router.get(
  "/ProductsDropDown",
  AuthVerifyMiddleware,
  ProductsController.ProductsDropDown
);

module.exports = router;
