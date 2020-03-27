import Register from './register';
import {connect} from 'react-redux';
import {register} from '../../../actions/auth/auth';

const mapStateToProps = state => {
  return {
    statusAuth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: data => {
      dispatch(register(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
