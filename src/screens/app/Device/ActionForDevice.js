import Action from '../../../components/ActionForDevice';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    listActions:state.action.data,
    deviceInfo:state.deviceInfo,
});

export default connect(mapStateToProps,null)(Action)