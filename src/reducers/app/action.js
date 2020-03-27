import {STARTACTION, ERRORACTION, SUCCESSACTION, ADDLISTACTION, DEFAULTACTION} from '../../types/app/action';

const nameInitialState = {
    error:null,
    loading:false,
    data:null
}
export default actionReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case STARTACTION:
            return {...state, loading:true, error:null}
        case ERRORACTION:
            return {...state, loading:false, error: action.error}
        case ADDLISTACTION:
            return {...state, loading:true, data:action.listAction}
        case SUCCESSACTION:
            return {...state, loading:false}
        case DEFAULTACTION:
            return {...state, loading:false, error:null, data:null};
        default:
            return state
    }
}