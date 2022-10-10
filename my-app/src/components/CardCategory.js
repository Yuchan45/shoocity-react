import React from "react";

function CardCategory({marca, count}){
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    {marca}: {count} products
				</div>
                
            </div>
        </div>
    )
}

export default CardCategory;