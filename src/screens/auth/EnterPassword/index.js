import EnterPassword from './EnterPassword';
import {connect} from 'react-redux';
import {login, setPassword} from '../../../actions/auth/auth';

const mapStateToProps = (state) => {
  return {
    statusAuth:state.auth,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => {
      dispatch(login(data));
    },
    onSetPassword: (data) => {
      dispatch(setPassword(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterPassword)