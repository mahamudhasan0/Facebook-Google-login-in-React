import React,{useState} from 'react';
import Login from './Login';
import PassingProps from './PassingProps';

export const contextValue = React.createContext()

function App() {
  const [imgs,setImgs] = useState('')
  const [name,setName] = useState('')
  const [email,setEmail]=useState('')
  return (
    <div>
      <contextValue.Provider value={{name,setName,imgs,setImgs,email,setEmail}}>
      <Login/>
      <PassingProps/>
      </contextValue.Provider>
    </div>
  );
}

export default App;
