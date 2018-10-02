import React from '../../../../.cache/typescript/2.9/node_modules/@types/react';
import { Link } from '../../../../.cache/typescript/2.9/node_modules/@types/react-router-dom';
import {headerStyles, buttonStyles} from '../styles';

export const InfoAboutDelete = () => {
    return (
        <div>
           <h2 style = {headerStyles}>Recipe was deleted</h2>
           <Link to = "/recipes"><button type = "button" className = "btn btn-warning" style = {buttonStyles}>Back to recipes' list</button></Link> 
        </div>
    )
};