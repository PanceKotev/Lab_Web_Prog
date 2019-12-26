package mk.finki.ukim.mk.lab.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity(name = "ingredients")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    public Ingredient(String name, boolean spicy,float amount,boolean veggie){
        this.name=name;
        this.spicy=spicy;
        this.amount=amount;
        this.veggie=veggie;
    }
    private String name;

    private boolean spicy;

    private float amount;

    private boolean veggie;
    @ManyToMany(mappedBy = "ingredients",fetch=FetchType.EAGER)
    @JsonIgnore
    private List<Pizza> pizzas;

}
