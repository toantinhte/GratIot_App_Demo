import {STARTAPP, SUCCESSAPP, ERRORAPP,SIGNEDAPP, SAVEINFOAPP, LOGOUTAPP} from '../../types/app/status';

const initState = {
    error:null,
    isLoading:true,
    infoUser:null,
    isSigned:false,
};

export default statusReducer = (state = initState, action) => {
  switch (action.type) {
    case STARTAPP:
      return {...state, isLoading:true, error:null};
    case SUCCESSAPP:
      return {...state, isLoading:true};
    case SAVEINFOAPP:
        return {...state,isLoading:true, infoUser:action.infoUser};
    case SIGNEDAPP:
      return {...state, isLoading:false,isSigned:true};
    case ERRORAPP:
      return {...state,error:action.error, isLoading:false};
    case LOGOUTAPP:
      return {...initState};
    default:
      return state;
  }
};


