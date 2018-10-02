import React from 'react';
import {imageStyles, imageDivStyles, imageInputStyles, headerStyles, inputStyles, formGroupStyles, buttonStyles} from '../styles';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';  
import {updateRecipe, deleteRecipe} from '../actions/RecipesActions';
 

class EditConnectedRecipe extends React.Component{
    constructor(props, recipe){
        super(props, recipe);
        this.state = {
            title: this.props.recipe.title,
            ingredients:  this.props.recipe.ingredients, 
            description: this.props.recipe.description,
            image:this.props.recipe.image,
    }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.updateRecipe = this.updateRecipe.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    handleChangeTitle(event){
        this.setState({
            title: event.target.value 
        });
    }
    handleChangeIngredients(event){
        this.setState({
            ingredients: event.target.value 
        });
    }
    handleChangeDescription(event){
       this.setState({
           description: event.target.value
       });
   }
    handleChangeImage(event) {
        let file = event.target.files[0];
        let reader = new FileReader(); 
        reader.readAsDataURL(file);   
        reader.onload = () => { 
        let result = reader.result;
        this.setState({
        image: result,
    })     
    }
    }
    updateRecipe(){
        const { title, ingredients, description, image } = this.state;   
        const id = this.props.match.params.id;
        this.props.updateRecipe({title:title, ingredients:ingredients, description:description, image:image, id:id });
        alert(`Recipe ${this.props.match.params.id} was updated`);
    }
    deleteRecipe(){
        const id = this.props.match.params.id;
        this.props.deleteRecipe(id);
    } 
    render(){
        if(this.state.title === 'There is no recipe under such name'){
            return(
                <div>
                <h2 style = {headerStyles}>{this.state.title}</h2>
                <Link to = "/recipes"><button type = "button" className = "btn btn-warning" style = {buttonStyles}>See existing recipes</button></Link> 
                <Link to = "/recipes/new"> <button className = "btn btn-default" style = {buttonStyles}>Add new recipe!</button></Link>
                </div>
        );
        }
        else{
        return(
            <div>
            <form action = "#">
            <h2 style = {headerStyles}>Edit Recipe</h2>
            <div style = {imageDivStyles}>
            <input type="file" onChange={this.handleChangeImage} value = {this.state.file} style = {imageInputStyles} />
            <img src={this.state.image} style = {imageStyles} alt = "Recipe logo"/>
            </div> 
              <div className = "form-group" style = {formGroupStyles}>
                <label htmlFor = "title" >Title:</label>
                 <input type = "text" id = "title" style = {inputStyles} className = "form-control"  value = {this.state.title} onChange = {this.handleChangeTitle} />
              </div>
              <div className = "form-group" style = {formGroupStyles}>
                <label htmlFor = "ingredients">Ingredients:</label>
                <p  contenteditable = "true" type = "text" id = "ingredients" style = {inputStyles}  className = "form-control" onChange = {this.handleChangeIngredients}>{this.state.ingredients}</p>
              </div>
              <div className = "form-group" style = {formGroupStyles}>
                <label htmlFor = "description">Description:</label>
                < p contenteditable = "true" type = "text" id = "description" style =  {inputStyles}  className = "form-control" cols = "400" wrap = "hard" onChange = {this.handleChangeDescription}>{this.state.description}</p>
              </div>
              <Link to = {`/recipes/${this.props.match.params.id}`}><button type = "button" onClick = {this.updateRecipe}  className = "btn btn-default" style = {buttonStyles}>Save</button></Link>
              <Link to = {`/recipes/${this.props.match.params.id}`}><button type = "button" className = "btn btn-default" style = {buttonStyles}>Cancel</button></Link><br/>
              <Link to = "/recipes/deleted"> <button type = "button" className = "btn btn-danger" onClick = {this.deleteRecipe} style = {{width: '150px'}} >Delete this recipe</button></Link>
            </form>
        </div>
        )
    }
    }
}

const mapStateToProps = (state, ownProps) => {
     
    if(state.recipesByID.includes(ownProps.id)){
        return { recipe: state.recipesByHash[ownProps.id] };
        }
        return { recipe: {title:'There is no recipe under such name', image: null, ingredients:'', description: ''}};
        
     
  }; 
const mapDispatchToProps = dispatch => {
    return {
      updateRecipe: recipe => dispatch(updateRecipe(recipe)),
      deleteRecipe: id => dispatch(deleteRecipe(id)) 
    };
  };
const EditRecipe =  connect(mapStateToProps, mapDispatchToProps)(EditConnectedRecipe);
export default EditRecipe;