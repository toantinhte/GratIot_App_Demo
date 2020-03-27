import React from 'react';
import { navigationRef, isMountedRef } from '../RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import Auth from './auth';
import App from './app';
import Splash from './splash';
import checkStatusApp from '../actions/app/status';

function Screen({statusApp, checkStatusApp}) {
  const {isLoading,isSigned, infoUser, error} = statusApp;
  React.useEffect(() => {
    checkStatusApp();
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoading ? <Splash /> :isSigned?<App />:<Auth/>}
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  statusApp: state.status,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        checkStatusApp: () => {
            dispatch(checkStatusApp());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
