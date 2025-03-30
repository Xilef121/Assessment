import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (jwtToken, userData) => {
    setToken(jwtToken);
    setUser(userData);
  };

  return (
    <div>
      {!token ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Dashboard user={user} />
      )}
    </div>
  );
}

export default App;
