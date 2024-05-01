import './App.css';
import { MyRoutes } from  './Routes'
import React from 'react';
import { useUser } from './auth';


function App() {
  const { isLoading, user } = useUser();
  return (
    <div className="App">
      <MyRoutes isLoading={isLoading} user={user}/>
    </div>
  );
}

export default App;
