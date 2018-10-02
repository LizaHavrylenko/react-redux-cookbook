import React from 'react';
import { Link } from 'react-router-dom';
import {headerStyles, buttonStyles} from './styles';

export const InfoAboutUpdate = () => {
    return (
        <div className = "container">
           <h2 style = {headerStyles}>Recipe was updated</h2>
           <Link to = "/recipes"><button type = "button" className = "btn btn-warning" style = {buttonStyles}>Back to recipes' list</button></Link> 
        </div>
    )
};