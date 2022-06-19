import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const UploadImage=()=>{

    const [img,setImg]=useState('');
    const onUploadBtn=()=>{
        const formData=new FormData();
        formData.append("file",img);
        //formData.append("upload_preset","ml_default");

        axios.post("http://localhost:9001/upload/fileUpload",formData)
        .then(res=>{
            console.log(res);
            alert("File Uploaded Sucessfully.");
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className='container'>

            <div className='row'>
                <div className='col-sm-8 offset-2 mt-5'>
                <h2 className="alert alert-danger text-center">Upload Image</h2>
    
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" onChange={(e)=>setImg(e.target.files[0])}/>
                    {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
                </div>
                <div className="input-group mb-3">
                    <button type='button' className='btn btn-danger' onClick={onUploadBtn}>Upload</button>
                </div>

                </div>
            </div>
        </div>

    )
}

export default UploadImage;