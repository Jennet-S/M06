import React, { useState } from "react";
import cats from "./BigCatsList";

function BigCats() {
    const [sortCats, setSortCats] = useState(false);

    const toggleList = () => {
        setSortCats(!sortCats);
    }

    const sortedCats = [...cats].sort((a, b) => {
        if (a.name < b.name) {
            return sortCats ? 1 : -1;
        }
        if (a.name > b.name) {
            return sortCats ? -1 : 1;
        }
        return 0;
    })

    return (
        <>
            <div className="sort-button">
                <button onClick={toggleList}>Sort {sortCats ? "'A-Z'" : "'Z-A'"}</button>
            </div>
            {sortedCats.map((cats, index) => (
                <div className="cats-list" key={index}>
                    <h2>{cats.name}</h2>
                    <img className="cats-image" src={cats.image} alt={cats.name} />
                    <p>Latin: {cats.latinName}</p>
                </div>

            ))}

        </>
    )
}

export default BigCats;