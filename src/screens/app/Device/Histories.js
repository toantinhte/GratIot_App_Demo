import History from '../../../components/History';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        histories: state.history.data
    }
}

export default connect(mapStateToProps,null)(History)