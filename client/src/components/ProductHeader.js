import React from 'react';
import { Link } from '@reach/router';
import { IoStorefrontSharp,  } from 'react-icons/io5';
import { FaHome,  } from 'react-icons/fa';

const ProductHeader = () => {
    return (

        <div className="frontPage">
            <h4>Welcome to!!</h4>
            <h1><IoStorefrontSharp />GGshoppers</h1>
            <h2>Shop, Save, Enjoy</h2>
            <p>Buy now for and get free shipping</p>
            <img className="product cover" src="http://www.teamworld.com/twc/images/main_template/promotional_products-collage.jpg" /><br></br>
            <Link to = {'/productmanager/login'}>Login to see all products</Link><br></br>
        </div>
    )
}

export default ProductHeader;
