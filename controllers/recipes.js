// @desc    Get all recipes
// @routes  GET /api/v1/recipes
// @access  Public
exports.getRecipes = (req, res, next) => {
  return res.status(200).json({ success: true, msg: "Show all recipes" });
};

// @desc    Get singe recipe
// @routes  GET /api/v1/recipes/:id
// @access  Public
exports.getRecipe = (req, res, next) => {
  return res
    .status(200)
    .json({ success: true, msg: `Show recipe ${req.params.id}` });
};

// @desc    Create new recipe
// @routes  POST /api/v1/recipes
// @access  Private
exports.createRecipe = (req, res, next) => {
  return res.status(200).json({ success: true, msg: "Create new recipe" });
};

// @desc    Update recipe
// @routes  PUT /api/v1/recipes/:id
// @access  Private
exports.updateRecipe = (req, res, next) => {
  return res
    .status(200)
    .json({ success: true, msg: `Update recipe ${req.params.id}` });
};

// @desc    Delete recipe
// @routes  DELETE /api/v1/recipes/:id
// @access  Private
exports.deleteRecipe = (req, res, next) => {
  return res
    .status(200)
    .json({ success: true, msg: `Delete recipe ${req.params.id}` });
};
