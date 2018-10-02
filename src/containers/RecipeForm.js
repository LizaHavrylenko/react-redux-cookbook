import React from 'react';
import {Link} from 'react-router-dom';
import {imageStyles, imageDivStyles, imageInputStyles, headerStyles, inputStyles, formGroupStyles, buttonStyles} from '../styles';

const RecipeForm  = (props) => {

return(
<form>
<h2 style = {headerStyles}>{props.header}</h2>
<div style = {imageDivStyles}>
<input  id = "input"type="file"  onChange={props.handleChangeImage}   style = {imageInputStyles} />
<img id = "image"  src={props.image} style = {imageStyles} alt = "Recipe logo"/>
</div>  
  <div className = "form-group" style = {formGroupStyles}>
    <label htmlFor = "title" >Title:</label>
     <input type = "text" id = "title" style = {inputStyles} className = "form-control"  value = {props.title} onChange = {props.handleChangeTitle} />
  </div>
  <div className = "form-group" style = {formGroupStyles}>
    <label htmlFor = "Ingredients">Ingredients:</label>
    <p contenteditable = "true"  type = "text" id = "Ingredients" style = {inputStyles}  className = "form-control"  onChange = {props.handleChangeIngredients}>{props.ingredients}</p>
  </div>
  <div className = "form-group" style = {formGroupStyles}>
    <label htmlFor = "description">Description:</label>
    <p contenteditable = "true"  type = "text" id = "description" style = {inputStyles}  className = "form-control"  cols = "400" wrap = "hard" onChange = {props.handleChangeDescription}>{props.description}</p>
  </div>
  <Link to = {`/recipes/${props.title}`}><button type = "submit"  className = "btn btn-default" onClick = {props.handleSubmit}  style = {buttonStyles}>Add</button></Link> 
  <Link to = "/recipes"><button type = "button" className = "btn btn-default" style = {buttonStyles}>Cancel</button></Link>
</form>
)
}
 export default RecipeForm;

 