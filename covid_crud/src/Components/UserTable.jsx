import axios from 'axios';
import React,{useState,useEffect} from 'react';

const UserTable=()=>{
    const [data, setData] = useState([]);
    const[key,setKey]=useState();
     const [flag,setFlag]=useState(false);
     const [updateData,setUpdateData]=useState({
       name:"",
       email:""
     });

     useEffect(()=>{
       axios.get('http://localhost:9001/covid_patient/user')
       .then(res=>{
        setData(res.data);
       }).catch(err=>{
         console.log(err);
       })
     },[flag,updateData])

     const changeHandler=(event)=>{
      setUpdateData({...updateData,[event.target.name]:event.target.value});
     }

     const sendData=(id)=>{
      axios.put(`http://localhost:9001/covid_patient/userEdit/${id}`,updateData)
      .then(res=>{
        setFlag(res);
         console.log(res)
      }).catch(err=>{
        console.log(err);
      })
     }
     const updateHandle=(id)=>{
      axios.get(`http://localhost:9001/covid_patient/userEdit/${id}`)
        .then(res=>{
          setUpdateData(res.data);
        }).catch(err=>{
          console.log(err);
        })
     }

     const deleteHandle=(id)=>{
        axios.delete(`http://localhost:9001/covid_patient/userDelete/${id}`)
        .then(res=>{
           setFlag(res);
           alert("Record deleted successfully.")
        }).catch(err=>{
          console.log(err);
        })
     }

     const onSearchHandle=async(event)=>{
      setKey(event.target.value);
      console.log(key)
     
     }
  
     const searchClick=()=>{
      axios.get(`http://localhost:9001/covid_patient/userSearch/${key}`)
      .then(res=>{
        setData(res.data);
        console.log(res.data);
      }).catch(err=>{
        console.log(err)
      })
     }

    return(
      <div className='conatiner'>
     <div className='row'>
        <form  >
        <div className="col-sm-10 offset-1 mt-5">
        Search : <input type="text" name="searchtxt" placeholder='Serach by name' onChange={onSearchHandle} />
            <button type="button" className='btn btn-dark' onClick={searchClick}>Search</button>
            <br/>
        <h2 className="alert alert-danger text-center">User Details</h2>
        <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                {/* <th scope="col">tc</th> */}
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
                        <td>{ele.email}</td>
                        {/* <td>{ele.tc}</td> */}
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
                    <input type="text" className="form-control" name="name" value={updateData.name}  onChange={changeHandler} /> 
                    </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={updateData.email}  onChange={changeHandler}/>
                  </div>  
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success" onClick={()=>sendData(updateData._id)}>Save changes</button>
      </div>
    </div>
  </div>
</div>
     </div>
      </div>
       
    )
}

export default UserTable;