# Login Page - React Application

This project is a simple login page built using **React**, **TypeScript**, and **Prisma** for user authentication. It includes **Zod** for form validation and **React Hot Toast** for notifications.

## Features
- User login with email and password
- Form validation using Zod
- Toast notifications for user feedback
- API integration with a backend server

## Frontend Setup

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/loginpage.git
cd loginpage
```

### 2. Install Dependencies
Run the following command to install the required packages:
```sh
npm install
```

### 3. Install Required Libraries
Ensure the following libraries are installed:
```sh
npm install react-hot-toast @hookform/resolvers zod axios react-hook-form
```

### 4. Start the Frontend Server
```sh
npm start
```
Then, open [http://localhost:3000](http://localhost:3000) in your browser.

## Backend Setup (Authentication API)

### 1. Navigate to the Backend Folder
```sh
cd backend
```

### 2. Install Backend Dependencies
```sh
npm install
```

### 3. Set Up Prisma (If using a database)
```sh
npx prisma init
npx prisma migrate dev --name init
```

### 4. Start the Backend Server
```sh
nodemon index.js  # Install nodemon if not installed
```
By default, this will run on `http://localhost:5000/`.

## Troubleshooting
- **Toast notifications not working?** Make sure you have added `<Toaster />` inside your root component (e.g., `App.tsx`).
- **Form validation errors?** Check that you are using `zodResolver` correctly with `react-hook-form`.
- **API errors?** Verify that your backend server is running and returning valid responses.

## Deployment
To build the project for production, use:
```sh
npm run build
```

## Learn More
- [React Documentation](https://reactjs.org/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Zod Documentation](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [React Hot Toast](https://react-hot-toast.com/)

---
**Author:** Divyansh Gupta 
**License:** MIT  

