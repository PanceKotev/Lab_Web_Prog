package mk.finki.ukim.mk.lab.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity(name = "pizzas")
public class Pizza {
    @Id
    @GeneratedValue(strategy =GenerationType.AUTO)
    private Long id;

    private String type;

    private String description;
    @ManyToMany(targetEntity = Pizza.class,fetch = FetchType.EAGER)
    private List<Ingredient> ingredients;


    private boolean veggie;

    public Pizza(String type, String description) {
        this.type = type;
        this.description = description;
    }
    public Pizza(String type, String description, List<Ingredient> ingredients,boolean veggie){
        this.type=type;
        this.description=description;

    }
}
