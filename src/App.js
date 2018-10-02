 import React, { Component } from 'react';
import {containerStyles} from './styles';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
 
import {MainPage} from './MainPage';
import AddRecipe from './AddRecipe';
import {RecipeRouter} from './RecipeRouter'; 
import {InfoAboutDelete} from './InfoAboutDelete';
 
export const storage = window.localStorage;
 
 

class App extends Component {

  render() {
    return (
      <div className="App" style = {containerStyles} >
        <Router>
         <Switch>
         <Route exact path = "/" render = {() =><Redirect to = 'recipes'/>} /> 
         <Route exact path  = "/recipes" component = {MainPage}/>
         <Route exact path = "/recipes/new" component = {AddRecipe}/>
         <Route exact path  = "/recipes/deleted" component = {InfoAboutDelete}/>   
         <Route path = "/recipes/:id" component = {RecipeRouter} />
         </Switch> 
        </Router>    
      </div>
    );
  }
}

export default App;
