
# 📖 Book Review Board

A full-stack web application where users can post books they've read and leave short reviews. Built with **Node.js, Express, MongoDB, and React**.

---

## 🔹 Features

- **User Authentication**: Register and login with JWT tokens.  
- **Book Management**: Add, view, and browse books with cover images, title, author, and description. Add button enabled only when logged in.  
- **Review System**: Rate and review books (1-5 stars with comments), enabled only when logged in.  
- **Responsive UI**: Modern React interface with form validation using Tailwind, FontAwesome, Heroicons, Google Fonts, and Flowbite.  
- **Protected Routes**: Authentication required for login, adding books, and reviews.  

---

## 🛠 Tech Stack

**Backend:**  
- Node.js with Express.js  
- MongoDB with Mongoose  
- JWT for authentication  
- Bcrypt for password hashing  
- Input validation and middleware protection  

**Frontend:**  
- React.js  
- Axios for API calls  
- localStorage for JWT token management  
- Form validation and responsive design with Tailwind CSS  

---

## 📁 Project Structure



Geeseguard Book Review Board App/
├── backend/
│   ├── controller/
│   │   ├── bookController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── jwtMW.js
│   ├── models/
│   │   ├── bookModel.js
│   │   └── userModel.js
│   ├── validators/
│   │   ├── authValidator.js
│   │   └── bookValidator.js
│   ├── node_modules/
│   ├── .env
│   ├── .gitignore
│   ├── dbConnection.js
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── Routes.js
├── frontend/
│   ├── public/
│   │   └── images/
              readMe/                 📸 All your screenshots
            │   ├── Landingpage.png    🏠 Landing page
            │   ├── loginPage.png      🔐 Authentication
            │   ├── registerPage.png   📝 User registration
            │   ├── allBooksPage.png   📚 Book listing
            │   ├── viewBookspage.png  👁️ Book details
            │   ├── addBookForm.png    ➕ Add new book
            │   ├── reviewForm.png     ⭐ Review system
│   │       ├── vite.svg
│   │       ├── landing.png
│   │       ├── landingImage.png
│   │       ├── logo-bg.jpg
│   │       ├── logo-dark.png
│   │       └── logo-light.png
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Preloader.jsx
│   │   ├── pages/
│   │   │   ├── Auth.jsx
│   │   │   └── PageNotFound.jsx
│   │   ├── services/
│   │   │   ├── allApi.js
│   │   │   ├── commonApi.js
│   │   │   └── serverUrl.js
│   │   ├── users/
│   │   │   ├── components/
│   │   │   └── pages/
│   │   ├── App.css
│   │   └── App.jsx
│   └── package.json
└── README.md




---

## ⚡ API Endpoints

**Authentication:**  
- `POST /api/register` - Register a new user  
- `POST /api/login` - Login and receive JWT  

**Books:**  
- `POST /api/books` - Add a book (Auth required)  
- `GET /api/books` - List all books  
- `GET /api/books/:id` - View single book with reviews  

**Reviews:**  
- `POST /api/books/:id/reviews` - Add a review (Auth required)  

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js v14+  
- MongoDB (local or Atlas)  
- Git  

### Installation
```bash
git clone <your-github-repo-url>
cd "Geeseguard Book Review Board App"/backend
npm install



2.Install dependencies:
npm install express mongoose bcryptjs jsonwebtoken cors dotenv nodemon


3.Create .env file in backend folder:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookreviewboard
JWT_SECRET=your_jwt_secret_key_here



4.Start the backend server:
node index.js
# or
npm run dev


The backend will run on http://localhost:5000



Database Setup
Make sure MongoDB is running on your system:

Local MongoDB: Start mongod service
MongoDB Atlas: Use your Atlas connection string in .env

Environment Variables
Create a .env file in the backend directory:

PORT =4000
DATABASE="mongodb+srv://georgeevangelin21:bookReview@bookreview.vkuutg7.mongodb.net/bookReview?retryWrites=true&w=majority&appName=bookReview"
SECRET_KEY="secretKey"

📚 Usage

Register/Login: Create an account or login with existing credentials
redirect to home page with explore button navigating to all books page
Browse Books: View all books on the all-books page (newest first)
Add Books: Authenticated users can add new books with cover images
View Book Details: Click on any book to see details and reviews
Add Reviews: Authenticated users can rate and review books (1-5 stars)

Key Features Implementation

Modular Architecture: Separate controllers, models, and validators for clean code organization
Custom Validators: Dedicated validation files (authValidator.js, bookValidator.js)
JWT Middleware: Custom JWT middleware (jwtMW.js) for route protection
Service Layer: Organized API services (allApi.js, commonApi.js, serverUrl.js)
Component Structure: Reusable components (Header, Footer, Preloader)
User Management: Dedicated user section with components and pages
Error Handling: Comprehensive error handling with PageNotFound component
Database Connection: Centralized database connection (dbConnection.js)
Route Management: Centralized routing (Routes.js)
password stored as hashed by BYCRPT 

Development Notes

JWT tokens are stored in localStorage on the frontend
All API routes are prefixed with /api
Passwords are hashed using bcryptjs
CORS is enabled for frontend-backend communication
Book cover images are stored as URLs (not file uploads)

Contributing

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.


## 📚 Book Management App Screenshots

---

### 🔑 Authentication



✨ **Landing Page**  
The main page of the app where users can navigate to login or register.  
[![Landing Page](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/Landingpage.png?raw=true)](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/Landingpage.png?raw=true)

🟢 **Register Page**  
New users can create an account here.  
[![Register Page](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/registerPage.png?raw=true)](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/registerPage.png?raw=true)

🔵 **Login Page**  
Existing users can log in.  
[![Login Page](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/loginPage.png?raw=true)](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/loginPage.png?raw=true)

▶️ **Login Button**  
Clickable button to initiate login.  
[![Login Button](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/loginButton.png?raw=true)](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/loginButton.png?raw=true)

🔴 **Logout Button**  
Button for users to log out securely.  
[![Logout Button](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/logoutButton.png?raw=true)](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/logoutButton.png?raw=true)

---

## 📖 Books Overview

📘 **View Books Page**  
Browse all available books.  
[![View Books Page](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/viewBookspage.png?raw=true)](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/viewBookspage.png?raw=true)

📙 **All Books Page**  
List of all books added to the system.  
[![All Books Page](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/allBooksPage.png?raw=true)](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/allBooksPage.png?raw=true)

---

## ✍️ Book Forms

➕ **Add Book Form**  
Form to add a new book to the collection.  
[![Add Book Form](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/addbookForm.png?raw=true)](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/addbookForm.png?raw=true)

🖊️ **Review Form**  
Form to add a review for a specific book.  
[![Review Form](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/reviewForm.png?raw=true)](https://github.com/Evangelin-philip/Book-Review-Board-App/blob/main/frontend/public/images/readMe/reviewForm.png?raw=true)

---




Available Assets
The project includes several pre-designed assets:
Landing page images (landing.png, landingImage.png)
Logo variants (logo-light.png, logo-dark.png, logo-bg.jpg)
Vite branding (vite.svg)

Deployment
Optional Deployment Options:

Frontend:  Vercel, or GitHub Pages
Backend: Render
Database: MongoDB Atlas (recommended for production)


Note: Remember to update your environment variables and database connections when deploying to production.

