import { useState } from 'react';
import UserContext from './context/UserContext';
import User from './components/User';
import ChangeUser from './components/ChangeUser';
import './App.css';

function App() {
  const [user, setUser] = useState('Slava')
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <div className="App">
        <User />
        <ChangeUser/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
