
let initialState = {
    allRecipes: [],
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_RECIPES": 
            return {
                ...state,
                allRecipes: action.payload
            }
            default: 
                return state;
    }
}

export default rootReducer;

// La propiedad payload generalmente se usa para contener los datos o 
// información relevantes que se están enviando desde la acción al reductor.