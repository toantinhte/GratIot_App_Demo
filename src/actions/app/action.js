import {
  STARTACTION,
  SUCCESSACTION,
  ERRORACTION,
  ADDLISTACTION,
  DEFAULTACTION
} from '../../types/app/action';
import {on, emit} from '../../socket';
const start = () => ({
  type: STARTACTION,
});

const success = () => ({
  type: SUCCESSACTION,
});

const error = error => ({
  type: ERRORACTION,
  error: error,
});

const addList = listAction => ({
  type: ADDLISTACTION,
  listAction: listAction,
});

const defaultAction = ()=>({
  type:DEFAULTACTION,
})

export const sendDataListAction= () => {
  try {
    return async dispatch => {
      emit('listActions');
    };
  } catch (err) {
    console.log(err);
  }
};

export default addListAction = () => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      on('listActions', async response => {
        console.log(response);
        if (response) {
          if (JSON.parse(response).status == 'success') {
              await dispatch(addList(JSON.parse(response).result));
          }
          if (response.status == 'fail') {
            await dispatch(error(JSON.parse(response).error));
          }
          await dispatch(success());
        } else {
          await dispatch(error('Request bad'));
        }
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const resetAction= ()=>{
  try {
    return async dispatch => {
      await dispatch(start());
      await dispatch(defaultAction());
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
}