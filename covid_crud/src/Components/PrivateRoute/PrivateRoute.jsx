import React from 'react';
import { Route,Navigate} from 'react-router-dom';

const PrivateRoute=({children,...rest})=>{
    const isAuth=false;
    return(
       <Route {...rest} render={()=>isAuth?(children):(<Navigate to={'/login'}/>)} />
    )
}

export default PrivateRoute;