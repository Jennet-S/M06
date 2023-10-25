import React, { useState } from "react";
import cats from "./BigCatsList";

function BigCats() {
    const [sortCats, setSortCats] = useState(false);
    const [sortPanthera, setSortPanthera] = useState(false);

    const toggleList = () => {
        setSortCats(!sortCats);
    }

    const togglePanthera = () => {
        setSortPanthera(!sortPanthera);
    }

    const filteredCats = cats.filter(cat => {
        return (!sortPanthera || cat.latinName.includes("Panthera"));
    });

    const sortedCats = [...filteredCats].sort((a, b) => {
        if (a.name < b.name) {
            return sortCats ? 1 : -1;
        }
        if (a.name > b.name) {
            return sortCats ? -1 : 1;
        }
        return 0;
    });

    return (
        <>
            <div className="sort-button">
                <button onClick={toggleList}>Sort {sortCats ? "'A-Z'" : "'Z-A'"}</button>
                <button onClick={togglePanthera}>Show {sortPanthera ? "'All'" : "'Panthera Family Only'"}</button>

            </div>
            {sortedCats.map((cat, index) => (
                <div className="cats-list" key={index}>
                    <h2>{cat.name}</h2>
                    <img className="cats-image" src={cat.image} alt={cat.name} />
                    <p>Latin: {cat.latinName}</p>
                </div>

            ))}

        </>
    )
}

export default BigCats;