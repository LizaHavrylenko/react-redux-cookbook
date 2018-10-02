import React from 'react';
import { Link } from 'react-router-dom';
import {recipesContainerStyles, recipeTitleStyles} from './styles';
import {connect} from 'react-redux';


class ConnectedList extends React.Component{
  render(){
    return(
      <div className = "recipesContainer" style = {recipesContainerStyles}>
        {this.props.titles.map(title =>
        <Link to = {`/recipes/${title}`} key = {title} ><h2 style = {recipeTitleStyles}>{title}</h2></Link>)}
      </div>
  )
}
}
  
  const mapStateToProps = state => {
    return { titles: state.recipesByID };
  };
  const RecipesList = connect(mapStateToProps)(ConnectedList);


  export default RecipesList;