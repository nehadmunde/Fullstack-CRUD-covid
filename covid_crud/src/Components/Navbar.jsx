import React from 'react';
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
  <h4 className="alert alert-dark text-center" >
    <a class="navbar-brand" href="">COVID VACCINATION</a>
    </h4>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">
          <Link to="/">Home</Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/register">
          <Link to="/register">Register Patient</Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/patientTable">
          <Link to="/patientTable">Patient Details</Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">
          <Link to="/login">Login</Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/userReg">
          <Link to="/userReg">User Registration</Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/userTable">
          <Link to="/userTable">User Details</Link>
          </a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/uploadImage">
          <Link to="/uploadImage">Upload Image</Link>
          </a>
        </li> */}

      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;