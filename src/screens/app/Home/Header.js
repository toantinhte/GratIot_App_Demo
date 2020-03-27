import Header from '../../../components/HeadHome';
import {selectHouse} from '../../../actions/app/house';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        houseIsSelected: state.house.houseIsSelected,
        data: state.house.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      selectHouse: houseId => {
        dispatch(selectHouse(houseId));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Header);