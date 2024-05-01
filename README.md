# MERN Inventory Management

This is a inventory management app built using React JS and Node JS.
The app allows :

- User can signin/signup
- Forget password using otp verification
- User can create brand, category.
- Create and manage customers, suppliers
- Create product, purchase and return product
- Generate sales, return report etc.

## technologies:

- [Node.js](https://nodejs.org/en/) - The JavaScript runtime used
- [Express](https://expressjs.com/) - The web framework used
- [React](https://reactjs.org/) - The JavaScript library used
- [MongooDB](https://www.mongodb.com/) - The database used
- [JEST](https://jestjs.io/) - The testing framework used
- [Nodemon](https://nodemon.io/) - The development dependency used to automatically restart the server on file changes

## Getting Started

- [Front-end](https://github.com/tajul-islam-refath/inventory-mern-frontend)
- [Back-end](https://github.com/tajul-islam-refath/inventory-mern-backend)

### Prerequisites

- Node JS
- React JS
- NPM
- MongoDB
- JEST
- Git

### Installation

Clone the repository

```bash
git clone git@github.com:tajul-islam-refath/inventory-mern-backend.git
```

Change directory to the project root

```bash
cd inventory-mern-backend
```

create environment variable file from example file

```bash
cp .env.example

DB_USER = your mongodb database username
DB_PASS = your mongodb database password

my_email= email using for sending otp
email_password= email password

```

Start the app

```bash
npm run server
```

Run test script

```
 npm run test
```

This means the app is ready to be used.

The app REST API will be available at http://localhost:5050/api/v1/

The Postman documation will be available [here](https://documenter.getpostman.com/view/22821036/2s935hS7uk)

#### Base URL for the API `http://localhost:5050/api/v1/`

# Conclusion

Thanks for reading this documentation. If you have any questions, feel free to reach out to me at [tajul16-447@diu.edu.bd]
