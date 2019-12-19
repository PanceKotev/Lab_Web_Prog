package mk.finki.ukim.mk.lab.service;

import mk.finki.ukim.mk.lab.model.Ingredient;
import mk.finki.ukim.mk.lab.model.Pizza;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface IngredientsService {

    Ingredient create(String name, boolean spicy,float amount, boolean veggie);
    Ingredient editIngredient(String name, Optional<Boolean> spicy,Optional<Float> amount, Optional<Boolean> veggie);
    void deleteIngredient(Long id);
    Page<Ingredient> getAllOrdered(int page, int size);
    Ingredient getIngredient(Long id);
    Page<Ingredient> getAllSpicy();

}
