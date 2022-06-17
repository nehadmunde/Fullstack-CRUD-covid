import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Table=()=>{
  const [data, setData] = useState([]);
 const navigate=useNavigate();
  const [flag,setFlag]=useState(false);
  const [updateData,setUpdateData]=useState({
    name:"",
    age:"",
    adharCard:"",
    dose:""
  });
  const [searchData,setSearchData]=useState({
    name:"",
    age:"",
    adharCard:"",
    dose:""
  });
 const [key,setKey]=useState();
  useEffect(()=>{
    axios.get("http://localhost:9001/covid_patient").then(res=>{
       setData(res.data);
    }).catch(err=>{
      console.log(err);
    })
  },[flag,updateData])

   const changeHandler=(event)=>{
    setUpdateData({...updateData,[event.target.name]:event.target.value});
   }

  const updateHandle=async(i)=>{
    await axios.get(`http://localhost:9001/covid_patient/edit/${i}`).then(res=>{
      setUpdateData(res.data);
    console.log(res.data);
   }).catch(err=>{
     console.log(err);
   })
   navigate("/patientTable");
   }

   
   const onSend=(i)=>{
    console.log(i)
  axios.put(`http://localhost:9001/covid_patient/edit/${i}`,updateData)
 .then((res)=>{
   setFlag(res);
   navigate("/patientTable");
 }).catch((err)=>{
    console.log(err);
 })  
 navigate("/patientTable");
 }


   const deleteHandle=async(i)=>{
     axios.delete(`http://localhost:9001/covid_patient/delete/${i}`)
     .then((res)=>{
      alert("Record deleted sucessfully");
         setFlag(res);
     })
  }

   const onSearchHandle=async(event)=>{
    setKey(event.target.value);
    console.log(key)
   
   }

   const searchClick=()=>{
    axios.get(`http://localhost:9001/covid_patient/paitentsearch/${key}`)
    .then(res=>{
      setData(res.data);
      console.log(res.data);
    }).catch(err=>{
      console.log(err)
    })
   }

    return(
        <>
        <div className='row'>
        
            <form  >
            <div className="col-sm-10 offset-1 mt-5">
            Search : <input type="text" name="searchtxt" placeholder='Serach by name' onChange={onSearchHandle} />
            <button type="button" className='btn btn-dark' onClick={searchClick}>Search</button>
            <br/>
            <h2 className="alert alert-danger text-center">Patient Details</h2>
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Adhar Card No.</th>
                    <th scope="col">Dose</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((ele,i)=>{
                         
                      return(
                        <tr key={ i=1}>
                            <th scope="row" >{i+1}</th>
                            <td>{ele.name}</td>
                            <td>{ele.age}</td>
                            <td>{ele.adharCard}</td>
                            <td>{ele.dose}</td>
                            <td>
                                <button type="button" className="btn btn-info btn-sm"
                                data-bs-toggle="modal" data-bs-target="#editModel"
                                onClick={()=>updateHandle(ele._id)}>Update</button>

                            </td>
                            <td>
                              
                                <button type="button" className="btn btn-danger btn-sm" 
                                onClick={()=>deleteHandle(ele._id)}>Delete</button>

                              </td>
                          </tr>
                      )
                    })
                  }
                </tbody>
              </table>
        </div>
        </form>
      </div>

  <div className='row'>
        {/* <!-- Modal --> */}
        <div className="modal fade" id="editModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Reocrd</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      {/* model body */}
      <div className="modal-body">
      <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" id="name" value={updateData.name}  onChange={changeHandler} /> 
                    </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Age</label>
                    <input type="text" className="form-control" id="age" name="age" value={updateData.age}  onChange={changeHandler}/>
                  </div>  
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Adhar Card</label>
                    <input type="text" className="form-control" id="adharCard" name="adharCard" value={updateData.adharCard} placeholder='Enter patient Adhar Card No.' onChange={changeHandler}/>
                  </div>
                  <div className="mb-3">
                 
                    <select className="form-select" id="dose" name="dose"  aria-label="Floating label select example" value={updateData.dose} onChange={changeHandler}>
                         <option >Select Dose</option>
                        <option value="1 st">1 st</option>
                        <option value="2 nd">2 nd</option>
                        <option value="Booster 1">Booster 1</option>
                        <option value="Booster 2">Booster 2</option>
                    </select>           
                  </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success"  onClick={()=>onSend(updateData._id)}>Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
        </>
    )
}

export default Table;