package mk.finki.ukim.mk.lab.service.impl;

import mk.finki.ukim.mk.lab.exceptions.InvalidPizzaIDException;
import mk.finki.ukim.mk.lab.exceptions.PizzaNotVeggieException;
import mk.finki.ukim.mk.lab.model.Ingredient;
import mk.finki.ukim.mk.lab.model.Pizza;
import mk.finki.ukim.mk.lab.repository.IngredientsRepository;
import mk.finki.ukim.mk.lab.repository.PizzaRepository;
import mk.finki.ukim.mk.lab.service.PizzaService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PizzaServiceImpl implements PizzaService {
    private final PizzaRepository pizzaRepository;
    private final IngredientsRepository ingredientsRepository;

 public PizzaServiceImpl(PizzaRepository pizzaRepository,IngredientsRepository ingredientsRepository) {
        this.pizzaRepository=pizzaRepository;
        this.ingredientsRepository=ingredientsRepository;
  }

    @Override
    public List<Pizza> listPizzas() {
        return this.pizzaRepository.findAll();
   }

    @Override
    public Pizza savePizza(String pizzaType, String description){
       return this.pizzaRepository.save(new Pizza(pizzaType, description));
    }

    @Override
    public Pizza createPizza(String pizzaType, String description, List<Long> ingredientIDs) {
        List<Ingredient> ingredients=this.ingredientsRepository.findAllById(ingredientIDs);
        boolean veggie=allVeggie(ingredients);
        return this.pizzaRepository.save(new Pizza(pizzaType,description,ingredients,veggie));
    }

    @Override
    public Pizza editPizza(Long pizzaID, String pizzaType, String description, List<Long> ingredientIDs, boolean veggie) {
        List<Ingredient> ingredients=this.ingredientsRepository.findAllById(ingredientIDs);
        Pizza pizza=this.pizzaRepository.findById(pizzaID).orElseThrow(InvalidPizzaIDException::new);
        if(veggie)
            checkIngredientsIfVeggie(ingredients);
        pizza.setDescription(description);
        pizza.setType(pizzaType);
        pizza.setIngredients(ingredients);
        pizza.setVeggie(veggie);
        return this.pizzaRepository.save(pizza);
    }

    @Override
    public void deletePizza(Long pizzaID) {
        Pizza pizza=this.pizzaRepository.findById(pizzaID).orElseThrow(InvalidPizzaIDException::new);
       this.pizzaRepository.delete(pizza);
    }

    @Override
    public Pizza getPizza(Long pizzaID) {
        return this.pizzaRepository.findById(pizzaID).orElseThrow(InvalidPizzaIDException::new);
    }

    @Override
    public List<Pizza> findAllLessThan(int totalIngredients) {
        return this.pizzaRepository.findAllWithLessThan(totalIngredients);
    }

    @Override
    public List<Pizza> getPizzasByIngredient(Ingredient ingredient){
        return this.pizzaRepository.findAllByIngredientsContaining(ingredient);
    }
    private boolean allVeggie(List<Ingredient> ingredients){
     return ingredients.stream().allMatch(Ingredient::isVeggie);
    }

    private void checkIngredientsIfVeggie(List<Ingredient> ingredients){
     if(!allVeggie(ingredients))
         throw new PizzaNotVeggieException();
    }
    @Override
    public List<Ingredient> getCommonIngredients(Long pizza1ID, Long pizza2ID) {
        Pizza pizza1=this.pizzaRepository.findById(pizza1ID).orElseThrow(InvalidPizzaIDException::new);
        Pizza pizza2=this.pizzaRepository.findById(pizza2ID).orElseThrow(InvalidPizzaIDException::new);
        return this.ingredientsRepository.findAllByPizzasContainingAndPizzasContaining(pizza1,pizza2);
    }
}
