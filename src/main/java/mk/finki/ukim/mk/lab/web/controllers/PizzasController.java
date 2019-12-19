package mk.finki.ukim.mk.lab.web.controllers;

import mk.finki.ukim.mk.lab.service.PizzaService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.DispatcherServlet;

import java.util.UUID;

@Controller
public class PizzasController {

    private final PizzaService pizzaService;

    public PizzasController(PizzaService pizzaService) {
        this.pizzaService = pizzaService;
    }

    @PostMapping(path = "/pizzas/create")
    public String createPizza(@RequestParam(value = "pizza") String pizzaName, @RequestParam String description){
        this.pizzaService.savePizza(pizzaName, description);
        return "redirect:/";
    }

}
