import React from 'react';
import Pizza from '../Pizza/Pizza'
import {Link} from 'react-router-dom'

const pizzas = (props) => {
    console.log(props.picite);
    const allPizzas = props.picite.map((pizza, index) => {

        return (
            <Pizza key={index} type={pizza.type} description={pizza.description} veggie={pizza.veggie} id={pizza.id} />
        );
    });

    return (
    <div className="row">
        <h4 className="text-upper text-left">Pizzas</h4>
        <div className="table-responsive">
            <table className="table tr-history table-striped small">
            <thead>
            <tr>
                <th scope="col">Pizza Type</th>
                <th scope="col">Description</th>
                <th scope="col">Veggie</th>
            </tr>
            </thead>
                <tbody>
                {allPizzas}
                </tbody>
            </table>
        </div>
    </div>
        
    );
};

export default pizzas;