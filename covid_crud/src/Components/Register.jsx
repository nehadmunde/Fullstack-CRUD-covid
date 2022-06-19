import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Register=()=>{
  const navigate = useNavigate();
  const [pDetails,setPDetails]=useState({
    name:"",
    age:"",
    adharCard:"",
    dose:""
  });
const [pData,setPData]=useState();

const changeHandler=(event)=>{
 setPDetails({...pDetails,[event.target.name]:event.target.value});
 console.log("data in register",pDetails);
}

const onSubmitClick=async()=>{
  await axios.post('http://localhost:9001/covid_patient',pDetails)
  .then((res)=>{
  setPData(res)
  }).catch(err=>{
    console.log(err);
  })
 alert("Data saved sucessfully")
 navigate("/register");
}

    return(
        <>
        <div className="container">
    <div className="row">
    
        <div className="col-sm-9 offset-2 mt-5">
            <h2 className="alert alert-success text-center" >Register patient</h2>
            <form >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder='Enter patient Name' onChange={changeHandler} /> 
                    </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Age</label>
                    <input type="text" className="form-control" id="age" name="age" placeholder='Enter patient Age' onChange={changeHandler}/>
                  </div>  
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Adhar Card</label>
                    <input type="text" className="form-control" id="adharCard" name="adharCard" placeholder='Enter patient Adhar Card No.' onChange={changeHandler}/>
                  </div>
                  <div className="mb-3">
                 
                    <select className="form-select" id="dose" name="dose" aria-label="Floating label select example" onChange={changeHandler}>
                         <option >Select Dose</option>
                        <option value="1 st">1 st</option>
                        <option value="2 nd">2 nd</option>
                        <option value="Booster 1">Booster 1</option>
                        <option value="Booster 2">Booster 2</option>
                    </select>
           
                  </div>
                  <button type="submit" className="btn btn-success" onClick={onSubmitClick}>Submit</button>
            </form>
        </div>
       
        
    </div>
</div>
        </>
    )
}

export default Register;