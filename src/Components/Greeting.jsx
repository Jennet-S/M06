import React from "react";

function Greeting ({name}) {
    return (
        name ? <h1>Hello {name}</h1> : <h1>Hello World</h1>

    )
}

export default Greeting;