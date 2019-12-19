package mk.finki.ukim.mk.lab.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND)
public class IngredientIDNotFoundException extends RuntimeException {
    public IngredientIDNotFoundException(){
        super("An ingredient with that ID does not exist.");
    }
}
