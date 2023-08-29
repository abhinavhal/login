import React, { useState } from 'react';
import './Login.css'; // Make sure to create this CSS file
import { useNavigate } from 'react-router-dom';
import share from '../Images/share.png';
import sciqus1 from '../Images/sciqus1.png';
import './Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [forgotp, setForgotp] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    if (!username.trim() || !password.trim()) {
      setErrorMessage('Both fields are required.');
    } else if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
      setErrorMessage('Password must be at least 8 characters long and include at least one capital letter, one number, and one special character.');
    } else {
      // Perform login
      setErrorMessage('');
      navigate('/employee');
    }
  };

  const handleForgotPassword = () => {
    setForgotp(true);
  };

  if (forgotp) {
    navigate('/fp');
  }

  return (
    <div className="App">
      <div className="background-white">
        <div className="left-half">
          <div className="top-left-images">
            <img src={sciqus1} alt="Image 1" />
          </div>
          <div className="image-container">
            <img src={share} alt="Description" className="center-image" />
          </div>
          <div className="bottom-left-image">
            <h3>INTRANET PORTAL</h3>
          </div>
        </div>
        <div className="right-half">
          <div className="login-form">
            <h2>Login Page</h2>
            <div className="input-group">
              <input type="text" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className="error-message">{errorMessage}</p>
            <button className="login-button" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
