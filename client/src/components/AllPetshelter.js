import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const AllPetshelter = (props) => {
    const [ allPets, setAllPets] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/petshelter')
            .then((res)=>{
                console.log(res.data);
                setAllPets(res.data);
            })
            .catch((err)=>console.log(err));

    }, []);

    const deletePet = (petId) =>{
        axios.delete('http://localhost:8000/api/petshelter/' + petId)
            .then((res) =>{
                console.log(res.data);
                let filteredPet = allPets.filter((singlePet) => {
                    return singlePet._id !== petId;
                })

                setAllPets(filteredPet);

            })
            .catch((err) =>{
                console.log(err);
                navigate('/petsheleter');
            });
    }

    return (
        <div className="pet">
            <h2>These pets are looking for a good home</h2>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                        <th>Edit or Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPets.map(( pet, index) =>(
                            <tr key={ index }>
                                <td>
                                    { pet.petname }
                                </td>
                                <td>
                                    { pet.pettype }
                                </td>
                                <td>
                                    <Link to = {"/petshelter/" + pet._id}>Details</Link> | 
                                    <Link to = {"/petshelter/"+ pet._id + '/edit'}> Edit
                                    </Link> | <button onClick={() => deletePet(pet._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
                
        </div>
    )
}

export default AllPetshelter;