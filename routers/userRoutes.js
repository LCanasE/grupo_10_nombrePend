// Rutas de usuarios
const express = require("express");
const userControllers = require("../controllers/userControllers");
const router = express.Router();
const validations = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const categoryUser = require("../middlewares/categoryUserMiddleware");

// @GET /users/login
router.get("/login", guestMiddleware, userControllers.getLogin);

// @POST /post/login
router.post("/login", userControllers.postLogin);

// @POST / users/login
router.post("/login", userControllers.postLogin);

// @GET /users/register
router.get("/register", guestMiddleware, userControllers.getRegister);

// @POST/users/register
router.post("/register", validations, userControllers.postRegister);

// @GET/users/beProducer
router.get("/myProfile", authMiddleware, userControllers.getMyProfile);

// @GET/users/beProducer
router.get("/beProducer", authMiddleware, userControllers.getBeProducer);

// @GET /users/editUser
router.get("/editUser", authMiddleware, userControllers.getEditUser);

// @PUT /users/editUser
router.put("/editUser", authMiddleware, userControllers.putEditUser);

// @GET /users/logout
router.get("/logout", userControllers.logout);

// @GET /users/list
router.get("/profile", userControllers.listUsers);

// @POST /users/:id/delete
router.delete("/:id/delete", userControllers.deleteUser)

module.exports = router;
