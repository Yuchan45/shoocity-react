import React, {useState, useEffect} from "react";
import InfoTable from "./InfoTable";
let data = [
    {
        id: "Ningun id",
        model: "Ninguna información",
        price:"$0",
        brand_id: ["Ninguna información"],
        stock: 0, 
        creation_date: "No hay fecha"
    }
]

function DataBase(){

    let [products, setProducts] = useState(data);

    useEffect(()=>{
        fetch("http://localhost:3001/api/products")
        .then(res => res.json())
        .then(data =>{
            let array = data.data
            setProducts(array)
        })
        
    },[])
    
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Model</th>
                                <th>Price</th>
                                <th>Brand</th>
                                <th>Stock</th>
                                <th>Creation date</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Model</th>
                                <th>Price</th>
                                <th>Brand</th>
                                <th>Stock</th>
                                <th>Creation date</th>
                            </tr>
                        </tfoot>
                        {products.map((data,i)=>

                            <InfoTable key={i} 
                                id= {data.id}
                                model= {data.model}
                                price={data.price}
                                brand_id= {data.brand_id.name}
                                stock= {data.stock}
                                creation_date= {data.creation_date}
                            />
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}



export default DataBase;