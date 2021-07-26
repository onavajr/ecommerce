import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import ProductForm from './ProductForm';
import { BsArrowBarUp } from 'react-icons/bs';
import { IoStorefrontSharp } from 'react-icons/io5';


const CreateProductManager = (props) => {
    const [ newProduct, setNewProduct ] = useState({
        productname: "",
        producttype: "",
        productdescription: "",
        firstskill: "",
        secondskill: "",
        thirdskill:"",
        productimage: "",
        likes: ""
    });
    
    const[errors, setErrors] = useState({

    });

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/productmanager/new', newProduct, {
            withCredentials: true
        })
            .then((res) =>{
                console.log(res.data);
                navigate('/productmanager/');
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                console.log(err.response.status)
                if(err.response.status === 401){
                    navigate("/productmanager/login")
                }
            });
    }

    // const inputChange = (e) =>{
    //     console.log("e.target.name " + e.target.name);
    //     console.log("e.target.value " + e.target.value);

    //     let newStateObject = {...newProduct};
    //     newStateObject[e.target.name] = e.target.value;
    //     setNewProduct(newStateObject);
    // }

    return (
        <div>
            <div className="listHeader">
                <h1><IoStorefrontSharp />GGshoppers</h1>
                <Link to = {'/productmanager/'}>Back to Product list</Link>
            </div>
            <div className="createForm">
                <ProductForm
                submitHandler={submitHandler}
                errors={ errors }
                product={ newProduct}
                setProduct={setNewProduct}
                // labelButton={ "Add Product" }
                />
                <button className ="addButton" onClick={ submitHandler}><BsArrowBarUp/> Add Product</button>
            </div>
            
        </div>
    )
}


// {
//     "productname": "Putol",
//     "producttype": "Pooch",
//     "productdescription": "superdog that can do evrything what you ask for, including laundry!",
//     "firstskill": "Jumping",
//     "secondskill": "Eating",
//     "thirdskill": "Flying",
//     "productimage": "https://images-na.ssl-images-amazon.com/images/I/81VtHOiH%2B3L._SL1500_.jpg"
// }

// 'Sleeping',
//             'Eating',
//             'Jumping',
//             'Flying',
//             'Talking'

export default CreateProductManager;