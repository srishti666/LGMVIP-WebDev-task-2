import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
  }

  return (
    <>
      <header className="Navbar">
      </header>
      <div className="heading">
        <h1>LGM Community</h1>
      </div>

      <div className="container">
        <button className="btn" onClick={getUsers}>Get Users</button>
        {users?.map((present, index)=> {
          return (
            <div className="card" key={index}>
              <img src={present.avatar} alt="" />
              <div className="card-back">
                <h3 className="card-title">
                  {present.first_name} {present.last_name}
                </h3>
                <h4 className="card-item">{present.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}
export default App
