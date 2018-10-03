import React from 'react';
import {connect} from 'react-redux';
import {RecipeNotFound} from '../components/RecipeNotFound';
import {Recipe} from '../components/Recipe';
import PropTypes from 'prop-types';
 
        
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
                <RecipeNotFound header = {this.state.title} />
        );
        }
        else{
            return(
                <Recipe 
                image = {this.state.image}
                title  = {this.state.title}
                description = {this.state.description}
                ingredients =  {this.state.ingredients}
                id = {this.props.match.params.id}
                />
            ); 
        }
    }
}


ConnectedRecipe.propTypes = {
    id: PropTypes.string.isRequired,
    recipe: PropTypes.object.isRequired, 
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