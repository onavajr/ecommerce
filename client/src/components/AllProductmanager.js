import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import { IoStorefrontSharp,  } from 'react-icons/io5';

const AllProductmanager = (props) => {
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
                <h1><IoStorefrontSharp />Product Manager</h1>
                <Link to = {'/productmanager/new/'}>Sell your product here!</Link>
            </div>
            <div className="product">
                <h2>My Store Products</h2>
                    <br/>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Item Price</th>
                                <th>Edit or Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allProducts.map(( product, index) =>(
                                    <tr key={ index }>
                                        <td>
                                            { product.productname }
                                        </td>
                                        <td>
                                            { product.producttype }
                                        </td>
                                        <td>
                                            <Link to = {"/productmanager/" + product._id}>Details</Link> | 
                                            <Link to = {"/productmanager/"+ product._id + '/edit'}> Edit</Link> | 
                                            <button onClick={() => deleteProduct(product._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <button><Link to = {"/productmanager/shop"}>Shop Page</Link></button>
            </div>
            <br />
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default AllProductmanager;

