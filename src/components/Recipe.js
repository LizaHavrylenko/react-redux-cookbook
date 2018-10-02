import React from 'react';
import {Link} from 'react-router-dom';
import {headerStyles, imageStyles, buttonStyles, paragraphStyles} from '../styles';

export class  Recipe extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        console.log(this.props);
       return(
        <div>
        <h2 style = {headerStyles}>{this.props.title}</h2>
        <img alt = "Recipe logo" style = {imageStyles} src = {this.props.image}/>
        <p style = {paragraphStyles}>{this.props.ingredients}</p>
        <p style = {paragraphStyles}>{this.props.description}</p>
        <Link to  = {`/recipes/${this.props.id}/edit`}><button type = "button" className = "btn btn-default"  style = {buttonStyles}>Edit this recipe</button></Link>
        <Link to  = "/recipes"><button type = "button" className = "btn btn-default"  style = {buttonStyles}>Back to recipes</button></Link>
        </div> 
    )
    }
}
 