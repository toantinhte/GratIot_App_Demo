import EditHouse from '../../../components/EditHouse';
import {connect} from 'react-redux';
import {editHouse, deleteHouse, selectHouse, addHouse} from '../../../actions/app/house';

const mapStateToProps = (state, ownProps) => {
    return {
        houseIsSelected: state.house.houseIsSelected,
        data:state.house.data,
        infoUser:state.status.infoUser,
        room:state.room.data,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    editHouse: house => {
      dispatch(editHouse(house));
    },
    deleteHouse: houseId => {
      dispatch(deleteHouse(houseId));
    },
    selectHouse: houseId => {
        dispatch(selectHouse(houseId));
    },
    addHouse: house => {
        dispatch(addHouse(house));
    }
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHouse);
