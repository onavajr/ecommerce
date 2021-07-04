import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import PetForm from './PetForm';
import { MdPets } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';
import DetailPetshelter from './DetailPetshelter';



const EditPetShelter = (props) => {
    const { id } = props;
    const [ editPet, setEditPet] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/api/petshelter/" + id)
            .then((res)=>{
                console.log(res.data);
                setEditPet(res.data);
            })
            .catch((err) =>{
                console.log(err);
                navigate("/petshelter");
            });
    },[]);
    // const [ newPet, setNewPet ] = useState({
    //     petname: "",
    //     pettype: "",
    //     petdescription: "",
    //     firstskill: "",
    //     secondskill: "",
    //     thirdskill:"",
    //     petimage: ""
    // });
    
    const[errors, setErrors] = useState({

    });

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/petshelter/' + id, editPet)
            .then((res) =>{
                console.log(res.data);
                navigate('/petshelter/' + id);
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                setErrors(err.response.data.errors)
            });
    }

    // const inputChange = (e) =>{
    //     console.log("e.target.name " + e.target.name);
    //     console.log("e.target.value " + e.target.value);

    //     let newStateObject = {...newPet};
    //     newStateObject[e.target.name] = e.target.value;
    //     setNewPet(newStateObject);
    // }

    return (
        <div>
            <div className="editHeader">
                <h1><MdPets />Pet Shelter</h1>
                <Link to = {'/petshelter/'}>Back to Home</Link>
            </div>
            <h2>Edit {editPet.petname}</h2>
            <div className="editForm">
                <PetForm
                    submitHandler={submitHandler}
                    errors={ errors }
                    pet={ editPet}
                    setPet={setEditPet}
                    labelButton = { "Update Pet"} />
                <button className = "editButton" onClick={ submitHandler}><BsPencil /> Update Pet</button>
            </div>
            
            
        </div>
        
    )
}


// {
//     "petname": "Putol",
//     "pettype": "Pooch",
//     "petdescription": "superdog that can do evrything what you ask for, including laundry!",
//     "firstskill": "Jumping",
//     "secondskill": "Eating",
//     "thirdskill": "Flying",
//     "petimage": "https://images-na.ssl-images-amazon.com/images/I/81VtHOiH%2B3L._SL1500_.jpg"
// }

// 'Sleeping',
//             'Eating',
//             'Jumping',
//             'Flying',
//             'Talking'

export default EditPetShelter;