1. Create a new React App
    - Open terminal and enter the command line:
        npx create-react-app name-project
        cd name-project
        npm start -> Run Project
    - Create folder Component have 3 Component:
        Todo.js
        TodoForm.js -> parent of Todo
        TodoList.js -> parent of TodoForm
    - Import and using TodoList in App.js
2. Using Material UI Icons
    - Open terminal and enter the command line:
        npm install @material-ui/core
        npm install @material-ui/icons
    - Link Roboto Font in file index.html with command under:
        link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" 
    - Link Font Icons in file index.html with command under:
        link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" 
3. Deploy to Netlify
    - Open terminal and run command: 
        + npm install netlify-cli -g
        + netlify deploy
    - Browser open new window and click Authorize
    - Command Line Prompts
        + Click Create & configure a new site
        + Enter the site a name.
        + Specify our project's build directory which contains the assets for deployment.
        + Our site will get created and will be deployed with URL.
