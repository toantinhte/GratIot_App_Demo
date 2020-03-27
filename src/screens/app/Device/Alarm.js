import Alarm from '../../../components/Alarm';
import {connect} from 'react-redux';
import {sendDataAddAlarm} from '../../../actions/app/alarm';


const mapStateToProps = (state) => {
    return {
       alarm: state.alarm,
       deviceInfo:state.deviceInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAlarm: (alarm) => {
            dispatch(sendDataAddAlarm(alarm));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alarm)