import EditDevice from '../../../components/EditDevice';
import {connect} from 'react-redux';
import {
  editDeviceRoom as editDevice,
  deleteDeviceRoom as deleteDevice,
} from '../../../actions/app/deviceRoom';

const mapStateToProps = state => {
  return {
    room: state.room.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editDevice: device => {
      dispatch(editDevice(device));
    },
    deleteDevice: (deviceId, roomId) => {
      dispatch(deleteDevice(deviceId, roomId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDevice);
