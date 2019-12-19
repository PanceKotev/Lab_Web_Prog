package mk.finki.ukim.mk.lab.web.controllers;

import mk.finki.ukim.mk.lab.model.Ingredient;
import mk.finki.ukim.mk.lab.model.Pizza;
import mk.finki.ukim.mk.lab.service.impl.PizzaServiceImpl;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="/pizzas",produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class PizzasAPI {
    private final PizzaServiceImpl pizzaService;

    public PizzasAPI(PizzaServiceImpl pizzaService) {
        this.pizzaService = pizzaService;
    }
    @PostMapping
    public Pizza create(@RequestParam String pizzaType,@RequestParam String description,@RequestParam List<Long> ingredientIDs){
        return this.pizzaService.createPizza(pizzaType,description,ingredientIDs);
    }
    @PutMapping(value="/{id}")
    public Pizza editPizza(@PathVariable Long id,@RequestParam String pizzaType, @RequestParam String description,@RequestParam List<Long> ingredientIDs,@RequestParam boolean veggie){
        return this.pizzaService.editPizza(id,pizzaType,description,ingredientIDs,veggie);
    }
    @DeleteMapping(value="/{id}")
    public void deletePizza(@PathVariable Long id){
        this.pizzaService.deletePizza(id);
    }
    @GetMapping
    public List<Pizza> getPizzas(@RequestParam Optional<Integer> totalIngredients){
        if(totalIngredients.isPresent())
            return this.pizzaService.findAllLessThan(totalIngredients.get());
        return this.pizzaService.listPizzas();
    }
    @GetMapping(value="/{id}")
    public Pizza getPizza(@PathVariable Long id){
        return this.pizzaService.getPizza(id);
    }
    @GetMapping(value="/compare")
    public List<Ingredient> getCommonIngredients(@RequestParam Long pizza1,@RequestParam Long pizza2){
        return this.pizzaService.getCommonIngredients(pizza1,pizza2);
    }

}
