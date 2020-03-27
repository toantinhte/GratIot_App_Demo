import RemoteDevice from '../../../components/RemoteDevice';
import {connect} from 'react-redux';
import {editDevice} from '../../../actions/app/device';
import {addHistory} from '../../../actions/app/histories';
import {sendDataListAlarm} from '../../../actions/app/alarm';
import {sendDataEditDeviceInfo} from '../../../actions/app/deviceInfo';


const mapStateToProps = (state) => {
  return {
    device: state.device,
    deviceInfo:state.deviceInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      editDevice: (device) => {
          dispatch(editDevice(device))
      },
      addHistory : (history) => {
        dispatch(addHistory(history));
      },
      sendDataListAlarm: (deviceId)=>{
        dispatch(sendDataListAlarm(deviceId));
      },
      editDeviceInfo:(deviceInfo)=>{
        dispatch(sendDataEditDeviceInfo(deviceInfo));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoteDevice)


