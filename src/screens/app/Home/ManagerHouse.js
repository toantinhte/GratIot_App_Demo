import ManagerHouse from '../../../components/ManagerHouse';
import {connect} from 'react-redux';
import {addHouse} from '../../../actions/app/house';

const mapStateToProps = state => ({
    data: state.house.data,
    houseIsSelected: state.house.houseIsSelected,
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      addHouse: house => {
        dispatch(addHouse(house));
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ManagerHouse);
  