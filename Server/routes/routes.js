const express = require("express");
const todoController = require("../Controllers/todoController");
const router = express.Router();

router.get("/gettodo",todoController.getdata)
router.post("/add",todoController.adddata)
router.put("/post",todoController.update)
router.delete("/delete",todoController.delete)


module.exports = router;