import EditRoom from '../../../components/EditRoom';
import {connect} from 'react-redux';
import {addRoom, deleteRoom, editRoom} from '../../../actions/app/room';

const mapDispatchToProps = (dispatch) => {
    return {
        editRoom: (room) => {
            dispatch(editRoom(room))
        },
        deleteRoom: (roomId, houseId) => {
            dispatch(deleteRoom(roomId, houseId))
        }
    }
}


export default connect(null, mapDispatchToProps)(EditRoom)