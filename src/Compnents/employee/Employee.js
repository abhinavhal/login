import React, { useState } from 'react';
import './employee.css'

function Employee() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Employee');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [designation, setDesignation] = useState('Technical');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('Active');

  const handleContactNumberChange = (e) => {
    const input = e.target.value;
    if (input.match(/^\d{0,10}$/)) {
      setContactNumber(input);
    }
  };

  const handleEmailChange = (e) => {
    const input = e.target.value;
    setEmail(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', {
      name,
      role,
      contactNumber,
      email,
      birthdate,
      joiningDate,
      designation,
      department,
      status,
    });
  };

  return (
    <div className ="page">
    <div className="employee-form">
      <h2>Employee Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Role:</label>
          <label>
            <input type="radio" value="Admin" checked={role === 'Admin'} onChange={() => setRole('Admin')} />
            Admin
          </label>
          <label>
            <input type="radio" value="Employee" checked={role === 'Employee'} onChange={() => setRole('Employee')} />
            Employee
          </label>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
        </div>
        <div>
          <label>Contact Number:</label>
          <input type="text" value={contactNumber} onChange={handleContactNumberChange} maxLength="10" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Birth Date:</label>
          <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />
        </div>
        <div>
          <label>Joining Date:</label>
          <input type="date" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} required />
        </div>
        <div>
          <label>Designation:</label>
          <select value={designation} onChange={(e) => setDesignation(e.target.value)} required>
            <option value="Engineer">Engineer</option>
            <option value="CA">CA</option>
            <option value="Manager">Manager</option>
            <option value="HR">HR</option>
          </select>
        </div>
        <div>
          <label>Department:</label>
          <select value={department} onChange={(e) => setDepartment(e.target.value)} required>
            <option value="Technical">Technical</option>
            <option value="Finance">Finance</option>
            <option value="ProductTeam">ProductTeam</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div>
          <label>Status:</label>
          <label>
            <input type="radio" value="Active" checked={status === 'Active'} onChange={() => setStatus('Active')} />
            Active
          </label>
          <label>
            <input type="radio" value="Inactive" checked={status === 'Inactive'} onChange={() => setStatus('Inactive')} />
            Inactive
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Employee;
