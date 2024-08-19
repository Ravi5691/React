 we use diffent package in this project so check the package.json file dependencies . 
 Environment Variables : these are dynamic values that can affect the behavior of running processes on an operating syatem . They are used to store configuration setting and other important information that can be accessed by software programs . 
 whenever we create a environment variable we should keep in the root of project just like the readme file or package.json. 
 File name of environment variables is {.env} (.) is important. 
 We should not send the env file in git or other platform.
 When we create a environment in .env file we should name variable by REACT_APP_{name}.
 for process the env file variable we go to our app.jsx file then write process.env.REACT_APP_{name}. 
 But it is different in case of vite or other tool provider we change the variable name by VITE_{name} & for excess we use import.meta.env.VITE_{name}.
 Services : In this project we use appwrite a backendservice provider if in future we want to moveout this project from project then the services use through the appwrite is create problems so decrease this problems we create a class services so that project run on other backend service provider or the provider we created . 
 