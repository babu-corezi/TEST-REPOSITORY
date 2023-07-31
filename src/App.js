import './App.css';
import React from 'react'
import {Amplify} from 'aws-amplify';

Amplify.configure({
  Auth: {

    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_USERPOOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USERPOOL_WEB_CLIENT_ID,
    mandatorySignIn: false,
    authenticationFlowType: 'USER_PASSWORD_AUTH',
    oauth: {
      domain: `https://babugooglesignin.auth.ap-south-1.amazoncognito.com`,
      scope: ["email", "openid", "phone"],
      redirectSignIn: 'http://localhost:3000/dashboard',
      redirectSignOut: 'http://localhost:3000/',
      responseType: 'token'
    }
  }
});

function App(props) {

  return (
    <div className="App">
      <h1>This is Landing page</h1>
      <a href={'https://babugooglesignin.auth.ap-south-1.amazoncognito.com/oauth2/authorize?client_id=1urakpvu22fl9s2i5cmtm5gk9t&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard'}>Login</a>
    </div>
  );
}

export default App;