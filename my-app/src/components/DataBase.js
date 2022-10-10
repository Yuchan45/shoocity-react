import React, {useState, useEffect} from "react";
import InfoTable from "./InfoTable";
let data = [
    {
        model: "Ninguna información",
        description:"Ninguna información",
        price:"$0",
        category_id: ["Ninguna información"],
        colors_hexa:["Ninguna infomación"],
        stock: 0
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
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Colors</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Colors</th>
                                <th>Stock</th>
                            </tr>
                        </tfoot>
                        {products.map((data,i)=>

                            <InfoTable key={i} 
                                model= {data.model}
                                description= {data.description}
                                price={data.price}
                                category_id= {data.category_id.name}
                                colors_hexa= {data.colors_hexa}
                                stock= {data.stock}
                            />
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}



export default DataBase;