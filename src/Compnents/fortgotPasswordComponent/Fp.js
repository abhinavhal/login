import React, { useState } from 'react';
import './fp.css'

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOTP = () => {
    
    setOtpSent(true);
  };

  return (
    <div className="forgot-password-page">
      <h2>Forgot Password</h2>
      {otpSent ? (
        <div>
          <p>An OTP has been sent to your email.</p>
          {/* Implement OTP input and reset password logic */}
        </div>
      ) : (
        <div>
          <p>Enter your email to receive an OTP:</p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={handleSendOTP}>Send OTP</button>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
