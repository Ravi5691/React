------if i take a look in html file which is present in the public folder in there script tag is not use for connect js How ? ans is in package.json file a react-script is present which is doing its work for connect js script .
react is a single page application because our html file has a single div or a single page.
------React create a dom another than window so that we can change thing then applying on tag part of dom . 
ui apdation is control by react . we use hook for ui apdation .  
------createroot create a dom like structure behind the scene then campare it to the main dom then make changes accounding it at particular places.
in js html alway a opening tag has a closing tag. 
------onclick needed function . 
------ React has no concept of refresh the page only dom tree change so we use link tag in react rather than a tag ( a tag refresh the page ).



HOOKS :

1 - useState
2 - useCallback
3 - useEffect
4 - useRef
5 - useContext


add tailwind css :
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
@tailwind base;
@tailwind components;
@tailwind utilities;


Api : API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information.

For example, a web API allows your application to interact with a web server or another service over the internet. Here’s a basic rundown of how it works:

Endpoints: These are specific URLs that you can send requests to. Each endpoint corresponds to a particular function or resource.

Requests: When you want to interact with a web API, you send an HTTP request (such as GET, POST, PUT, or DELETE) to one of the API’s endpoints.

Responses: The server processes your request and sends back a response, often in a format like JSON or XML. This response contains the data or status information requested.

Authentication: Many APIs require authentication to ensure that only authorized users or applications can access certain data or functions. This could be done through API keys, OAuth tokens, or other methods.

For instance, if you’re using a weather API, you might send a request to an endpoint like https://api.weather.com/current?location=NewYork and get back a response with current weather conditions for New York City.

APIs are essential for modern web development because they allow different services and systems to interact seamlessly, enabling features like social media sharing, payment processing, data retrieval, and more.



