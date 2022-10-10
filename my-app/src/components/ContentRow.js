import React, { useState, useEffect } from "react";
import Etiqueta from "./EtiquetaRow" ;

function ContentRow(){
    
    const [products, setProducts] = useState(["0"]);
    const [users, setUsers] = useState(["0"]);
    const [brands, setBrands] = useState(["0"])

    let data = [
        {
            titulo: "Products in Data Base",
            cifra: products,
            colorBorder: "primary",
            icono: "fa-clipboard-list"
        },
        {
            titulo: "Total Users",
            cifra: users,
            colorBorder: "success",
            icono: "fa-dollar-sign"
        },
        {
            titulo: "Total Brands",
            cifra: brands,
            colorBorder: "warning",
            icono: "fa-user-check"
        }
    ]
    
    useEffect(() => {
        fetch("http://localhost:3001/api/products")
        .then(resultado => resultado.json())
        .then(dataProduct => {
            setProducts(dataProduct.count)
        })

        fetch("http://localhost:3001/api/brands")
        .then(resultado => resultado.json())
        .then(dataBrands => {
            setBrands(dataBrands.count)
        })

        fetch("http://localhost:3001/api/users")
        .then(resultado => resultado.json())
        .then(dataUser => {
            setUsers(
                dataUser.count)
        })
    }, [])

    return (
        <>
            <div className="row">
                {data.map((data, i) => 
                    <Etiqueta key={i} 
                        titulo={data.titulo} 
                        cifra={data.cifra}
                        colorBorder={data.colorBorder}
                        icono={data.icono}
                    /> 
                )}
            </div>
        </>    
    )
}



export default ContentRow;