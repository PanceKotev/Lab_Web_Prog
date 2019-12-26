import React from 'react';
import {Link} from 'react-router-dom'

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
                <span><strong><Link className="text-light" to={"/ingredients/"+props.id+"/edit"}>Edit</Link></strong></span>
            </button>
            <button className="btn btn-sm btn-outline-secondary ">
                <span className="fa fa-remove"/>
                <span><strong><a onClick={()=>props.onDelete(props.id)} className="text-secondary">Remove</a></strong></span>
            </button>
<button className="btn btn-sm btn-outline-dark">
<span><strong><Link className="text-secondary" to={"/ingredients/"+props.id+"/details"}>Details</Link></strong></span>
</button>
        </td>
    </tr>
    );
};

export default ingredient;