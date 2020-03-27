import ForgotPW from './forgotPW';
import {connect} from 'react-redux';
import {forgotPassword} from '../../../actions/auth/auth';

const mapStateToProps = state => ({
  statusAuth :state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    forgotPassword: (data) => {
      dispatch(forgotPassword(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPW)