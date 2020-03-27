import ManagerRoom from '../../../components/ManagerRoom';
import {connect} from 'react-redux';
import {addRoom, deleteRoom, editRoom} from '../../../actions/app/room';

const mapStateToProps = (state) => {
    return {
        data: state.room.data
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addRoom: (room) => {
            dispatch(addRoom(room))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ManagerRoom)