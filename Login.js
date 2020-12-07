import React,{useContext} from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {contextValue} from './App'
function Login() {
  const {setImgs} =useContext(contextValue)
  const {setName} =useContext(contextValue)
  const {setEmail} =useContext(contextValue)
  const responseFacebook=(response)=>{
   console.log(response.name)
   setName(response.name)
   console.log(response.picture.data.url)
    setImgs(response.picture.data.url)
  }
  const componentClicked=(response)=>{
    console.log(response)
   }
   const responseGoogle=(response)=>{
    console.log(response)
    setEmail(response.profileObj.email)
   }
  return (
    <div>
        <div>
          <FacebookLogin
              appId="1748105175357873"
              autoLoad={true}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook} />
        </div>
        <GoogleLogin
            clientId="306329157957-hgto6p4a07ue3gv74314s9tgao6i2jt5.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
         
    </div>
  );
}

export default Login;
