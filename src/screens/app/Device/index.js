import ListDevice from '../../../components/listDevice';
import {connect} from 'react-redux';
import {editDevice, sendDataListDevice, refreshDevice} from '../../../actions/app/device';
import {addHistory} from '../../../actions/app/histories';


const mapStateToProps = (state) => {
  return {
    device: state.device,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      editDevice: (device) => {
          dispatch(editDevice(device));
      },
      addHistory : (history)=>{
        dispatch(addHistory(history));
      },
      sendDataListDevice: (page) => {
        dispatch(sendDataListDevice(page));
      },
      refreshDevice: ()=>{
        dispatch(refreshDevice());
      }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDevice)


