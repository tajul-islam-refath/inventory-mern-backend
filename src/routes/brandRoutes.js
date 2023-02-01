const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const BrandsController = require("../controllers/Brands/BrandsController");

router.post("/CreateBrand", AuthVerifyMiddleware, BrandsController.CreateBrand);
router.post(
  "/UpdateBrand/:id",
  AuthVerifyMiddleware,
  BrandsController.UpdateBrand
);
router.get(
  "/BrandList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  BrandsController.BrandList
);
router.get(
  "/BrandDropDown",
  AuthVerifyMiddleware,
  BrandsController.BrandDropDown
);
router.get(
  "/BrandDetailsByID/:id",
  AuthVerifyMiddleware,
  BrandsController.BrandDetailsByID
);

router.get(
  "/DeleteBrand/:id",
  AuthVerifyMiddleware,
  BrandsController.DeleteBrand
);

module.exports = router;
