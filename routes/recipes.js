const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({ success: true, msg: "Show all recipes" });
});

router.post("/", (req, res) => {
  return res.status(200).json({ success: true, msg: "Create new recipe" });
});

router.put("/:id", (req, res) => {
  return res
    .status(200)
    .json({ success: true, msg: `Update recipe ${req.params.id}` });
});

router.get("/:id", (req, res) => {
  return res
    .status(200)
    .json({ success: true, msg: `Show recipe ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  return res
    .status(200)
    .json({ success: true, msg: `Delete recipe ${req.params.id}` });
});

module.exports = router;
