import AddHouse from '../../../components/AddHouse';
import {connect} from 'react-redux';
import {addHouse} from '../../../actions/app/house';

const mapDispatchToProps = (dispatch) => {
    return {
        addHouse: (house) => {
            dispatch(addHouse(house))
        }
    }
}
export default connect(null, mapDispatchToProps)(AddHouse)