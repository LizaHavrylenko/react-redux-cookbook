import React from 'react';
import {storage} from './App';
import {IntroToCookbook} from './IntroToCookbook';
import RecipesList from './RecipesList';
 
 
 export const MainPage = () => {   
      if(!('recipesKeys' in storage)){
        storage.setItem('recipesKeys', '');
        return(
          <IntroToCookbook/>
        )
      }
      else{
        return(
          <div>
          <IntroToCookbook />
          <RecipesList />
          </div>
        )
      }         
 }