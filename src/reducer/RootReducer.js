/**
 * Reducer
 */
let initialState = {
    details:[]
}

export default function RootReducer(state=initialState,action){
    switch(action.type){
        case 'submit':
            let arr=state.details;
            arr.push(action.data);
            return {
                ...state,
                details:arr
            }
        default:
            return {...state}
    }
}