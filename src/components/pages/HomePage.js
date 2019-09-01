import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
const HomePage = () =>{
    return(
        <Fragment>
            <h1>Home page </h1>
            <Link to="/login">Login</Link>
        </Fragment>
    );
};


export default HomePage;