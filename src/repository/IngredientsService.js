import axios from  '../custom-axios/axios'
import qs from 'qs'

const IngredientsService = {
    getIngredients: ()=>{
        return axios.get("/ingredients");
    },
    addIngredient: (ingredient) => {
        const data = {
            ...ingredient
        }
        const formParams = qs.stringify(data);
        return axios.post("/ingredients",formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },
    editIngredient: (ingredient) =>{
        const data={...ingredient}
        const ingredientID=ingredient.id;
        const formParams = qs.stringify(data);
        return axios.patch("/ingredients/"+ingredientID,formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
    },
    deleteIngredient:(ingID)=>{
        return axios.delete('ingredients/'+ingID);
    }

};
export default IngredientsService;