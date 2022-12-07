import React, { useState } from 'react';
import axios from "axios";
import "../Login/Login.css";
import {useNavigate} from "react-router-dom"

function Signup() {
  const Navigate=useNavigate()
  const [signupdata, setsignupdata]=useState({});

  const handleInputchange=(e,id)=>{
    setsignupdata({...signupdata,[id]:e.target.value})
    console.log(signupdata);
  }

  const handlesubmit=()=>{
    if(signupdata.password===signupdata.confirmpassword){
      axios({
        method:"POST",
        url:"https://contact-manager-backened.onrender.com/user/signup",
        data:signupdata
      }).then((res)=>{
        console.log(res)
        alert("user added successfully")
        Navigate("/")
      }).catch((err)=>{
        console.log(err);
        alert("user already exist")
        Navigate("/")
      })
    }else{
      alert("password and confirm Password is different")
    }
  }

  return (
    <>
    <div className="login-main">
      <div className="login-middle">
          <div className="login-contact">
              <div>
                {/* <h1>Logo</h1> */}
                <img style={{width:"10vw"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwR3ztdw9Q8v5YatoI15gaz_tONeMVftz8zg&usqp=CAU' alt='signup-page'/>
                <div>
                <strong>Create New Account</strong>
                </div>
              </div>
              <div style={{margin:"10px",marginTop:"20px"}}>
              <input class="form-control" placeholder='Email' name='email' id='email' onChange={(e)=>handleInputchange(e,"email")}></input>
              </div>
              <div style={{margin:"10px"}}>
                <input class="form-control" type="password" placeholder='Password' name='password' id='password' onChange={(e)=>handleInputchange(e,"password")}></input>
              </div>
              <div style={{margin:"10px"}}>
                <input class="form-control" type="password" placeholder='Confirm Password' name='confirmpassword' id='confirmpassword' onChange={(e)=>handleInputchange(e,"confirmpassword")}></input>
              </div>
              <div>
              <button style={{textAlign:"center"}}  class="btn btn-primary" onClick={()=>handlesubmit()}><strong style={{textAlign:"center", position:"relative",left:"120px"}}>Signup</strong></button>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Signup