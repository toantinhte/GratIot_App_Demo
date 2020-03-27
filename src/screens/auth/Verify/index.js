import Verify from './Verify';
import {connect} from 'react-redux';
import {
  verify,
  sendCodeAgain,
  forgetPasswordVerify,
} from '../../../actions/auth/auth';

const mapStateToProps = state => ({
  statusAuth: state.auth,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    verify: data => {
      dispatch(verify(data));
    },
    sendCodeAgain: data => {
      dispatch(sendCodeAgain(data));
    },
    forgetPasswordVerify: data => {
      dispatch(forgetPasswordVerify(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Verify);
