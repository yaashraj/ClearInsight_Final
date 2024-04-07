import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import './Page3.css';

export default function Page3() {
  const [name, setName] = useState('');
  const [admin, setAdmin] = useState('');
  const [nameOfOrg, setNameOfOrg] = useState('');
  const {user,isLoading} = useAuth0();
  const [email, setEmail] = useState(user ? user.email : '');

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <button class="btn btn-primary" type="button" disabled>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Loading...</span>
    </button>
  </div>;
  }
  console.log(user)


  const sendData = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/createPage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nameOfOrg, email })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Handle the response data here
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
    window.location.reload();
    alert("Page Created Successfully")

  }
  return (
    <>
    <Login/>
    <div className='main'>
     <div className='box1'>
        <div className='first'>
          <h1 className='t'>Create Your Organization's Page Here</h1>
        </div>
        <div className='second'>
        <form action='#'>

        <div class="input-group mb-3">
  <input type="text" class="form-control" name='nameOfOrg' onChange={(e) => setNameOfOrg(e.target.value)} placeholder="Name Of Org" aria-label="Username"/>
  {/* <span class="input-group-text">@</span> */}
  {/* <input type="text" class="form-control" name='email' onChange={(e) => setEmail(e.target.value)}  placeholder="Email" aria-label="Server"/> */}
</div>


          {/* <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className='bt1' placeholder='Name of your page'/><br/> */}
          {/* <input type="text" id="admin" name="admin" value={admin} onChange={handleAdminChange} className='bt2' placeholder='Name of the admin'/><br/> */}
          {/* <input type="submit" value="Create Page" className='bt3'/>
           */}
           <button type='submit' onClick={sendData}  className='bt3'> Create Page <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.6364 6.996L18.7418 32.12L9.49091 22.792L12.5673 19.69L18.7418 25.916L40.56 3.916L43.6364 6.996ZM21.8182 39.6C12.1964 39.6 4.36364 31.702 4.36364 22C4.36364 12.298 12.1964 4.4 21.8182 4.4C25.2436 4.4 28.4509 5.412 31.1564 7.15L34.32 3.96C30.7636 1.474 26.4655 0 21.8182 0C9.77455 0 0 9.856 0 22C0 34.144 9.77455 44 21.8182 44C25.5927 44 29.1491 43.032 32.2473 41.316L28.9745 38.016C26.7927 39.028 24.3709 39.6 21.8182 39.6ZM37.0909 28.6H30.5455V33H37.0909V39.6H41.4545V33H48V28.6H41.4545V22H37.0909V28.6Z" fill="black"/>
</svg> </button>
        </form>
        </div>
     </div>
    </div>
    </>
  )
}