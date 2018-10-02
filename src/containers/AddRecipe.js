import React from '../../../../.cache/typescript/2.9/node_modules/@types/react';
import {Link} from '../../../../.cache/typescript/2.9/node_modules/@types/react-router-dom';
import {withRouter} from '../../../../.cache/typescript/2.9/node_modules/@types/react-router';
import {imageStyles, imageDivStyles, imageInputStyles, headerStyles, inputStyles, formGroupStyles, buttonStyles} from './styles';
import {connect} from '../../../../.cache/typescript/2.9/node_modules/@types/react-redux'; 
import {addRecipe} from './actions/RecipesActions';

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
        <div>
            <form action = "#">
            <h2 style = {headerStyles}>New Recipe</h2>
            <div style = {imageDivStyles}>
            <input  id = "input"type="file"  onChange={this.handleChangeImage}   style = {imageInputStyles} />
            <img id = "image"  src={image} style = {imageStyles} alt = "Recipe logo"/>
            </div>  
              <div className = "form-group" style = {formGroupStyles}>
                <label htmlFor = "title" >Title:</label>
                 <input type = "text" id = "title" style = {inputStyles} className = "form-control"  value = {title} onChange = {this.handleChangeTitle} />
              </div>
              <div className = "form-group" style = {formGroupStyles}>
                <label htmlFor = "Ingredients">Ingredients:</label>
                <p contenteditable = "true"  type = "text" id = "Ingredients" style = {inputStyles}  className = "form-control"  onChange = {this.handleChangeIngredients}>{ingredients}</p>
              </div>
              <div className = "form-group" style = {formGroupStyles}>
                <label htmlFor = "description">Description:</label>
                <p contenteditable = "true"  type = "text" id = "description" style = {inputStyles}  className = "form-control"  cols = "400" wrap = "hard" onChange = {this.handleChangeDescription}>{description}</p>
              </div>
              <Link to = {`/recipes/${this.state.title}`}><button type = "submit"  className = "btn btn-default" onClick = {this.handleSubmit}  style = {buttonStyles}>Add</button></Link> 
              <Link to = "/recipes"><button type = "button" className = "btn btn-default" style = {buttonStyles}>Cancel</button></Link>
            </form>
        </div>
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
