import React from 'react';

const Pizza = (props) => {
    
    return (
        <tr>
        <td scope="col">{props.type}</td>
        <td scope="col">{props.description}</td>
        <td scope="col">{props.veggie.toString().charAt(0).toUpperCase() + props.veggie.toString().slice(1)}</td>
    </tr>
    );
};

export default Pizza;