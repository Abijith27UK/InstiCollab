# InstiCollab

InstiCollab is a seamless, integrated platform designed to enhance productivity and collaboration for remote teams. It is a collaborative task management application designed to help users organize and manage their tasks efficiently. It features user authentication, group chatting , task creation, and categorization of tasks based on their importance and completion status. 

### **For login, use the following credentials:**
#### **Username: DhetUK**
#### **Password: abcdefg**
#### **We have preloaded some dummy tasks. If you sign up with a new account, you'll need to manually add tasks from the beginning.**


## Features

- User authentication (signup and login)
- Create, update, and delete tasks
- Can mention important tasks with the heart
- Mark tasks as completed or incomplete
- View tasks by different categories (All, Important, Completed, Incompleted)
- Group chat functionality (in development)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Abijith27UK/Insti_Collab.git
   cd Insti_Collab
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the backend directory and add your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the application.

### Tech stacks used
1. Frontend:
- React.js (v18.3.1)
- React Router (v6.26.2) for navigation
- Redux Toolkit for state management
- Axios for HTTP requests
- Tailwind CSS for styling
- React Icons for UI icons

2. Backend:
- Node.js
- Express.js (v4.21.0) as the web framework
- MongoDB as the database
- Mongoose (v8.6.2) for object modeling
- JSON Web Tokens (jsonwebtoken) for authentication
- bcrypt.js for password hashing
- dotenv for environment variable management
- cors for handling Cross-Origin Resource Sharing
