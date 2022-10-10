import React, {useState} from "react";
import PropTypes from "prop-types";


function InfoTable({id, model, price, stock, creation_date}) {
    return (
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{model}</td>
                <td>{price}</td>
                <td>{stock}</td>
                <td>{creation_date}</td>
            </tr>
        </tbody>
    )
}

InfoTable.propTypes ={
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    stock: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    creation_date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}
InfoTable.defaultProps = {
    id: "Sin id",
    model: "Sin nombre",
    price: "",
    creation_date: "",
}


export default InfoTable;