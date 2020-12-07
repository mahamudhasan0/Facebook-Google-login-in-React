import React,{useContext} from 'react';
import {contextValue} from './App'

function PassingProps() {
	const {imgs} = useContext(contextValue)
	const {name} = useContext(contextValue)
	const {email} =useContext(contextValue)
  return (
	<div>
		<h1>Hello {name}</h1>
	   <img src={imgs} alt=''/>
       <h2>email:{email}</h2>
	</div>
  );
}

export default PassingProps;
