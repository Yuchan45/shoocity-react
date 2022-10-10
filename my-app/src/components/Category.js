import React from "react";
import { useState, useEffect } from "react";


function  Category() {

  const [categories, setCategories] = useState(["prueba"]);

    useEffect(() => {
      async function fetchCategories() {
        const response = await fetch('http://localhost:3001/api/brands');
        const data = await response.json();
        setCategories(data.brands)
      }
      fetchCategories()
    }, [])


  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Brands in Data Base
          </h5>
        </div>

        <div className="card-body">
          <div className="row">
              {categories.map((oneCategory, i) => 
                  <div className="col-lg-6 mb-4"  key={i}>
                    <div className="card bg-info text-white shadow">
                      <div className="card-body"> {oneCategory.name}: {oneCategory.id}  </div>

                    </div>
                  </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
// import {useState, useEffect} from "react";
// import CardCategory from "./CardCategory";

// function Category(){
//     let [categories, setCategories] = useState([{marca:"Ninguna Categoria"}]);
//     useEffect(()=>{
//         console.log(categories)
//         fetch("http://localhost:3001/brands")
//         .then(res => res.json())
//         .then(data => {
//             setCategories(data.brands)
//         })

//     },[])



//     return (
//         <div className="col-lg-6 mb-4">
//             <div className="card shadow mb-4">
//                 <div className="card-header py-3">
//                     <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
//                 </div>
//                 <div className="card-body">
//                     <div className="row">
//                         { categories.map((category, i) =>
//                             <CardCategory key={i} marca={category.name} count={category.id} />)
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Category;