import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux'; 
import {addRecipe} from '../actions/RecipesActions';
import {RecipeForm} from '../components/RecipeForm';


class AddConnectedRecipe extends React.Component{
     constructor(){
         super();
         this.state = {
             title: "",
             ingredients: "",
             description: "",
             image: ""    
         }
         this.handleChangeTitle = this.handleChangeTitle.bind(this);
         this.handleChangeDescription = this.handleChangeDescription.bind(this);
         this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
         this.handleChangeImage = this.handleChangeImage.bind(this);   
         this.handleSubmit = this.handleSubmit.bind(this);   
     }
     

    handleChangeTitle(event){
         this.setState({
             title: event.target.value 
         });
     }
    handleChangeDescription(event){
        this.setState({
            description: event.target.value
        });
    }
    handleChangeIngredients(event){
        this.setState({
            ingredients: event.target.value
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
    
    handleSubmit(){
       const { title, ingredients, description, image } = this.state;   
       const id = title;
       console.log({title:title, ingredients:ingredients, description:description, image:image, id:id });
       this.props.addRecipe({title:title, ingredients:ingredients, description:description, image:image, id:id });
       
    }

    render(){ 
        const { title, ingredients, description, image} = this.state;
        return(
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
            header = "New Recipe"
            button = "Add"
            />
        );
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
      addRecipe: recipe => {dispatch(addRecipe(recipe))
    }
    };
  };
 const AddRecipe =  connect(null, mapDispatchToProps)(AddConnectedRecipe);

export default withRouter(AddRecipe);
