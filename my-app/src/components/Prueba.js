import React, { useState, useEffect } from "react";

function Prueba () {
    const [products, setProducts] = useState(["0"]);
    useEffect(() => {
        console.log("se monto el componente")
        fetch("http://localhost:3001/api/products")
        .then(resultado => resultado.json())
        .then(data => {
            console.log(data)
        })
    }, [])
    return(
        <div></div>
    )
}

export default Prueba