import * as constants from './RecipesConstants';
 

export const initialState = {
    recipesByID: [],
    recipesByHash: {
          /*   'Lazagna': {
                id :'Lazagna',
                title : 'Lazagna',
                description : 'food',

        }, */
    }    
    }

const cookbookApp = (state = initialState, action) =>{
         switch(action.type){
             
            case constants.ADD_RECIPE:
                return {
                   recipesByID: [...state.recipesByID, action.id],
                   recipesByHash: {...state.recipesByHash, [action.id] : action.payload}  
                } 
            case constants.UPDATE_RECIPE:
              return  {
                  recipesByID: [ ...state.recipesByID],
                  recipesByHash: Object.assign({}, state.recipesByHash, {[action.id] : action.payload })
                }
            case constants.DELETE_RECIPE:
                const filteredIDs = state.recipesByID.filter((item) =>{
                    return item !== action.id;
                })
                 const {[action.id]: deletedValue, ...newStateRecipesByHash } = state.recipesByHash;
                return {
                    recipesByID: filteredIDs,
                    recipesByHash: newStateRecipesByHash   
                }
            default :
			    return state
         }
}

 

 

export default cookbookApp;
//inspired by https://hackernoon.com/redux-patterns-add-edit-remove-objects-in-an-array-6ee70cab2456