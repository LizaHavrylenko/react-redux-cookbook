# Cookbook Application
 
### Installation
 
 1 - Clone the project(https://github.com/LizaHavrylenko/react-redux-cookbook.git)
 ```sh
$ mkdir cookbook-app
$ cd cookbook-app
$ git clone https://github.com/LizaHavrylenko/react-redux-cookbook.git  
```
2 - Install dependencies via [npm](https://www.npmjs.com)
```sh
$ npm install
```
3 - Run the app
```sh
$ npm start
```
Go to [http://localhost:3000/](http://localhost:3000/#/) and see the app running
You can also see it live on [Heroku](https://react-redux-cookbook.herokuapp.com)

---
### Usage
when you first open the application there will alredy be three default recipes put in the store. Data preservation in the app is managed with the help of Redux store that benefits from the persisted state communicated to it by the localStorage of the browser. When you open the app in your browser for the first time, three default recipes will be immediately saved in its Storage.  Feel free to add, edit, and delete further recipes from the app as you like. 

---
### Architecture
##### General description
Application is written using React.js framework, Redux for global state management, and Bootstrap for layout. 

Technologies used:
  - [react-router](https://github.com/rackt/react-router) library for routing
  
##### Structure  



 
 
