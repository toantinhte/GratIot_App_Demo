import Home from '../../../components/Home';
import {connect} from 'react-redux';
import {sendData} from '../../../actions/app/deviceRoom';

const mapStateToProps = state => ({
  deviceRoom: state.deviceRoom,
});

const mapDispatchToProps = (dispatch) => {
  return {
    sendDataDeviceRoom: (roomId) => {
      dispatch(sendData(roomId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


