import React, { useState } from "react";
import AddCatForm from "../Components/AddCatForm";
import cats from "../Components/BigCatsList";
import { useNavigate } from "react-router-dom";

function CatsForm() {
    const [newCats, setNewCats] = useState([...cats]);
    const navigate = useNavigate();


    const handleAddCat = (addNewCat) => {
        setNewCats([...newCats, addNewCat]);
    };

    const handleDeleteCat = (index) => {
        const updatedCats = newCats.filter((_, catIndex) => catIndex !== index);
        setNewCats(updatedCats);
    };

    return (
        <div>
            <button onClick={() => navigate(-1)} className="CatsForm">Back</button>

            <h1>Cats Form</h1>
            <AddCatForm onAddCat={handleAddCat} />
            <ul>
                {newCats.map((cat, index) => (
                    <li className="cats-form-list" key={index}>
                        <div className="cats-list" key={index}>
                            <h2>{cat.name}</h2>
                            <img className="cats-image" src={cat.image} alt={cat.name} />
                            <p>Latin: {cat.latinName}</p>
                        </div>
                        <button onClick={() => handleDeleteCat(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CatsForm;