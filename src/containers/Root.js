import React from '../../../../.cache/typescript/2.9/node_modules/@types/react';
import App from './App';
import { Provider } from '../../../../.cache/typescript/2.9/node_modules/@types/react-redux';

const Root = ({store}) =>{
    return(
        <Provider store={store}>
             <App />
        </Provider>
    )
}

export default Root;

