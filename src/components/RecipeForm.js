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
                <input type = "text" id = "title" style = {inputStyles} className = "form-control" value = {props.title} onChange = {props.handleChangeTitle} onInput = {props.handleChangeInput} />
            </div>
            <div className = "form-group" style = {formGroupStyles}>
                <label htmlFor = "ingredients">Ingredients:</label>
                <textarea type = "text"  id = "ingredients" style = {largeInputStyles}  className = "form-control" onChange = {props.handleChangeIngredients} value = {props.ingredients} onInput = {props.handleChangeInput}></textarea>
            </div>
            <div className = "form-group" style = {formGroupStyles}>
                <label htmlFor = "description">Description:</label>
                <textarea type = "text" id = "description" style = {largeInputStyles}  className = "form-control"  cols = "400" wrap = "hard" onChange = {props.handleChangeDescription} value = {props.description} onInput = {props.handleChangeInput}></textarea>
            </div>
            <Link to = {`/recipes/${props.id}`}><button type = "submit"  className = "btn btn-default" onClick = {props.handleSubmit}  style = {buttonStyles}>{props.button}</button></Link> 
            <Link to = "/recipes"><button type = "button" className = "btn btn-default" style = {buttonStyles}>Cancel</button></Link>
        </form>
    );
};

RecipeForm.propTypes = {
    header: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChangeImage: PropTypes.func.isRequired,
    handleChangeDescription: PropTypes.func.isRequired,
    handleChangeIngredients: PropTypes.func.isRequired,
    handleChangeTitle: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};
 

 