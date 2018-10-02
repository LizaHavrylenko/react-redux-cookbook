import React from '../../../../.cache/typescript/2.9/node_modules/@types/react';
import ViewRecipe from '../ViewRecipe';
import EditRecipe from '../EditRecipe';
import {Route, Switch} from '../../../../.cache/typescript/2.9/node_modules/@types/react-router-dom';
 
export const RecipeRouter = () => {
    return(
        <Switch>
            <Route exact path = "/recipes/:id"  render = {(routeProps) => 
               (<ViewRecipe {...routeProps} id = {routeProps.match.params.id} />)}/>
            <Route path = "/recipes/:id/edit" render = {(routeProps) => (<EditRecipe {...routeProps} id = {routeProps.match.params.id} />)} />
        </Switch>
    )
}