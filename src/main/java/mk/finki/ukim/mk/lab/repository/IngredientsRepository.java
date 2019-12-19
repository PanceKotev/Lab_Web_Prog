package mk.finki.ukim.mk.lab.repository;

import mk.finki.ukim.mk.lab.model.Ingredient;
import mk.finki.ukim.mk.lab.model.Pizza;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientsRepository extends JpaRepository<Ingredient,Long> {
    public Page<Ingredient> findAllBySpicyIsTrue(Pageable pageable);

    public List<Ingredient> findAllByPizzasContainingAndPizzasContaining(Pizza pizza1, Pizza pizza2);

    public Ingredient findByName(String name);
    public int countAllBySpicyIsTrue();

}
