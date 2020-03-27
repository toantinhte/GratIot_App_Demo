import {
  STARTHISTORY,
  SUCCESSHISTORY,
  ERRORHISTORY,
  ADDLISTHISTORIES,
  ADDHISTORY,
  EDITHISTORY,
  DELETEHISTORY,
} from '../../types/app/histories';

const start = () => ({
  type: STARTHISTORY,
});

const success = () => ({
  type: SUCCESSHISTORY,
});

const error = error => ({
  type: ERRORHISTORY,
  error: error,
});

const add = history => ({
  type: ADDHISTORY,
  history: history,
});

const addList = listhistories => ({
  type: ADDLISTHISTORIES,
  histoies: listhistories,
});
const edit = history => ({
  type: EDITHISTORY,
  history: history,
});

const del = historyId => ({
  type: DELETEHISTORY,
  historyId: historyId,
});
export const addListHistoies= page => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      on('history', async response => {
        if (response) {
          if (response.status == 'success') {
            await dispatch(addList(listhistories));
          }
          if (response.status == 'fail') {
            await dispatch(error(response.message));
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

export const addHistory = history => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      // emit('addHISTORY',{...HISTORY});
      //if resposne return
      await dispatch(add(history));
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};

export const editHistory = history => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      // emit('editHISTORY',{...HISTORY});
      //if resposne return
      await dispatch(edit(history));
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};

export const deleteHistory = historyId => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      // emit('delHISTORY',HISTORYId:HISTORYId});
      //if resposne return
      await dispatch(del(historyId));
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};
