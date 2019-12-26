import React,{useState,useEffect} from 'react';
import {useParams,useHistory,Link} from 'react-router-dom'
import axios from '../../custom-axios/axios'

const IngredientDetails = (props) => {
    const [ingredient,setIngredient]=useState({});
    const [pizzas,setPizzas]=useState({});
    const {ingredientID}=useParams();
    const history=useHistory();
    useEffect(()=>{
        axios.get("/ingredients/"+ingredientID).then((data)=>{
            setIngredient(data.data);
        })
        axios.get("/ingredients/"+ingredientID+"/pizzas").then((data)=>{
            console.log(pizzas);
            setPizzas(data.data);
        })

    },[])
    return (
        <div className="card">
                    <h4 className="text-upper text-left">Details</h4>
                    <div className="form-group row">
                        <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Ingredient name</label>
                        <div className="col-sm-6">
                           {ingredient.name}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Amount</label>
                        <div className="col-sm-6">
                            {ingredient.amount}g
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="veggie"  className="col-sm-4 offset-sm-1 text-left">Veggie</label>
                        <div className="col-sm-6 col-xl-4">
                           {ingredient.veggie.toString().charAt(0).toUpperCase() + ingredient.veggie.toString().slice(1)}
                        </div>
                    </div>
    
                    <div className="form-group row">
                        <label htmlFor="spicy" className="col-sm-4 offset-sm-1 text-left">Spicy</label>
                        <div className="col-sm-6 col-xl-4">
                            {ingredient.spicy.toString().charAt(0).toUpperCase() + ingredient.spicy.toString().slice(1)}
                        </div>
                    </div>
                    </div>
    );
};

export default IngredientDetails;