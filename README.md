To-Do List Web Application (MERN Stack + Material-UI)
npm Version
10.5.2
Features
Add New Tasks: Add tasks with titles and descriptions.
Edit Existing Tasks: Modify task titles and descriptions.
Mark Tasks as Completed/Uncompleted: Track task completion status.
Delete Tasks: Remove tasks from the list.
Search and Filter Tasks: Easily search for tasks by title and filter by completion status.
Development Tools
VS Code - Code editor used for development.
Postman - API testing tool for backend endpoints.
Frontend (Host: 3000)
Steps to Run the Frontend:
Navigate to the frontend directory:
bash
Copy code
cd todo-frontend
Install dependencies:
bash
Copy code
npm install
Run the frontend:
bash
Copy code
npm start
Backend (Host: 5000)
Steps to Run the Backend:
Install backend dependencies:
bash
Copy code
npm install
Run the backend server:
bash
Copy code
node ./server/server.js
API Endpoints
POST /api/tasks - Add a new task.
GET /api/tasks - Retrieve all tasks.
PATCH /api/tasks/
- Update task completion status (mark as completed or uncompleted).
PUT /api/tasks/
- Edit task title and description.
DELETE /api/tasks/
- Delete a task.
