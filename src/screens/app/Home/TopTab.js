import {connect} from 'react-redux';
import TopTabRoom from '../../../components/TopTab';
import Home from './Home';


const mapStateToProps = state => ({
  data: state.room.data,
  houseIsSelected:state.house.houseIsSelected,
  component:Home
});

export default connect(mapStateToProps,null)(TopTabRoom);
