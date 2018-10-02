import React from 'react';
import { Link } from 'react-router-dom';
import {headerStyles, buttonStyles} from './styles';

const RecipeNotFound = () => {
    return (
        <div>
           <h2 style = {headerStyles}>There is no recipe under such name.</h2>
           <Link to = "/recipes/new"> <button className = "btn btn-default" style = {buttonStyles}>Create new recipe!</button></Link>
           <Link to = "/recipes"><button type = "button" className = "btn btn-warning" style = {buttonStyles}>See existing recipes</button></Link> 
        </div>
    )
};

export default RecipeNotFound;