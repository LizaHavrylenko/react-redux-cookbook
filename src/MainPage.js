import React from '../../../../.cache/typescript/2.9/node_modules/@types/react';
import {IntroToCookbook} from './IntroToCookbook';
import RecipesList from '../RecipesList';
 
 
 export const MainPage = () => {    
        return(
          <div>
          <IntroToCookbook />
          <RecipesList />
          </div>
        )         
 }