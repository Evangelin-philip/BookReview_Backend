const { body, validationResult } = require("express-validator");

// Helper to format validation errors
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array().map(err => err.msg);
    return res.status(400).json({ messages });
  }
  next();
};

// Validation rules for adding a book
const validateAddBook = [
  body("title").notEmpty().withMessage("Title is required"),
  body("author").notEmpty().withMessage("Author is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("imageUrl").isURL().withMessage("Valid Image URL is required"),
  handleValidation
];

 const validateAddReview = [

  
  body('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be between 1 and 5'),
  body('comment')
    .isLength({ min: 3 })
    .withMessage('Comment must be at least 3 characters long'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Transform array into object
      const formattedErrors = {};
      errors.array().forEach(err => {
        formattedErrors[err.path] = err.msg;
      });
      return res.status(400).json({ errors: formattedErrors });
    }
    next();
  }
];

module.exports = {
  validateAddBook,
  validateAddReview
};
