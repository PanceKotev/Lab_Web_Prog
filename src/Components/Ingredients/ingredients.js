import React from 'react';
import Ingredient from '../Ingredient/ingredient'

const ingredients = (props) => {
    const allIngredients = props.ingredients.map((ingredient, index) => {
        return (
            <Ingredient key={index} name={ingredient.name} amount={ingredient.amount} veggie={ingredient.veggie}
            spicy={ingredient.spicy} />
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
                {/* <tr>
                    <td scope="col">Ham</td>
                    <td scope="col">200g</td>
                    <td scope="col">False</td>
                    <td scope="col">False</td>
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
                <tr>
                    <td scope="col">Mushroom</td>
                    <td scope="col">100g</td>
                    <td scope="col">False</td>
                    <td scope="col">True</td>
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
                </tr> */}
                {allIngredients}
                </tbody>
            </table>
        </div>
        <button className="btn btn-outline-secondary">
            <span><strong>Add new ingredient</strong></span>
        </button>
    </div>
    );
};

export default ingredients;