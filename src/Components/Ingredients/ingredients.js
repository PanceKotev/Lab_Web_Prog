import React from 'react';
import Ingredient from '../Ingredient/ingredient'
import {Link} from 'react-router-dom'

const ingredients = (props) => {
    const allIngredients = props.ingredients.map((ingredient, index) => {
        return (
            <Ingredient onDelete={props.onDelete} key={index} name={ingredient.name} amount={ingredient.amount} veggie={ingredient.veggie}
            spicy={ingredient.spicy} id={ingredient.id}/>
        );
    });

    return (
    <div className="row">
        <h4 className="text-upper text-left">Ingredients</h4>
        <div className="table-responsive">
            <table className="table tr-history table-striped small">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Spicy</th>
                <th scope="col">Veggie</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
                <tbody>
                {allIngredients}
                </tbody>
            </table>
        </div>
        <button className="btn btn-outline-secondary">
            <span><strong><Link className="text-secondary" to={"/ingredients/new"}>Add new ingredient</Link></strong></span>
        </button>
    </div>
        
    );
};

export default ingredients;