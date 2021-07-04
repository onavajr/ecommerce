import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import PetForm from './PetForm';
import { BsArrowBarUp } from 'react-icons/bs';
import { MdPets } from 'react-icons/md';


const CreatePetShelter = (props) => {
    const [ newPet, setNewPet ] = useState({
        petname: "",
        pettype: "",
        petdescription: "",
        firstskill: "",
        secondskill: "",
        thirdskill:"",
        petimage: "",
        likes: ""
    });
    
    const[errors, setErrors] = useState({

    });

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/petshelter/new', newPet)
            .then((res) =>{
                console.log(res.data);
                navigate('/petshelter');
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
            <div className="listHeader">
                <h1><MdPets />Pet Shelter</h1>
                <Link to = {'/petshelter/'}>Back to Home</Link>
            </div>
            <div className="createForm">
                <PetForm
                submitHandler={submitHandler}
                errors={ errors }
                pet={ newPet}
                setPet={setNewPet}
                // labelButton={ "Add Pet" }
                />
                <button className ="addButton" onClick={ submitHandler}><BsArrowBarUp/> Add Pet</button>
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

export default CreatePetShelter;