import React from '../../../../.cache/typescript/2.9/node_modules/@types/react';
import {headerStyles, imageStyles, buttonStyles, paragraphStyles} from './styles';
import { Link} from '../../../../.cache/typescript/2.9/node_modules/@types/react-router-dom';
import {connect} from '../../../../.cache/typescript/2.9/node_modules/@types/react-redux';
 
        
class ConnectedRecipe extends React.Component{
    constructor(props,recipe){
        super(props, recipe);
        this.state = {
            title:  '',
            ingredients:  '',
            description:  '',
            image:  '',  
        }
    }
    
    componentDidMount(){
        this.setState({
            title: this.props.recipe.title,
            ingredients: this.props.recipe.ingredients,
            description: this.props.recipe.description,
            image: this.props.recipe.image,
        });  
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
            const id = this.props.match.params.id;
            return(
                <div>
                <h2 style = {headerStyles}>{this.state.title}</h2>
                <img alt = "Recipe logo" style = {imageStyles} src = {this.state.image}/>
                <p style = {paragraphStyles}>{this.state.ingredients}</p>
                <p style = {paragraphStyles}>{this.state.description}</p>
                <Link to  = {`/recipes/${id}/edit`}><button type = "button" className = "btn btn-default"  style = {buttonStyles}>Edit this recipe</button></Link>
                <Link to  = "/recipes"><button type = "button" className = "btn btn-default"  style = {buttonStyles}>Back to recipes</button></Link>
               </div>  
            ); 
        }
    }
}

const mapStateToProps = (state, ownProps) => {
     
    console.log(state);
    if(state.recipesByID.includes(ownProps.id)){
    return { recipe: state.recipesByHash[ownProps.id] };
    }
    return { recipe: {title:'There is no recipe under such name', image: null, ingredients:'', description: ''}};
    
  };
const ViewRecipe = connect(mapStateToProps)(ConnectedRecipe);
export default ViewRecipe; 