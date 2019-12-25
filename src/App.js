import React,{Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Ingredients from "./Components/Ingredients/ingredients"
import Header from "./Components/Header/header"
import IngredientsService from "./repository/IngredientsService"
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      ingredients:[]
    }
    
  }
  componentDidMount() {
    this.loadIngredients();
  }

  loadIngredients=(props)=>{
      IngredientsService.getIngredients().then((data)=>{
        this.setState({
          ingredients:data.data.content
        })
        console.log(this.state.ingredients);
      })
  }
  render() {
  return (
    <div className="App">

        <Router>
        <Header>

        </Header>
        <div className="container">
          <Route path="/ingredients" render={()=><Ingredients ingredients={this.state.ingredients}></Ingredients> 
          }>

          </Route>
        </div>
        <Redirect to={"/"}/>
        </Router>
       
      
    </div>
  );
        }
}

export default App;
