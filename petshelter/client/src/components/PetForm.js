import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const PetForm   = (props) => { 
    const { submitHandler, errors, pet, setPet, labelButton } = props;

    // const [ pet, setPet ] = useState({
    //     petname: "",
    //     pettype: "",
    //     petdescription: "",
    //     firstskill: "",
    //     secondskill: "",
    //     thirdskill:"",
    //     petimage: ""
    // });
    
    // const[errors, setErrors] = useState({

    // });

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:8000/api/petshelter/new', pet)
    //         .then((res) =>{
    //             console.log(res.data);
    //             navigate('/petshelter');
    //         })
    //         .catch((err) => {
    //             console.log(JSON.stringify(err));
    //             setErrors(err.response.data.errors)
    //         });
    // }

    const inputChange = (e) =>{
        console.log("e.target.name " + e.target.name);
        console.log("e.target.value " + e.target.value);

        let newStateObject = {...pet};
        newStateObject[e.target.name] = e.target.value;
        setPet(newStateObject);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div  className="petForm">
                    <div  className="formInput">
                        <label>Pet Name: </label>
                        <input
                            className="textBox"
                            type="text"
                            name="petname"
                            value={pet.petname}
                            onChange={(e) => inputChange(e)}
                        />
                        {
                            pet.petname && pet.petname.length > 0 && pet.petname.length < 3 ?
                            <span className="error-text"> Pet name must be at leats 3 characters long</span>
                            :null
                        }
                        {
                            errors.petname ?
                                <span className="error-text"> {errors.petname.message}</span>
                                :null
                        }
                    </div>
                    <div  className="formInput">
                        <label >Pet Type: </label>
                        <input
                            className="textBox"
                            type="text"
                            name="pettype"
                            value={pet.pettype}
                            onChange={(e) => inputChange(e)}
                        />
                        {
                            pet.pettype && pet.pettype.length > 0 && pet.pettype.length < 3 ?
                            <span className="error-text"> Pet type must be at leats 3 characters long</span>
                            :null
                        }
                        {
                            errors.pettype ?
                                <span className="error-text"> {errors.pettype.message}</span>
                                :null
                        }
                    </div>
                    <div  className="formInput">
                        <label className="formLabe">Description: </label>
                        <input
                            className="textBox"
                            type="text"
                            name="petdescription"
                            value={pet.petdescription}
                            onChange={(e) => inputChange(e)}
                        />
                        {
                            pet.petdescription && pet.petdescription.length > 0 && pet.petdescription.length < 3 ?
                            <span className="error-text"> Description must be at leats 3 characters long</span>
                            :null
                        }
                        {
                            errors.petdescription ?
                                <span className="error-text"> {errors.petdescription.message}</span>
                                :null
                        } 
                    </div>
                    <div  className="formInput">
                    <label className="formLabel">First Skill: </label>
                        <select
                            className="textBox"
                            type="text"
                            name="firstskill"
                            value={pet.firstskill}
                            onChange={(e) => inputChange(e)}
                        >
                            <option></option>
                            <option value="Running">Running</option>
                            <option value="Talking">Talking</option>
                            <option value="Eating">Eating</option>
                            <option value="Sleeping">Sleeping</option>
                            <option value="Jumping">Jumping</option>
                            <option value="Flying">Flying</option>
                            <option value="Swimming">Swimming</option>
                        </select>
                        {
                            errors.firstskill ?
                                <span className="error-text"> {errors.firstskill.message}</span>
                                :null
                        }
                    </div>
                    <div  className="formInput">
                        <label className="formLabel">Second Skill: </label>
                        <select
                            className="textBox"
                            type="text"
                            name="secondskill"
                            value={pet.secondskill}
                            onChange={(e) => inputChange(e)}
                        >
                            <option></option>
                            <option value="Eating">Eating</option>
                            <option value="Sleeping">Sleeping</option>
                            <option value="Running">Running</option>
                            <option value="Jumping">Jumping</option>
                            <option value="Flying">Flying</option>
                            <option value="Talking">Talking</option>
                            <option value="Swimming">Swimming</option>
                        </select>
                        {
                            errors.secondskill ?
                                <span className="error-text"> {errors.secondskill.message}</span>
                                :null
                        }
                    </div>
                    <div  className="formInput">
                    <label className="formLabel">Third Skill: </label>
                        <select
                            className="textBox"
                            type="text"
                            name="thirdskill"
                            value={pet.thirdskill}
                            onChange={(e) => inputChange(e)}
                        >
                            <option></option>
                            <option value="Running">Running</option>
                            <option value="Talking">Talking</option>
                            <option value="Eating">Eating</option>
                            <option value="Sleeping">Sleeping</option>
                            <option value="Jumping">Jumping</option>
                            <option value="Flying">Flying</option>
                            <option value="Swimming">Swimming</option>
                        </select>
                        {
                            errors.thirdskill ?
                                <span className="error-text"> {errors.thirdskill.message}</span>
                                :null
                        }
                    </div>
                    <div  className="formInput">
                        <label className="formLabel">Image URL: </label>
                        <input
                            className="textBox"
                            type="text"
                            name="petimage"
                            value={pet.petimage}
                            onChange={(e) => inputChange(e)}
                        />  
                    </div>
                    <br/>
                        
                    {/* <div className="updateButton" >
                    <button type="submit">{ labelButton }</button>
                    </div> */}
                </div>
            </form>
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

export default PetForm;