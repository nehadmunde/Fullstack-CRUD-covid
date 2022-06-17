import React from 'react';

const Home=()=>{
    return(
        <>
  

<div class="container-fluid">
  <div class="row">
   
  <h2 className="alert alert-dark text-center" >Welcome to COVID VACCINATION CENTER </h2>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
       
        <img src="https://kauveryhospital.com/blog/wp-content/uploads/2021/02/dreamstime_xxl_208496627-1200x545_c.jpg" class="img-fluid" alt="..."/>
      
      </div>

      <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>

    
     
    </main>
  </div>
</div>


        </>
    )
}

export default Home;