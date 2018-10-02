 import React from '../../../../.cache/typescript/2.9/node_modules/@types/react';
import { Link } from '../../../../.cache/typescript/2.9/node_modules/@types/react-router-dom';
import {headerStyles,imageStyles, buttonStyles} from '../styles';
 

export const IntroToCookbook = () =>{
    return(
    <div>
    <h1 style = {headerStyles}>Italian Cuisine Cookbook</h1>
      <img src = "http://www.astreamideast.ae/wp-content/uploads/2015/10/image_preview.jpg" alt = "Cookbook logo" style = {imageStyles}/><br/>
      <Link to = "/recipes/new"> <button className = "btn btn-default" style = {buttonStyles}>Add new recipe!</button></Link>
    </div>
    )
  }