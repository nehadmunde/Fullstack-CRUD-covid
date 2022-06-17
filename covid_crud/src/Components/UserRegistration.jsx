import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const UserRegistration=()=>{
   const [data,setData]=useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    tc: ""
   })
  
   const [flag,setFlag]=useState(false);
  
   const navigate=useNavigate();

   const ChangeHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value});
    console.log(data);
  }

    const onRegisterClick=()=>{
        axios.post("http://localhost:9001/covid_patient/userReg",data)
        .then(res=>{
         setFlag(res)
         navigate('/login');
        }).catch(err=>{
          console.log(err)
        })
    }

    return(
        <div className='container row'>
        <div className='col-sm-9 offset-2 mt-5'>
        <h2 className="alert alert-warning text-center" >User Login Register</h2>
        <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
      <input type="text" className="form-control" name="name" placeholder='Enter Name Here'  onChange={ChangeHandler} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" name="email" placeholder='Enter Email Here' aria-describedby="emailHelp" onChange={ChangeHandler} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" name="password" placeholder='Enter Password Here' onChange={ChangeHandler} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
      <input type="password" className="form-control" name="password_confirmation" placeholder='Enter Confirm-Password Here' onChange={ChangeHandler} />
    </div>
    <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" name="tc" value={true} onChange={ChangeHandler} />
    <label className="form-check-label" htmlFor="exampleCheck1">I accpet all terms and conditions.</label>
  </div>
    <button type="button" className="btn btn-dark" onClick={onRegisterClick}>Register</button>
  </form>
        </div>
       </div>
    )
}

export default UserRegistration;
