import React,{useState,useEffect} from 'react';
import {useParams,useHistory,Link} from 'react-router-dom'
import axios from '../../custom-axios/axios'

const IngredientEdit = (props) => {
    const [ingredient,setIngredient]=useState({});
    const {ingredientID}=useParams();
    const history=useHistory();

    useEffect(()=>{
        axios.get("/ingredients/"+ingredientID).then((data)=>{
            setIngredient(data.data);
        })

    },[])
    const EditIngredient=(e)=>{
        e.preventDefault();
        const editedIngredient={
            id:ingredientID,
            name:e.target.ingredient.value,
            spicy:e.target.spicy.checked,
            amount:e.target.amount.value,
            veggie:e.target.veggie.checked
        };
        props.onEditIngredient(editedIngredient);
        history.push("/ingredients");
    }
    const checkAll=()=>{
        let am=document.getElementById("amount").value;
        let name=document.getElementById("ingredient").value;
        if(am.length<=50 && name.length<=50 && am!=="" && name!=="")
            document.getElementById("zacuvaj").disabled=false;
            else
            document.getElementById("zacuvaj").disabled=true;
    }
    const resetAll=(e)=>{
        e.preventDefault();
        document.getElementById("zacuvaj").disabled=true;
        setIngredient({
            name: '',
            amount: '',
            spicy: false,
            veggie: false
        });


    }
   
    const handleChange=(e)=>{
        let paramName=e.target.id;
        let paramValue;
        if(e.target.type==='text')
            paramValue=e.target.value;
        else
            paramValue=e.target.checked;
        setIngredient({...ingredient,[paramName]:paramValue});
    }
    return (
        <div className="row">
                <form className="card" id="forma" onSubmit={EditIngredient}>
                    <h4 className="text-upper text-left">Edit</h4>
                    <div className="form-group row">
                        <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Ingredient name</label>
                        <div className="col-sm-6">
                            <input type="text" defaultValue={ingredient.name} className="form-control" id="ingredient" onChange={e => {  handleChange(e);checkAll() }} placeholder="Ingredient name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Amount</label>
                        <div className="col-sm-6">
                            <input type="text" defaultValue={ingredient.amount} className="form-control" id="amount" placeholder="Amount" onChange={e => {  handleChange(e);checkAll() }}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="veggie"  className="col-sm-4 offset-sm-1 text-left">Veggie</label>
                        <div className="col-sm-6 col-xl-4">
                            <input type="checkbox" defaultChecked={ingredient.veggie} onChange={handleChange} className="form-control" id="veggie"/>
                        </div>
                    </div>
    
                    <div className="form-group row">
                        <label htmlFor="spicy" className="col-sm-4 offset-sm-1 text-left">Spicy</label>
                        <div className="col-sm-6 col-xl-4">
                            <input type="checkbox" defaultChecked={ingredient.spicy} className="form-control" id="spicy" onChange={handleChange}/>
                        </div>
                    </div>
    
                    <div className="form-group row">
                        <div
                            className="offset-sm-1 col-sm-3  text-center">
                            <button
                                type="submit"
                                className="btn btn-primary text-upper"
                                id="zacuvaj"
                                >
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

export default IngredientEdit;