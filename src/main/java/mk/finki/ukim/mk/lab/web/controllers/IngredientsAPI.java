package mk.finki.ukim.mk.lab.web.controllers;

import mk.finki.ukim.mk.lab.model.Ingredient;
import mk.finki.ukim.mk.lab.model.Pizza;
import mk.finki.ukim.mk.lab.service.IngredientsService;
import mk.finki.ukim.mk.lab.service.impl.IngredientsServiceImpl;
import mk.finki.ukim.mk.lab.service.impl.PizzaServiceImpl;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/ingredients",produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class IngredientsAPI {
    private final IngredientsServiceImpl ingredientsService;
    private final PizzaServiceImpl pizzaService;
    public IngredientsAPI(IngredientsServiceImpl ingredientsService, PizzaServiceImpl pizzaService){
        this.pizzaService=pizzaService;
        this.ingredientsService=ingredientsService;

    }
    @PostMapping
    @ResponseStatus(code= HttpStatus.CREATED)
    public Ingredient create(@RequestParam String name,@RequestParam boolean spicy,@RequestParam float amount,@RequestParam boolean veggie){

        return this.ingredientsService.create(name,spicy,amount,veggie);



    }
    @PatchMapping(path = "/{id}")
    public Ingredient patchIngredient(@PathVariable String id,
                                      @RequestParam Optional<Boolean> spicy,
                                      @RequestParam Optional<Float> amount,
                                      @RequestParam Optional<Boolean> veggie){
        return this.ingredientsService.editIngredient(id,spicy,amount,veggie);
    }
    @DeleteMapping(path="/{id}")
    public void deleteIngredient(@PathVariable Long id){
        this.ingredientsService.deleteIngredient(id);
    }

    @GetMapping
    public Page<Ingredient> getAll(@RequestParam(required = false, defaultValue = "0") int page,
                                   @RequestParam(required = false, defaultValue = "5") int size,
                                   @RequestParam(required = false, defaultValue = "false") boolean spicy){
        if(spicy)
            return this.ingredientsService.getAllSpicy();
        return this.ingredientsService.getAllOrdered(page,size);
    }
    @GetMapping(path="{id}")
    public Ingredient getIngredient(@PathVariable Long id){
        return this.ingredientsService.getIngredient(id);
    }
    @GetMapping(path="{id}/pizzas")
    public List<Pizza> getPizzasByIngredient(@PathVariable Long id){
        Ingredient ing=this.ingredientsService.getIngredient(id);
        return this.pizzaService.getPizzasByIngredient(ing);
    }
}
