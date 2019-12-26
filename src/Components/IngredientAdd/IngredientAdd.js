import React from 'react';
import {useHistory,Link} from 'react-router-dom'
const IngredientAdd = (props) => {

    const history=useHistory();

    const onSaveIngredient=(e)=>{
        e.preventDefault();
        const newIngredient={
            name:e.target.ingredient.value,
            spicy:e.target.spicy.checked,
            amount:e.target.amount.value,
            veggie:e.target.veggie.checked
        };
        props.onCreateIngredient(newIngredient);
        history.push("/ingredients");
    }
    const resetAll=(e)=>{
        e.preventDefault();
        document.getElementById("amount").value="";
        document.getElementById("ingredient").value="";
        document.getElementById("veggie").checked=false;
        document.getElementById("spicy").checked=false;


    }
    const checkAll=()=>{
        let am=document.getElementById("amount").value;
        let name=document.getElementById("ingredient").value;
        if(am.length<=50 && name.length<=50 && am!=="" && name!=="")
            document.getElementById("zacuvaj").disabled=false;
            else
            document.getElementById("zacuvaj").disabled=true;
    }

    return (
    <div className="row">
            <form className="card" id="forma" onSubmit={onSaveIngredient}>
                <h4 className="text-upper text-left">Add</h4>
                <div className="form-group row">
                    <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Ingredient name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="ingredient" onChange={checkAll} placeholder="Ingredient name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Amount</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="amount" placeholder="Amount" onChange={checkAll}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="veggie" className="col-sm-4 offset-sm-1 text-left">Veggie</label>
                    <div className="col-sm-6 col-xl-4">
                        <input type="checkbox" className="form-control" id="veggie"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="spicy" className="col-sm-4 offset-sm-1 text-left">Spicy</label>
                    <div className="col-sm-6 col-xl-4">
                        <input type="checkbox" className="form-control" id="spicy"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            type="submit"
                            className="btn btn-primary text-upper"
                            id="zacuvaj"
                            disabled>
                            Save
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button onClick={resetAll}
                            className="btn btn-warning text-upper">
                            Reset
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            className="btn btn-danger text-upper">
                            <Link className="text-white" to={"/ingredients"}>Cancel</Link>
                            
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default IngredientAdd;