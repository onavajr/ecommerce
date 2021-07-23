import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import { AiOutlineHome } from 'react-icons/ai';
import { IoStorefrontSharp } from 'react-icons/io5';

const ThankYou = () => {
    return (
        <div className="shop">
            <div className="listHeader">
                <h1><IoStorefrontSharp />Product Manager</h1>
                <Link to = {'/productmanager/new/'}>Sell your product here!</Link>
            </div>
            <h1>Thank You for shopping with us</h1>
            <Link to = {"/productmanager/shop"}>Click Here to Buy more...</Link>
        </div>
    )
}

export default ThankYou
