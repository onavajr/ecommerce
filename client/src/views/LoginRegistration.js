import React from 'react'
import Login from '../components/Login'
import RegisterUser from '../components/RegisterUser'
import { IoStorefrontSharp,  } from 'react-icons/io5';
import { Link,navigate } from '@reach/router';


const LoginRegistration = () => {
    return(
        <div>
            <div className="listHeader">
            <h1><IoStorefrontSharp />GGshoppers</h1>
            <div>
                    <Link to = {'/productmanager/shop/'} className="header-menu"> Shop </Link>|
                    <Link to = {'/productmanager/login/'} className="header-menu"> Login </Link>|
                    <Link to = {'/productmanager/new/'} className="header-menu"> Register </Link>
                </div>
            </div>
            < hr/>
            <div className="signIn">
                <Login />
                <small>Don't have account yet? Register below</small>
                < hr/>
                <RegisterUser />
            </div>
        </div>
    )
}


export default LoginRegistration