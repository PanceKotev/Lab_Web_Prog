import React from 'react';

const ingredient = (props) => {
    return (
        <tr>
        <td scope="col">{props.name}</td>
        <td scope="col">{props.amount}g</td>
        <td scope="col">{props.spicy.toString().charAt(0).toUpperCase() + props.spicy.toString().slice(1)}</td>
        <td scope="col">{props.veggie.toString().charAt(0).toUpperCase() + props.veggie.toString().slice(1)}</td>
        <td scope="col">
            <button className="btn btn-sm btn-secondary">
                <span className="fa fa-edit"/>
                <span><strong>Edit</strong></span>
            </button>
            <button className="btn btn-sm btn-outline-secondary ">
                <span className="fa fa-remove"/>
                <span><strong>Remove</strong></span>
            </button>
<button className="btn btn-sm btn-outline-dark">
<span><strong>Details</strong></span>
</button>
        </td>
    </tr>
    );
};

export default ingredient;