import {STARTAUTH, SUCCESSAUTH, ERRORAUTH} from '../../types/auth/auth';

const nameInitialState = {
  error: null,
  loading: false,
  data: null,
};
export default authReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case STARTAUTH:
      return {...state, loading:true, error:null};
    case SUCCESSAUTH:
      return {...state, loading:false, data:action.data};
    case ERRORAUTH:
        return {...state, loading:false, error:action.error}
    default:
      return state;
  }
};
