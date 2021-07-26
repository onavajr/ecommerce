import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import { IoStorefrontSharp } from 'react-icons/io5';

const DetailProductmanager = (props) => {
    const { id } = props;
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/productmanager/" + id)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) =>{
                console.log(err);
            });
    },[]);

    const deleteProduct = () =>{
        axios.delete('http://localhost:8000/api/productmanager/' + id)
            .then((res) =>{
                console.log(res.data);
                navigate('/thankyou');
            })
            .catch((err) =>{
                console.log(err);
                navigate('/productsheleter');
            });
    }
    return (
        <div>
            <div className="listHeader">
                <h1><IoStorefrontSharp />Product Manager</h1>
                <Link to = {'/productmanager/'}>Back to Home</Link>
            </div>
            <div className="detailHeader">
                    <h2 className="editPage">Product Detail: {product.productname}</h2>
                </div>
            <div className="productPage">
                <div className="productDetails">
                    <div className="productBio">
                        <h4>Product Price: {product.producttype}</h4>
                        <h4>This item includes: </h4>
                        <p>{product.firstskill}</p>
                        <p>{product.secondskill}</p>
                        <p>{product.thirdskill}</p>
                    </div>
                    <div className="productDescription">
                        <h4>Description:</h4>
                        <p>{product.productdescription}</p>
                        </div>
                    
                </div>
                <img src={product.productimage} alt={product.name} className="imgproduct"/>
            
            </div>
            <div className="checkout">
                <h2>Quick Check Out</h2>
                <hr />
                <label>Credit Card: </label><br />
                <input  className="textBox" placeholder="Enter card number"></input><br />
                <label>Card Security: </label><br />
                <input  className="textBox" placeholder="Enter card security"></input><br />
                <label>Shipping and Billing Address: </label><br />
                <textarea placeholder="Enter your address"></textarea>
                <button onClick={ deleteProduct }>BUY {product.productname}</button>
            </div>
            <br />
        </div>
        

    )
}

export default DetailProductmanager;