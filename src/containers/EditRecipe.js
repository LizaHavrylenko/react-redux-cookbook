import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';  
import {updateRecipe, deleteRecipe} from '../actions/RecipesActions';
import {RecipeForm} from '../components/RecipeForm';
import {RecipeNotFound} from '../components/RecipeNotFound';
import PropTypes from 'prop-types';
 

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
        const { title, ingredients, description, image} = this.state;
        if(this.state.title === 'There is no recipe under such name'){
            return(
                 <RecipeNotFound header = {this.state.title} />
        );
        }
        else{
        return(
            <div>
                <RecipeForm 
                handleChangeImage = {this.handleChangeImage}
                handleChangeDescription = {this.handleChangeDescription}
                handleChangeIngredients = {this.handleChangeIngredients}
                handleChangeTitle = {this.handleChangeTitle}
                handleSubmit = {this.handleSubmit}
                image = {image}
                title  = {title}
                description = {description}
                ingredients =  {ingredients}
                header = "Edit Recipe"
                button = "Save"
                />
                <Link to = "/recipes/deleted"> <button type = "button" className = "btn btn-danger" onClick = {this.deleteRecipe} style = {{width: '150px'}} >Delete this recipe</button></Link>
            </div>
        )
    }
    }
}

EditRecipe.propTypes = {
    id: PropTypes.string,
    recipe: PropTypes.object, 
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


