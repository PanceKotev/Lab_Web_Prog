package mk.finki.ukim.mk.lab.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.BAD_REQUEST)
public class IngredientNameExistsException extends RuntimeException {
    public IngredientNameExistsException(String name){
        super("An ingredient with the name "+name+" already exists");
    }
}
