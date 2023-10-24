import React, { useState } from "react";

function AddCatForm({ onAddCat }) {
    const [name, setName] = useState("");
    const [latinName, setLatinName] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === "" || latinName.trim() === "" || image.trim() === "") {
            alert("You must complete all fields!");
            return;
        }
        const newCat = {
            name,
            latinName,
            image,
        };
        onAddCat(newCat);
        setName("");
        setLatinName("");
        setImage("");
    };

    return (
        <div className="new-cat-form">
            <form className="new-cat-form-input" onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </label>

                <label>
                    <input type="text" value={latinName} placeholder="Latin name" onChange={(e) => setLatinName(e.target.value)} />
                </label>

                <label>
                    <input type="text" value={image} placeholder="Image URL" onChange={(e) => setImage(e.target.value)} />
                </label>
                <button className="new-cat-form-button" type="submit">Add a cat</button>
            </form>
        </div>
    )
};
export default AddCatForm;