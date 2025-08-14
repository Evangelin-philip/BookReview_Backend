const books = require("../models/bookModel");
exports.addBookController = async (req, res) => {


  const { title, author, description, imageUrl } = req.body;

  const userMail = req.payload.userMail;

  try {
    const existingBook = await books.findOne({ title, userMail });

    if (existingBook) {
      res.status(401).json("you have already added this book");
    } else {
      const newBook = new books({
        title,
        author,
        description,
        imageUrl,
        userMail,
      });
      await newBook.save();

      res.status(200).json(newBook);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllBooksController = async (req, res) => {
  try {
    const allBooks = await books.find().sort({ _id: -1 });
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getABookController = async (req, res) => {
  const { id } = req.params;

  try {
    const bookDetails = await books.find({ _id: id });
    res.status(200).json(bookDetails);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.addReviewController = async (req, res) => {
  const { rating, comment } = req.body;
  const { userMail, userName } = req.payload;

  const { id } = req.params;

  if (!rating || !comment) {
    return res.status(400).json({ message: "Rating and comment are required" });
  }

  try {
    const now = new Date();
    const monthYear = now.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    const review = {
      userMail,
      userName,
      rating,
      comment,
      createdAt: monthYear,
    };

    const existingBook = await books.findOne({
      _id: id,
      "reviews.userMail": userMail,
    });

    if (existingBook) {
      res
        .status(409)
        .json("  You’ve already submitted a review for this book!");
    } else {
      await books.updateOne({ _id: id }, { $push: { reviews: review } });

      res.status(200).json("Review added successfully");
    }
  } catch (error) {
    if (error.kind === "ObjectId") {
      res.status(404).json("Book not found");
    } else {
      res.status(500).json("Something Went wrong , please try again");
    }
  }
};
