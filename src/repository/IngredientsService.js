import axios from  '../custom-axios/axios'
import qs from 'qs'

const IngredientsService = {
    getIngredients: ()=>{
        return axios.get("/ingredients");
    }

};
export default IngredientsService;