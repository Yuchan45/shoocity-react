import React, {useState} from "react";
import PropTypes from "prop-types";


function InfoTable({model, description, price, category_id, colors_hexa, stock}) {
    return (
        <tbody>
            <tr>
                <td>{model}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>
                    <ul>
                        <li>{category_id}</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        {colors_hexa.map((color, i) => 
                        <li key={i}>
                            <span key={i} > 
                                {color.name} 
                            </span>
                        </li> 
                        )}
                    </ul>
                </td>
                <td>{stock}</td>
            </tr>
        </tbody>
    )
}

InfoTable.propTypes ={
    model: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    category_id: PropTypes.string.isRequired,
    stock: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}
InfoTable.defaultProps = {
    model: "Sin nombre",
    description: "Sin descripción",
    price: "",
    category_id: "",
    colors_hexa:[""]
}


export default InfoTable;