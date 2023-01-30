const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const CategoriesController = require("../controllers/Categories/CategoriesController");

router.post(
  "/CreateCategories",
  AuthVerifyMiddleware,
  CategoriesController.CreateCategories
);
router.post(
  "/UpdateCategories/:id",
  AuthVerifyMiddleware,
  CategoriesController.UpdateCategories
);
router.get(
  "/CategoriesList/:pageNo/:perPage/:searchKeyword",
  AuthVerifyMiddleware,
  CategoriesController.CategoriesList
);
router.get(
  "/CategoriesDropDown",
  AuthVerifyMiddleware,
  CategoriesController.CategoriesDropDown
);

router.get(
  "/CategoriesDetailsByID/:id",
  AuthVerifyMiddleware,
  CategoriesController.CategoriesDetailsByID
);

router.get(
  "/Category/DeleteCategories/:id",
  AuthVerifyMiddleware,
  CategoriesController.DeleteCategories
);

module.exports = router;
