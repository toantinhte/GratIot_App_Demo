import ListAlarm from '../../../components/ListAlarm';
import {connect} from 'react-redux';
import {addAlarm, delAlarm, editAlarm} from '../../../actions/app/alarm';

const mapStateToProps = (state) => {
    return {
        alarm: state.alarm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAlarm: (alarm) => {
            dispatch(addAlarm(alarm))
        },
        editAlarm:(alarm)=>{
            dispatch(editAlarm(alarm))
        },
        delAlarm :(alarmId)=>{
            dispatch(delAlarm(alarmId))
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(ListAlarm);