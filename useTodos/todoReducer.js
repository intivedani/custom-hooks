
export const todoReducer = ( initialState = [], action ) => {

        switch (action.type) {
            case '[TODO] Add Todo':
                return [ ...initialState, action.payload ];

            case '[TODO] Remove Todo':
                return initialState.filter( todo => todo.id !== action.payload ); //me retorna un nuevo arreglo
            
            case '[TODO] Toggle Todo':
                return initialState.map( todo => {

                    if ( todo.id === action.payload ) { //en el payload, viene el id
                        return {
                            ...todo,
                            done: !todo.done // es lo opuesto, si venia en false, ahora será un true
                        }
                    }

                    return todo
                });

            default:
                return initialState
        }
}
