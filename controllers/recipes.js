const Recipe = require("../models/Recipe");

// @desc    Get all recipes
// @routes  GET /api/v1/recipes
// @access  Public
exports.getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    return res
      .status(200)
      .json({ success: true, count: recipes.length, data: recipes });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
};

// @desc    Get single recipe
// @routes  GET /api/v1/recipes/:id
// @access  Public
exports.getRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(`${req.params.id}`);
    if (!recipe) {
      return res.status(400).json({ success: false });
    }
    return res.status(200).json({ success: true, data: recipe });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
};

// @desc    Create new recipe
// @routes  POST /api/v1/recipes
// @access  Private
exports.createRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);
    return res.status(201).json({ success: true, data: recipe });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
};

// @desc    Update recipe
// @routes  PUT /api/v1/recipes/:id
// @access  Private
exports.updateRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!recipe) {
      return res.status(400).json({ success: false });
    }
    return res.status(200).json({ success: true, data: recipe });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
};

// @desc    Delete recipe
// @routes  DELETE /api/v1/recipes/:id
// @access  Private
exports.deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(400).json({ success: false });
    }
    return res.status(200).json({ success: true, data: {} });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
};
