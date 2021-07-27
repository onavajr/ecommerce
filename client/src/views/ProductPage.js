import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import { IoStorefrontSharp,  } from 'react-icons/io5';
import { FcSearch } from "react-icons/fc";

const ProductPage = (props) => {
    const [ allProducts, setAllProducts] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/productmanager')
            .then((res)=>{
                console.log(res.data);
                setAllProducts(res.data);
            })
            .catch((err)=>console.log(err));

    }, []);

    const deleteProduct = (productId) =>{
        axios.delete('http://localhost:8000/api/productmanager/' + productId)
            .then((res) =>{
                console.log(res.data);
                let filteredProduct = allProducts.filter((singleProduct) => {
                    return singleProduct._id !== productId;
                })

                setAllProducts(filteredProduct);

            })
            .catch((err) =>{
                console.log(err);
                navigate('/productmanager');
            });
    }
    const logout = () =>{
        axios.post("http://localhost:8000/api/users/logout",{},{
            withCredentials: true
        })
        .then((res) => {
            console.log(res.data);
            navigate("productmanager/login")
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div >
            <div className="listHeader">
                <h1><IoStorefrontSharp />GGshoppers</h1>
                <div className="listHeader">
                    <div>
                        <Link to = {'/productmanager/new/'} className="header-menu">| Sell Item </Link>|
                        <Link to = {'/productmanager/'} className="header-menu"> Inventory </Link> | 
                        <Link to = {'/productmanager/login/'} className="header-menu" onClick={logout}> Logout </Link>|
                    </div>
                </div>
            </div>
            
            <div className="searchElement">
            <FcSearch/> <input type="search" className="searchBox" placeholder="Search Item..."></input> <button>Search</button>
            </div>
           
            
            
            <div className="shopPage">

                <h2>Buy now and get a free shipping</h2>
                    <br/>
                    <div className="shop">
                        {
                            allProducts.map((product, index) => (
                                <div key={index}>
                                    <div>{product.productname}</div>
                                    <div>{ product.producttype }</div>
                                    <img className="imgproduct" src={product.productimage}/>
                                </div>
                            ))
                        }
                    </div>
                    {/* <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Item Price</th>
                                <th>Edit or Delete</th>
                                <th>Cover Image</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allProducts.map(( product, index) =>(
                                    <tr key={ index }>
                                        
                                        <td className="td">
                                            { product.productname }
                                        </td>
                                        <td className="td">
                                            { product.producttype }
                                        </td>
                                        <td className="td">
                                            <img className="imgproduct" src={product.productimage}/>
                                        </td>
                                        <td className="td"> 
                                            <Link to = {"/productmanager/" + product._id}>Details</Link> <br/><br/>
                                            <Link to = {"/productmanager/" + product._id}><button>Buy Now</button></Link> <br/><br/>
                                            
                                            <button onClick={() => deleteProduct(product._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> */}
            </div>
            <br />
            {/* <button onClick={logout}>Logout</button> */}
        </div>
    )
}

export default ProductPage;
