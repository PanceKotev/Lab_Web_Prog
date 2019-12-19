package mk.finki.ukim.mk.lab.service;

import mk.finki.ukim.mk.lab.model.Ingredient;
import mk.finki.ukim.mk.lab.model.Pizza;

import java.util.List;

public interface PizzaService {
    List<Pizza> listPizzas();
    List<Pizza> getPizzasByIngredient(Ingredient ingredient);
    Pizza savePizza(String pizzaType, String description);
    Pizza createPizza(String pizzaType, String description, List<Long> ingredientIDs);
    Pizza editPizza(Long pizzaID,String pizzaType,String description,List<Long> ingredientIDs,boolean veggie);
    void deletePizza(Long pizzaID);
    Pizza getPizza(Long pizzaID);
    List<Pizza> findAllLessThan(int totalIngredients);
    List<Ingredient> getCommonIngredients(Long pizza1ID, Long pizza2ID);
}
