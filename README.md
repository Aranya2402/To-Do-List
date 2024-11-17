A dynamic and visually appealing To-Do List web application built using the MERN stack and Material-UI

npm Version 10.5.2

01)Features 
  
  1.Add new tasks with titles and descriptions.
 
  2.Edit existing tasks.
  
  3.Mark tasks as completed or uncompleted.
  
  4.Delete tasks.
  
  5.Search and filter tasks.



02)Development Tools 
  
  1.VS Code
  
  2.Postman 


03)Frontend  (Host 3000)
    
     1. Navigate to frontend directory cd todo-frontend
     
     2. Install dependencies and Run frontend
            
             npm install
             
             npm start 

   04)Backend (Host 5000)          
     
      1.Install dependencies and Run backend
            Create a .env file in the config/ directory and add:

                         PORT=5000
                         
                         DB_LOCAL_URI=mongodb://127.0.0.1:27017/ToDoList
            
             npm install
            
             node ./server/server.js

  05) API Endpoints 
     
      1. POST /api/tasks - Add a new task.
      
      2. GET /api/tasks - Retrieve all tasks.
      
      3. PATCH /api/tasks/:id - Update task completion status.
      
      4. PUT /api/tasks/:id - Edit task title and description.
      
      5. DELETE /api/tasks/:id - Delete a task
