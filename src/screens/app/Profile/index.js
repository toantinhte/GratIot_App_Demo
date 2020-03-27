import Profile from './Profile';
import {connect} from 'react-redux';
import {logout} from '../../../actions/app/status';

const mapStateToProps = state => ({
  statusApp: state.status,
});


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(logout())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)