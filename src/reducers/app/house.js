import {
  ADDHOUSE,
  EDITHOUSE,
  DELETEHOUSE,
  STARTHOUSE,
  SUCCESSHOUSE,
  ERRORHOUSE,
  SELECTEDHOUSE,
  DEFAULTHOUSE,
  ADDLISTHOUSE
} from '../../types/app/house';

const nameInitialState = {
  error: null,
  loading: false,
  houseIsSelected: 0,
  data: [],
};
export default houseReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case STARTHOUSE:
      return {...state, loading: true};
    case ERRORHOUSE:
      return {...state, loading: false, error: action.error};
    case SUCCESSHOUSE:
      return {...state, loading: false, error: null};
    case SELECTEDHOUSE:
      return {
        ...state,
        loading: false,
        error: null,
        houseIsSelected: action.houseId,
      };
    case ADDHOUSE:
      return {...state, data: [...state.data, action.house]};
    case ADDLISTHOUSE:
      return {...state, data: [...state.data, ...action.listHouse]};
    case EDITHOUSE:
      const newData1 = state.data.map(house => {
        if (house.id == action.house.id) return {...house, ...action.house};
        return house;
      });
      return {...state, data: newData1};
    case DELETEHOUSE:
      const newData2 = state.data.filter(house => {
        return house.id != action.houseId;
      });
      return {...state, data: newData2};
    case DEFAULTHOUSE:
      return {...state, error:null, loading:false, data:null};
    default:
      return state;
  }
};
