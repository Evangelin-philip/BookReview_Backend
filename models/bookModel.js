const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userMail: { type: String, required: true },
  userName: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  createdAt: { 
    type: String, 
    default: () => {
      const d = new Date();
      return `${d.toLocaleString('default', { month: 'long' })} ${d.getFullYear()}`;
    }
  }
});



const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userMail: {
    type: String,
    required: true,
  },
  reviews: {
    type: [reviewSchema],
    default: []
  }
}, { timestamps: true });

bookSchema.set('toJSON', {
  transform: (doc, ret) => {
    if (ret.createdAt) {
      ret.createdAt = ret.createdAt.toLocaleDateString('en-GB').replace(/\//g, '-');
    }
    if (ret.updatedAt) {
      ret.updatedAt = ret.updatedAt.toLocaleDateString('en-GB').replace(/\//g, '-');
    }
    return ret;
  }
});

const books = mongoose.model("books", bookSchema);
module.exports = books;
