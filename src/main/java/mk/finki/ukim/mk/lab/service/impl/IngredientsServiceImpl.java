package mk.finki.ukim.mk.lab.service.impl;

import mk.finki.ukim.mk.lab.exceptions.IngredientIDNotFoundException;
import mk.finki.ukim.mk.lab.exceptions.IngredientNameExistsException;
import mk.finki.ukim.mk.lab.exceptions.InvalidPageSizeException;
import mk.finki.ukim.mk.lab.exceptions.TooManySpicyException;
import mk.finki.ukim.mk.lab.model.Ingredient;
import mk.finki.ukim.mk.lab.model.Pizza;
import mk.finki.ukim.mk.lab.repository.IngredientsRepository;
import mk.finki.ukim.mk.lab.service.IngredientsService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class IngredientsServiceImpl implements IngredientsService {
    private final IngredientsRepository ingredientsRepository;
    public IngredientsServiceImpl(IngredientsRepository repo){
        this.ingredientsRepository=repo;
    }

    @Override
    public Ingredient create(String name, boolean spicy, float amount, boolean veggie) {
        if(this.ingredientsRepository.findByName(name)==null){
            if(spicy)
                checkSpicy();
            return this.ingredientsRepository.save(new Ingredient(name,spicy,amount,veggie));}
        else
            throw new IngredientNameExistsException(name);

    }

    @Override
    public Ingredient editIngredient(String name, Optional<Boolean> spicy, Optional<Float> amount, Optional<Boolean> veggie) {
        Ingredient ingredient;
        if(name!=null){
            if(spicy.isPresent() && spicy.get()==true)
                checkSpicy();
            ingredient=ingredientsRepository.findByName(name);
            amount.ifPresent(ingredient::setAmount);
            spicy.ifPresent(ingredient::setSpicy);
            veggie.ifPresent(ingredient::setVeggie);
            return ingredient;
        }else
        throw new IngredientIDNotFoundException();

    }

    @Override
    public void deleteIngredient(Long id) {
        if(ingredientsRepository.existsById(id))
        ingredientsRepository.deleteById(id);
        else
            throw new IngredientIDNotFoundException();
    }

    @Override
    public Page<Ingredient> getAllOrdered(int page, int size) {
        if(size<10){
        return ingredientsRepository.findAll(PageRequest.of(page,size));
        }
        else throw new InvalidPageSizeException();
    }

    @Override
    public Ingredient getIngredient(Long id) {
        Optional<Ingredient> ing=ingredientsRepository.findById(id);
        return ing.orElseThrow(IngredientIDNotFoundException::new);
    }

    @Override
    public Page<Ingredient> getAllSpicy() {
            int size=this.ingredientsRepository.countAllBySpicyIsTrue();
            return ingredientsRepository.findAllBySpicyIsTrue(PageRequest.of(0,size));

    }




    private void checkSpicy(){
        if(this.ingredientsRepository.countAllBySpicyIsTrue()==3)
            throw new TooManySpicyException();
    }
}
