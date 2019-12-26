import React,{Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Ingredients from "./Components/Ingredients/ingredients"
import Header from "./Components/Header/header"
import IngredientsService from "./repository/IngredientsService"
import IngredientAdd from "./Components/IngredientAdd/IngredientAdd"
import IngredientEdit from "./Components/IngredientEdit/IngredientEdit"
import IngredientDetails from "./Components/IngredientDetails/IngredientDetails"
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      ingredients:[]
    }
    
  }
  createIngredient = (newIngredient)=>{
    IngredientsService.addIngredient(newIngredient).then((response)=>{
        let newIngredient=response.data;
        this.setState((prevState)=>{
          let newIngredients=[...prevState.ingredients,newIngredient];
          return {
              "ingredients": newIngredients
          }
        });

    });

  }
  editIngredient = (editedIngredient)=>{
    IngredientsService.editIngredient(editedIngredient).then((response)=>{

        let ingredient=response.data;
       
        this.setState((prevState)=>{
          let newIngredients=prevState.ingredients.filter((item)=>{
            if(item.id===ingredient.id){
              return ingredient;
            }
            return item;
          })
          return {
            "ingredients": newIngredients
          }
        });
    });
  }

  componentDidMount() {
    this.loadIngredients();
  }

  loadIngredients=(props)=>{
      IngredientsService.getIngredients().then((data)=>{
        this.setState({
          ingredients:data.data.content
        })
      })
  }
  deleteIngredient=(ingredID)=>{
      IngredientsService.deleteIngredient(ingredID).then((data)=>{
        this.setState((state) => {
          const ingred = state.ingredients.filter((t) => {
              return t.id !== ingredID;
          })
          return {ingred}
      });
      });
  }
  render() {
  return (
    <div className="App">

        <Router>
        <Header>

        </Header>
        <div className="container">
          <Route path="/ingredients" exact render={()=><Ingredients ingredients={this.state.ingredients} onDelete={this.deleteIngredient}></Ingredients> 
          }>

          </Route>
          <Route path="/ingredients/new" render={()=><IngredientAdd onCreateIngredient={this.createIngredient}></IngredientAdd>}></Route>
          <Route path="/ingredients/:ingredientID/edit" render={()=><IngredientEdit onEditIngredient={this.editIngredient}></IngredientEdit>}></Route>
          <Route path="/ingredients/:ingredientID/details" render={()=><IngredientDetails ></IngredientDetails>}></Route>
        </div>
        <Redirect to={"/"}/>
        </Router>
       
      
    </div>
  );
        }
}

export default App;
