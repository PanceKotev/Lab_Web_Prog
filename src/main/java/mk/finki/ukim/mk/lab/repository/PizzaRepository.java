package mk.finki.ukim.mk.lab.repository;

import mk.finki.ukim.mk.lab.model.Ingredient;
import mk.finki.ukim.mk.lab.model.Pizza;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PizzaRepository extends JpaRepository<Pizza,Long> {
    public List<Pizza> findAllByIngredientsContaining(Ingredient ingredient);
    @Query("select p from pizzas p where p.ingredients.size<:ingredientNumber")
    public List<Pizza> findAllWithLessThan(int ingredientNumber);
}
