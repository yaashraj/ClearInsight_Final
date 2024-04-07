import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
// import {ReactComponent as Logo} from './public/vite.svg'
import Login from "./Login";
import './Page2.css';

export default function Page2() {
  const {user,isLoading} = useAuth0();
  // console.log(useAuth0());
  if(isLoading){
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <button class="btn btn-primary" type="button" disabled>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Loading...</span>
    </button>
  </div>
  }

  return (
    <>

    <Login/>
    <div className='box flex-container'>
    <img src="2.png" alt=""  className="bottom-left-img1" />
      <div className="text">
        <h1>Hello {user.name}</h1>
      </div>
      <div className="btn2">
      {/* <Logo/> */}
      <button type="button" className="x"><NavLink to='/page3'  style={{ color: 'black' }}>Create Query page</NavLink></button> 
      <button type="button" className="y"><NavLink to='/filter'  style={{ color: 'black' }}>  Select Query page </NavLink></button> 
      </div>
       
    </div>      
    </>
  )
}
