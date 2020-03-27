import ActionDetailt from '../../../components/ActionDetail';
import {connect} from 'react-redux';
import {sendDataEditDeviceInfo} from '../../../actions/app/deviceInfo';

const mapStateToProps = state => ({
    listActions:state.action.data,
    deviceInfo:state.deviceInfo,
});

const mapDispatchToProps = (dispatch) => {
    return {
        editDeviceInfo: (deviceInfo) => {
            dispatch(sendDataEditDeviceInfo(deviceInfo))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ActionDetailt)