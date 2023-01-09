const router = require("express").Router();
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const UsersController = require("../controllers/Users/UsersController");

router.post("/User/Registration", UsersController.Registration);
router.post("/User/Login", UsersController.Login);
router.post(
  "/User/ProfileUpdate",
  AuthVerifyMiddleware,
  UsersController.ProfileUpdate
);
router.get(
  "/User/ProfileDetails",
  AuthVerifyMiddleware,
  UsersController.ProfileDetails
);
router.get(
  "/User/RecoverVerifyEmail/:email",
  UsersController.RecoverVerifyEmail
);
router.get(
  "/User/RecoverVerifyOTP/:email/:otp",
  UsersController.RecoverVerifyOTP
);
router.post("/User/RecoverResetPass", UsersController.RecoverResetPass);

module.exports = router;
