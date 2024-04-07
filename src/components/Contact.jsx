import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from "./Login";
import './Contact.css'

export default function Contact() {
  return (
    <>
    <Login/>
    {/* <div className='con'> */}
    <div className='total'>
    <div className='ffe'>
      <h1 className='con2'>
        Contact Us
      </h1>
      </div>
      <div className='con3'>
        <form action="#">
      {/* <div class="mb-3" className='formm'> */}
 
  {/* <input type="name" class="form-control" className='qwerty' id="exampleFormControlInput1" placeholder="Full Name"/>
  <br></br>
   <label for="exampleFormControlInput1"  class="form-label"></label>
  <input type="email" class="form-control" className='qwertyy' id="exampleFormControlInput1" placeholder="Email"/>
  <br></br>
  <label for="exampleFormControlInput1" class="form-label"></label>

  <textarea class="form-control" className='qwertyyy' id="exampleFormControlTextarea1" rows="3" placeholder="Message.."></textarea>
  <br></br> */}
  {/* <h1 className='con2'>
        Contact Us
      </h1> */}
 {/* </div> */}
 <div className='formm'>
  <input type='text' className='qwerty' placeholder='Full Name'></input>
  <br></br>
  <label for="mail" ></label>
  <input type="email"  className='qwertyy' id="email" placeholder="Email"/>
  <br></br>
  <label for="msg" ></label>
  <textarea  className='qwertyyy' id="msg" rows="3" placeholder="Message.."></textarea>
 </div>
 <div className='abcc'>
 <div className='xyzz'>
<button type="submit" className='btnnn' >Submit</button>
</div>
</div>
</form>
    </div>
    {/* </div> */}
</div>
    </>
  )
}