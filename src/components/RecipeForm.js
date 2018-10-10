import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {imageStyles, largeInputStyles, imageDivStyles, imageInputStyles, headerStyles, inputStyles, formGroupStyles, buttonStyles} from '../styles';

export const RecipeForm  = (props) => {

          return(
              <form>
              <h2 style = {headerStyles}>{props.header}</h2>
              <div style = {imageDivStyles}>
              <input  id = "input"type="file"  onChange={props.handleChangeImage}   style = {imageInputStyles} />
              <img id = "image"  src={props.image} style = {imageStyles} alt = "Recipe logo"/>
              </div>  
              <div className = "form-group" style = {formGroupStyles}>
              <label htmlFor = "title" >Title:</label>
              <div contentEditable id = "title" style = {inputStyles} className = "form-control" onChange = {props.handleChangeTitle}>{props.title}</div>
              </div>
              <div className = "form-group" style = {formGroupStyles}>
              <label htmlFor = "ingredients">Ingredients:</label>
              <div contentEditable  id = "ingredients" style = {largeInputStyles}  className = "form-control" onChange = {props.handleChangeIngredients}>{props.ingredients}</div>
              </div>
              <div className = "form-group" style = {formGroupStyles}>
              <label htmlFor = "description">Description:</label>
              <div contentEditable id = "description" style = {largeInputStyles}  className = "form-control"  cols = "400" wrap = "hard" onChange = {props.handleChangeDescription}>{props.description}</div>
              </div>
              <Link to = {`/recipes/${props.id}`}><button type = "submit"  className = "btn btn-default" onClick = {props.handleSubmit}  style = {buttonStyles}>{props.button}</button></Link> 
              <Link to = "/recipes"><button type = "button" className = "btn btn-default" style = {buttonStyles}>Cancel</button></Link>
              </form>
            )
}

RecipeForm.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  ingredients: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  handleChangeImage: PropTypes.func,
  handleChangeDescription: PropTypes.func,
  handleChangeIngredients: PropTypes.func,
  handleChangeTitle: PropTypes.func,
  handleSubmit: PropTypes.func,
}
 

 